import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css'; // Import CSS cho form học sinh

function StudentForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', { name, age, class: studentClass });
      alert('Học sinh đã được thêm thành công');
      setName('');
      setAge('');
      setStudentClass('');
    } catch (error) {
      console.error('Lỗi khi thêm học sinh:', error);
      alert('Không thể thêm học sinh');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Thêm Học Sinh Mới</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tên"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Tuổi"
        required
      />
      <input
        type="text"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        placeholder="Lớp"
        required
      />
      <button type="submit">Thêm Học Sinh</button>
    </form>
  );
}

export default StudentForm;
