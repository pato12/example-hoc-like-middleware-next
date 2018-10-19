import withMainLayout from '../layouts/main';
import withAuth from '../middlewares/auth';

@withAuth
@withMainLayout
class AdminPage extends React.Component {
  render() {
    return (
      <div>
        You dont have permission!
      </div>
    );
  }
}

export default AdminPage;
