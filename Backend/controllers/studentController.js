const Student = require('../Models/Student');

// Hàm để tạo mới một học sinh
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Hàm để lấy danh sách học sinh
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Hàm để lấy học sinh theo ID
const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    console.error(error); // In lỗi ra console
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params; // Lấy ID từ tham số đường dẫn
  try {
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true, runValidators: true }); // Cập nhật học sinh
    if (!student) return res.status(404).json({ message: 'Student not found' }); // Nếu không tìm thấy
    res.json(student); // Trả về thông tin học sinh đã được cập nhật
  } catch (error) {
    res.status(400).json({ message: error.message }); // Trả về thông báo lỗi
  }
};


module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent
};

