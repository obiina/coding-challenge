const request = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const Task = require('../models/Task')


describe('Task API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/task_test_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create a new task', async () => {
    const taskData = {
      title: 'Test Task',
      duedate: '2025-01-01T00:00:00Z',
      status: 'Pending',
    };
    const response = await request(app).post('/api/tasks').send(taskData);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe('Test Task');
  });
});
