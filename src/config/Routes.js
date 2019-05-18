import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../page/HomePage';
import ContentPage from '../page/ContentPage';
import ContactPage from '../page/ContactPage';

export const HomePageLink = '/';
export const ContentPageLink = '/content';
export const ContactPageLink = '/contact';

const Routes = props => {
  const { children } = props;

  return (
    <Router>
      {children}
      <div>
        <Route exact path={HomePageLink} component={HomePage} />
        <Route path={ContentPageLink} component={ContentPage} />
        <Route path={ContactPageLink} component={ContactPage} />
      </div>
    </Router>
  );
};

export default Routes;
