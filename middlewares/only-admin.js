import Router from 'next/router';

import buildMiddleware from '../helpers/build-middleware';

export default buildMiddleware('OnylAdmin', async (context) => {
  const { user } = context;

  if (user.role !== 'admin') {
    const url = '/no-auth';
    if (context && context.res) {
      context.res.writeHead(302, {
        Location: url,
      });
      context.res.end();
    } else {
      Router.push(url);
    }
  }
});
