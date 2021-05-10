import api from './../api/passenger.api';

const getPassengers = async dispatch => {
  try {
    dispatch({type: 'PASSENGER_REQUEST'});

    const res = await api.getPassengers();
    const {ok, data, message} = await res.json();

    if (ok) {
      dispatch({type: 'PASSENGER_SUCCESS', data});
    } else {
      dispatch({type: 'PASSENGER_ERROR', message});
    }
  } catch (error) {
    dispatch({type: 'PASSENGER_ERROR', error});
  }
};

export {getPassengers};
