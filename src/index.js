import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { root } from 'src/router';
import Root from 'src/root';
import Test from 'src/test';
import Users from 'src/users';
import Projects from 'src/projects';
import Header from 'src/Header';

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
