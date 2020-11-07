import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { root } from 'src/router';
import UsersList from './UsersList';
import UsersShow from './UsersShow';

const Users = () => {
  useEffect(() => {
    console.log('Users - new component mounted');
  }, []);

  return (
    <div>
      common header for all users, no remount when navigating between users!
      <br/>
      <Switch>
        <Route exact path={root.users.index} component={UsersList}/>
        <Route path={root.users._id.index} component={UsersShow}/>
      </Switch>
    </div>
  );
};

export default Users;
