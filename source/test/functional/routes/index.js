import test from 'tape';
import request from 'supertest';
import keystone from 'keystone.js';

const port = process.env.TEST_PORT || 5150;
keystone.set('port', port);

const app = keystone.app;

test('route tests', assert => {
  assert.test('home route', assert => {
    const msg = 'should return 200 OK';

    request(app)
      .get('/')
      .expect(200)
      .end(err => {
        assert.error(err, 'should not return an error');
        assert.end();
      });
  });
});
