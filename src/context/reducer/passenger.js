const initialState = {
  passengers: [],
  loading: false,
  error: false,
};

const  passengerReducer = (state, action) => {

  switch (action.type) {
    case 'PASSENGER_REQUEST': {
      return { ...state, loading: true, error: false };
    }
    case 'PASSENGER_SUCCESS': {
      return { ...state, passengers: action.data.passengers, loading: false, error: false };
    }
    case 'PASSENGER_ERROR': {
      return { ...state, loading: false, error: true };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export { passengerReducer, initialState };