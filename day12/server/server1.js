const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
  section: { type: String, default: 'A' },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
