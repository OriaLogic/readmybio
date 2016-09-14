import {
  FETCH_CATEGORIES_SUCCESS
} from '../constants/actionTypes';

import { forEach } from 'lodash';

const initialState = {};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      const categories = {};

      forEach(action.categories, cat => {
        cat.eventsCount = cat.events_count;
        cat.eventIds = cat.event_ids;
        categories[cat.id] = cat;
      });

      return {
          ...state,
          [action.user.id]: categories
        };
    default:
      return state;
  }
}

export default categories;
