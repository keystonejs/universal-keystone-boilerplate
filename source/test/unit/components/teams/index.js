import test from 'tape';
import React from 'react';
import dom from 'cheerio';

import reactDom from 'react-dom/server';
import createTeams from 'components/teams';

const render = reactDom.renderToStaticMarkup;

test('Teams component', nest => {
  nest.test('should exist', assert => {
    const msg = 'should exist';
    const Teams = createTeams(React);
    const actual = typeof Teams;
    const expected = 'function';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('Children', assert => {
    const msg = 'should render children';

    const props = {
      teamList: [
        {
          name: 'A Team',
          id: '1'
        }, {
          name: `Charlie's Angels`,
          id: 2
        }, {
          name: 'Team CoCo',
          id: 3
        }
    ],
      teamClass: 'team',
      teamListClass: 'team-list'
    };

    const Teams = createTeams(React);
    const el = (
      <Teams { ...props } />
    );
    const $ = dom.load(render(el));

    const expected = 3;
    const actual = $(`.${ props.teamClass }`).length;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
