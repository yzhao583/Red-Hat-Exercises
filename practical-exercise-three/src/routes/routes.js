import React from "react";
import Component from "../override/component";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import UserTableContainer from "../containers/user-table-container";
import UserDetailContainer from "../containers/user-detail-container";
import NotFoundPage from "../containers/not-found-page-container";

class Routes extends Component {
    
  renderUserDetailPage = props => {
    const { userId } = props.match.params;

    return <UserDetailContainer {...props} userId={userId} />;
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UserTableContainer} />
          <Route exact path="/users" component={UserTableContainer} />
          <Route
            exact
            path="/users/:userId"
            render={this.renderUserDetailPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
