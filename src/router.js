import { generatePath } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const page = (path) => {
  return {
    index: path,
    params: params => generatePath(path, params),
    toString: () => { throw new Error('toString called on route node. Forgot .index or .params in route path?'); },
  };
};

export const root = {
  ...page('/'),

  test: {
    ...page('/test'),
  },

  users: {
    ...page('/users'),

    _id: {
      ...page('/users/:id'),
    },
  },

  projects: {
    ...page('/projects'),
    _id: {
      ...page('/projects/:id'),

      relatedThing: {
        ...page('/projects/:id/related_thing'),
      },

      otherRelatedItems: {
        _relatedId: {
          ...page('/projects/:id/other_related_items/:related_id'),
        },
      },
    },
  },
};

const browserHistory = createBrowserHistory();

export const history = browserHistory;
