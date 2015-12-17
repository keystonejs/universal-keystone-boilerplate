import test from 'tape';
import request from 'supertest';
import keystone from 'test/helpers/keystone';
import cheerio from 'cheerio';

const app = keystone.app;
const route = '/teams';

test(`GET ${ route }`, assert => {
  assert.test(route, assert => {
    const msg = 'should not return an error.';

    request(app)
      .get(route)
      .expect(200)
      .end(err => {
        assert.error(err, msg);
        assert.end();
      });
  });

  assert.test(route + ' response body', assert => {
    const msg = 'should return rendered team list.';
    const noError = 'should not return an error.';

    request(app)
      .get(route)
      .expect(200)
      .end((err, response) => {
        assert.error(err, noError);
        const expected = 'foo';
        const $ = cheerio.load(response.text);
        const actual = $('#content').html();

        assert.equal(actual, expected, msg);
        assert.end();
      });
  });
});
