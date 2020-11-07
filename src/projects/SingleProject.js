import React from 'react';
import { Switch, Route, Link, useParams, Redirect } from 'react-router-dom';
import { root } from 'src/router';

const SingleProject = () => {
  const base = root.projects._id;
  const { id, relatedId } = useParams();

  return (
    <div>
      common info for project {id}
      <br/>
      <Switch>
        <Route exact path={base.index}>
          index for project ID = {id}
        </Route>

        <Route exact path={base.relatedThing.index}>
          related thing
        </Route>

        <Route exact path={base.otherRelatedItems._relatedId.index}>
          related item {relatedId}
          <Link to={base.params({ id })}>back to project page</Link>
        </Route>

        { /* fallback for unknown route - redirect to project page */ }
        <Route><Redirect to={base.params({ id })}/></Route>
      </Switch>
    </div>
  );
};

export default SingleProject;
