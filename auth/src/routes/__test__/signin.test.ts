import request from 'supertest';
import { app } from '../../app';
import { Password } from '../../services/password';

it('fails when a email that does not exist is supplied', async () => {
    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'password' 
        })
        .expect(400);
});

it('fails when an incorrect password issupplied', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);

    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'asdfasdfas'
        })
        .expect(400);
});

it('responds with a cookie when given valid credential', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);

    const response = await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(200);
    
        expect(response.get('Set-Cookie')).toBeDefined();
})