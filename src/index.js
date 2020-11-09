import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { root, history } from 'src/router';
import Root from 'src/root';
import Test from 'src/test';
import Users from 'src/users';
import Projects from 'src/projects';
import Header from 'src/Header';

const App = () => {
  return (
    <Router history={history}>
      <Header/>
      <Switch>
        {/* exact routes */}
        <Route exact path={root.index} component={Root}/>

        {/* routes with nested pages */}
        <Route path={root.test.index} component={Test}/>
        <Route path={root.users.index} component={Users}/>
        <Route path={root.projects.index} component={Projects}/>

        { /* fallback for unknown route - redirect to index */ }
        <Route><Redirect to={root.index}/></Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
