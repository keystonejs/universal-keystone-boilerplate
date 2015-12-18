import { createRenderer } from 'react-addons-test-utils';

const renderer = createRenderer();

const render = (input) => {
  const rendered = renderer.render(input);
  return rendered.getRenderOutput();
};

export default render;
