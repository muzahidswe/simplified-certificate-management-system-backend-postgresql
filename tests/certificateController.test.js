const request = require('supertest');
const app = require('../index');

describe('Certificates Controller', () => {
  it('should get all certificate list', async () => {
    try {
      const response = await request(app).get('/certificates/list');
      expect(response.status).toBe(200);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it('should get certificate details by ID', async () => {
    try {
      const response = await request(app).get('/certificates/details/1');
      expect(response.status).toBe(200);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it('should create a new certificate', async () => {
    try{
      const certificateData = {
        name: 'Test Certificate',
        category: 'Test Category',
        issuer: 'Test Issuer',
        issued_to: 'Test Recipient',
        issued_on: '2023-12-15',
        expiration_date: '2024-12-15',
      };
      const response = await request(app).post('/certificates/add-new').send(certificateData);
      expect(response.status).toBe(200);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it('should delete a certificate by ID', async () => {
    try{
      const response = await request(app).delete('/certificates/delete/1');
      expect(response.status).toBe(200);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});

