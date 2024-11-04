const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./Routes/studentRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Kết nối MongoDB thất bại', err));

// Sử dụng route cho học sinh
app.use('/api', studentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
