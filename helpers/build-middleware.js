import React from 'react';
import hoistNonReactStatic from './hoist-non-react-statics-next';

export default (name, fn) => (WrappedComponent) => {
  const Middleware = (props) => <WrappedComponent {...props} />;

  Middleware.displayName = name;
  Middleware.getInitialProps = fn;

  hoistNonReactStatic(Middleware, WrappedComponent);

  return Middleware;
};
