import React, { useState, useMemo } from 'react';
import Button from './Button';

const Table = ({ columns, data, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    let result = [...data];
    if (searchTerm) {
      result = result.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    Object.keys(filter).forEach((key) => {
      if (filter[key]) {
        result = result.filter((item) =>
          String(item[key]).toLowerCase().includes(filter[key].toLowerCase())
        );
      }
    });
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [data, searchTerm, filter, sortConfig]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (column, value) => {
    setFilter((prev) => ({ ...prev, [column]: value }));
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <input
          type="text"
          placeholder="Tìm kiếm tổ chức..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <Button type="primary">Thêm tổ chức</Button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} onClick={() => col.sortable && handleSort(col.key)}>
                {col.label}
                {sortConfig.key === col.key && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
                {col.filterable && (
                  <input
                    type="text"
                    placeholder={`Lọc ${col.label}`}
                    onChange={(e) => handleFilterChange(col.key, e.target.value)}
                    className="filter-input"
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.key === 'actions' ? (
                      <div className="actions">
                        <span className="action-icon edit" onClick={() => onEdit(row)}>✏️</span>
                        <span className="action-icon delete" onClick={() => onDelete(row)}>🗑️</span>
                      </div>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <Button
          type="secondary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Trước
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            type={currentPage === page ? 'primary' : 'secondary'}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          type="secondary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Sau
        </Button>
      </div>
    </div>
  );
};

export default Table;