import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';

const test = addAssertions(tape, { jsxEquals });

export default test;
