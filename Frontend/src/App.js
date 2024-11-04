import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetail from './components/StudentDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Quản Lý Học Sinh</h1>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/student/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
