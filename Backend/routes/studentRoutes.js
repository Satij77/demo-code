const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');

// Route để tạo mới một học sinh
router.post('/students', studentController.createStudent);

// Route để lấy danh sách học sinh
router.get('/students', studentController.getStudents);

// GET học sinh theo ID
router.get('/students/:id', studentController.getStudentById); // Đường dẫn để lấy học sinh theo ID

// PUT cập nhật học sinh theo ID
router.put('/:id', studentController.updateStudent);

module.exports = router;
