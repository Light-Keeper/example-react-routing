import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { root } from 'src/router';

import SingleProject from './SingleProject';

const Projects = () => {
  useEffect(() => {
    console.log('Projects - new component mounted');
  }, []);

  return (
    <div>
      common header for all projects, no remount when navigating between projects!
      <br/>
      <Switch>
        <Route exact path={root.projects.index} component={() => 'projects index'}/>
        <Route path={root.projects._id.index} component={SingleProject}/>
      </Switch>
    </div>
  );
};

export default Projects;
