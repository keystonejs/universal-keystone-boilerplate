import test from 'tape';
import request from 'supertest';
import keystone from 'test/helpers/keystone';

const app = keystone.app;
const route = '/';

test(`GET ${ route }`, assert => {
  assert.test(route, assert => {
    const msg = 'should not return an error';

    request(app)
      .get(route)
      .expect(200)
      .end(err => {
        assert.error(err, msg);
        assert.end();
      });
  });
});
