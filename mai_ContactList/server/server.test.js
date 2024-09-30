const request = require("supertest"); 
const { app } = require('./server.js'); 

describe('API Tests', () => {

    describe('GET /api', () => {
        it('should return a welcome message', async () => {
          const response = await request(app).get('/api');
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe('Hello from the API!');
        });
      });
      
    describe('GET /mai_contacts', () => {
        it('should return a welcome message', async () => {
            const response = await request(app).get('/mai_contacts');
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });
});
