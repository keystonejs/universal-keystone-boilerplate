import test from 'tape';
import keystone from 'keystone.js';

import './home';
import './teams';

test('close server connections', assert => {
  keystone.httpServer.close();
  keystone.mongoose.connection.close();
  assert.end();
});
