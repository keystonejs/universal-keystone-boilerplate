import test from 'tape';
import React from 'react';
import dom from 'cheerio';

import reactDom from 'react-dom/server';
import createTeams from 'components/teams';
import createTeam from 'components/team';

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
      teamList: ['A Team', `Charlie's Angels`, 'Team CoCo'],
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
