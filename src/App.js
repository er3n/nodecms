import React from 'react';
import { Link } from 'react-router-dom';
import Routes, {
  HomePageLink,
  ContentPageLink,
  ContactPageLink
} from './config/Routes';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <nav>
          <ul>
            <li>
              <Link to={HomePageLink}>Home</Link>
            </li>
            <li>
              <Link to={ContentPageLink}>Content</Link>
            </li>
            <li>
              <Link to={ContactPageLink}>Contact</Link>
            </li>
          </ul>
        </nav>
      </Routes>
    </React.Fragment>
  );
};

export default App;
