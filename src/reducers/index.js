import { RENDER_DATA } from '../actions';

const initialState = {
  data: [],
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case RENDER_DATA:
      const data = action.data.map((data) => [data.State, data.Population]);
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}
