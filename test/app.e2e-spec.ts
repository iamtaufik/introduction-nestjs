import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Get All Users', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/users')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'user 1 updated',
          email: 'user@dev.com',
        },
        {
          id: 2,
          name: 'User 2',
          email: 'user2@dev.com',
        },
      ]);
  });
});

describe('Get User By id', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/users/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/users/1')
      .expect(200)
      .expect({
        id: 1,
        name: 'user 1 updated',
        email: 'user@dev.com',
      });
  });
});
