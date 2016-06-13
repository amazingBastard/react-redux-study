import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // do this to avoid state mutation (state.push would mutate it)
      return [ action.payload.data, ...state ]; // return state.concat([action.payload.data]);
  }

  return state;
}
