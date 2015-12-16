import keystone from 'keystone.js';

const port = process.env.TEST_PORT || 5150;
keystone.set('port', port);

export default keystone;
