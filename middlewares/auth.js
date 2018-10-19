import buildMiddleware from '../helpers/build-middleware';

export default buildMiddleware('Auth', async (context) => {
  console.log('Getting user...');
  // mock
  const user = {
    id: 1,
    email: 'pato@pato.com',
    role: 'user',
  };

  context.user = user;

  return { user };
});
