import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentList.css';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu học sinh:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Danh Sách Học Sinh</h2>
      <Link to="/add-student">
        <button>Thêm Học Sinh</button>
      </Link>
      <table className="student-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/student/${student._id}`}>
                  <button>Xem Chi Tiết</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
