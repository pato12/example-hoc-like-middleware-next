import withMainLayout from '../layouts/main';
import withAuth from '../middlewares/auth';
import withOnlyAdmin from '../middlewares/only-admin';

@withAuth
@withOnlyAdmin
@withMainLayout
class AdminPage extends React.Component {
  render() {
    return (
      <div>
        Only Admins! <br />You are {this.props.user.email}!
      </div>
    );
  }
}

export default AdminPage;
