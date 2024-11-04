import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './StudentDetail.css';

function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [studentClass, setStudentClass] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${id}`);
        setStudent(response.data);
        setName(response.data.name);
        setAge(response.data.age);
        setStudentClass(response.data.class);
      } catch (error) {
        console.error('Lỗi khi tải thông tin học sinh:', error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, { name, age, class: studentClass });
      alert('Thông tin học sinh đã được cập nhật');
      setIsEditing(false);
    } catch (error) {
      console.error('Lỗi khi cập nhật thông tin học sinh:', error);
      alert('Không thể cập nhật thông tin học sinh');
    }
  };

  return (
    <div className="student-detail">
      <h2>Thông Tin Học Sinh</h2>
      {isEditing ? (
        <form onSubmit={handleUpdate} className="student-detail-form">
          <div className="form-group">
            <label>Tên:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Tuổi:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Lớp:</label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cập Nhật Thông Tin</button>
          <button type="button" onClick={() => setIsEditing(false)}>Hủy</button>
        </form>
      ) : (
        <div className="student-info">
          <table className="student-info-table">
            <tbody>
              <tr>
                <td><strong>Tên:</strong></td>
                <td>{student.name}</td>
              </tr>
              <tr>
                <td><strong>Tuổi:</strong></td>
                <td>{student.age}</td>
              </tr>
              <tr>
                <td><strong>Lớp:</strong></td>
                <td>{student.class}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setIsEditing(true)}>Sửa Thông Tin</button>
        </div>
      )}
      <button onClick={() => navigate('/')}>Trở Về</button>
    </div>
  );
}

export default StudentDetail;
