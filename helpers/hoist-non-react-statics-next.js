import hoistNonReactStatic from 'hoist-non-react-statics';

export default function(target, source, custom = {}) {
  hoistNonReactStatic(target, source, { ...custom, getInitialProps: true });

  // merge the getInitialProps
  if (target.getInitialProps) {
    const getInitialPropsTarget = target.getInitialProps;
    target.getInitialProps = async (...args) => {
      const propsTarget = await getInitialPropsTarget(...args);

      if (!propsTarget) return propsTarget;

      const propsSource = source.getInitialProps ? await source.getInitialProps(...args) : {};

      return {
        ...propsSource,
        ...propsTarget,
      };
    };
  } else if (source.getInitialProps) {
    target.getInitialProps = source.getInitialProps;
  }

  return target;
}
