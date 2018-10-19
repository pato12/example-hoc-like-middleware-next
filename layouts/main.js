import React from 'react';
import buildLayout from '../helpers/build-layout';

@buildLayout
class MainLayout extends React.Component {
  render() {
    return (
      <div className='container'>
        <header>
          logo :D 
        </header>
        {this.props.children}
        <footer>
          footer
        </footer>

        <style jsx>{`
          :global(body) {
            background: #EEE;
          }
          .container {
            width: 700px;
            margin: 0 auto;
          }
          header, footer {
            background: #CCC;
            padding: 30px 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default MainLayout;
