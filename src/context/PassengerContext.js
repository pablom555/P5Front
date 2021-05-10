import React, {createContext, useContext, useReducer} from 'react';
import {passengerReducer, initialState} from './reducer/passenger';

export const PassengerStateContext = createContext();
export const PassengerDispatchContext = createContext();

const PassengerProvider = ({children}) => {
  const [state, dispatch] = useReducer(passengerReducer, initialState);

  return (
    <PassengerStateContext.Provider value={state}>
      <PassengerDispatchContext.Provider value={dispatch}>
        {children}
      </PassengerDispatchContext.Provider>
    </PassengerStateContext.Provider>
  );
};

const usePassengerState = () => {
  const context = useContext(PassengerStateContext);

  if (!context) {
    throw new Error(
      'usePassengerState must be used within a PassengerProvider',
    );
  }
  return context;
};

const usePassengerDispatch = () => {
  const context = useContext(PassengerDispatchContext);

  if (!context) {
    throw new Error(
      'usePassengerDispatch must be used within a PassengerProvider',
    );
  }
  return context;
};

export {usePassengerState, usePassengerDispatch, PassengerProvider};
