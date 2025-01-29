const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./studentModel');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/school', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.post('/students', async (req, res) => {
  const { name, age, class: studentClass, section } = req.body;
  if (!name || !age || !studentClass) {
    return res.status(400).json({ error: 'Name, age, and class are required' });
  }
  try {
    const student = new Student({ name, age, class: studentClass, section });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

app.get('/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
});

app.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, class: studentClass, section } = req.body;
  if (!name || !age || !studentClass) {
    return res.status(400).json({ error: 'Name, age, and class are required' });
  }
  try {
    const student = await Student.findByIdAndUpdate(id, { name, age, class: studentClass, section }, { new: true });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
});

app.delete('/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
