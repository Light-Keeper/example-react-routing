import React from 'react';
import { Link } from 'react-router-dom';
import { root } from 'src/router';

const Header = () => {
  console.log('Header is rendered');

  return (
    <div>
      <div>
        this header present on all pages. simple navigation:
        <br/>
        <Link to={root.index}>index</Link> {' '}
        <Link to={root.test.index}>test</Link> {' '}
        <Link to={root.users.index}>users</Link> {' '}
        <Link to={root.users._id.params({ id: 123 })}>user 123</Link> {' '}
        <Link to={root.projects.index}>projects</Link> {' '}
        <Link to={root.projects._id.params({ id: '23' })}>project 23</Link> {' '}
        <Link to={root.projects._id.relatedThing.params({ id: 23 })}>project 23 related thing</Link> {' '}
        <Link to={root.projects._id.otherRelatedItems._relatedId.params({ id: 21, related_id: 100 })}>
          project 23 related item 100
        </Link>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
