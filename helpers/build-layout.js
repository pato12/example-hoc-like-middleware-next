import React from 'react';
import hoistNonReactStatic from './hoist-non-react-statics-next';

export default (BaseLayout) => (WrappedComponent) => {
  class Layout extends React.Component {
    render() {
      return (
        <BaseLayout {...this.props}>
          <WrappedComponent {...this.props} />
        </BaseLayout>
      );
    }
  }

  hoistNonReactStatic(Layout, BaseLayout);
  hoistNonReactStatic(Layout, WrappedComponent);

  return Layout;
};