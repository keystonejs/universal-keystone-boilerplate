import React from 'react';
import { Route } from 'react-router';
import createTeams from 'components/teams';

const Teams = createTeams(React);

export default (
  <Route path='/teams' handler={ Teams }>
  </Route>
);
