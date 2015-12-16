import test from 'tape';
import request from 'supertest';
import keystone from 'test/helpers/keystone';

const app = keystone.app;
const route = '/teams';

test(`GET ${ route }`, assert => {
  assert.test(route, assert => {
    const msg = 'should return 200 OK';

    request(app)
      .get(route)
      .expect(200)
      .end(err => {
        assert.error(err, 'should not return an error');
        assert.end();
      });
  });
});
