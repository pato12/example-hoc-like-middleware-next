import withMainLayout from '../layouts/main';
import withAuth from '../middlewares/auth';

@withAuth
@withMainLayout
class IndexPage extends React.Component {
  static getInitialProps(context) {
    console.log('Here I have the user logged', context.user);

    return {};
  }

  render() {
    return (
      <div>
        Hello {this.props.user.email}!
      </div>
    );
  }
}

export default IndexPage;
