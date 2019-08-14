import * as React from 'react';
import * as hoistStatics from 'hoist-non-react-statics';
import StyleContext from 'isomorphic-style-loader/StyleContext';

function withStyles (...styles) {
  return function wrapWithStyles (ComposedComponent) {
    class WithStyles extends React.PureComponent {
      removeCss: any;
      static displayName: string;
      static ComposedComponent: any;
      constructor (props, context) {
        super(props, context);
        if (context.insertCss) {
          this.removeCss = context.insertCss(...styles);
        }
      }

      componentWillUnmount () {
        if (this.removeCss) {
          setTimeout(this.removeCss, 0);
        }
      }

      render () {
        return <ComposedComponent {...this.props} />;
      }
    }

    const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

    WithStyles.displayName = `WithStyles(${displayName})`;
    WithStyles.contextType = StyleContext;
    WithStyles.ComposedComponent = ComposedComponent;

    return hoistStatics(WithStyles, ComposedComponent);
  };
}

export default withStyles;