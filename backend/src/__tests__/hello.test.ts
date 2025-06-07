import request from 'supertest';
import { app } from '../index';

describe('GET /hello', () => {
  it('responds with JSON message', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Hydra backend!' });
  });
});
