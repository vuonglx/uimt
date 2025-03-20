import React, { useState, useMemo } from 'react';

const Table = ({ columns, data }) => {
  const [searchTerm, setSearchTerm] = useState(''); // Tìm kiếm
  const [filter, setFilter] = useState({}); // Lọc theo cột
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 5; // Số mục mỗi trang

  // Hàm lọc và tìm kiếm dữ liệu
  const filteredData = useMemo(() => {
    let result = [...data];

    // Tìm kiếm toàn cục
    if (searchTerm) {
      result = result.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Lọc theo cột
    Object.keys(filter).forEach((key) => {
      if (filter[key]) {
        result = result.filter((item) =>
          String(item[key]).toLowerCase().includes(filter[key].toLowerCase())
        );
      }
    });

    return result;
  }, [data, searchTerm, filter]);

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = (column, value) => {
    setFilter((prev) => ({ ...prev, [column]: value }));
    setCurrentPage(1); // Reset về trang đầu khi lọc
  };

  // Xử lý thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-container">
      {/* Ô tìm kiếm */}
      <div className="table-search">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset trang khi tìm kiếm
          }}
        />
      </div>

      {/* Bảng */}
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>
                {col.label}
                {/* Bộ lọc cho từng cột */}
                <input
                  type="text"
                  placeholder={`Lọc ${col.label}`}
                  onChange={(e) => handleFilterChange(col.key, e.target.value)}
                  className="filter-input"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
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

      {/* Phân trang */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Trước
        </button>
        <span>
          Trang {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Sau
        </button>
      </div>
    </div>
  );
};

export default Table;