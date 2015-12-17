import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

import routes from 'routes/component-routes';

const componentRouter = (req, res) => {
  match({ routes, location: req.url },
      (error, redirectLocation, renderProps) => {

    if (error) return res.status(500).send(error.message);

    if (redirectLocation) {
      return res.redirect(302,
        redirectLocation.pathname + redirectLocation.search);
    }

    if (renderProps) {
      return res.render('teams', {
        content: renderToString(<RoutingContext { ...renderProps } />)
      });
    }

    res.status(404).send('Not found');
  });
};

export default componentRouter;
