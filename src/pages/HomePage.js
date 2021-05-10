import React, {useEffect} from 'react';
// import {toast} from 'tailwind-toast';
import Layout from './Layout';
import Loading from '../components/Loading';
import {getPassengers} from './../actions/passenger';
import {
  usePassengerState,
  usePassengerDispatch,
} from './../context/PassengerContext';
import TablePassenger from '../components/TablePassenger';

const titles = [
  {name: 'Documento', key: 'documentNumber'},
  {name: 'Nombre', key: 'name'},
  {name: 'Vuelo', key: 'flightNumber'},
];

const HomePage = () => {
  const {passengers, loading} = usePassengerState();
  const passengerDispatch = usePassengerDispatch();

  useEffect(() => {
    getPassengers(passengerDispatch);
  }, [passengerDispatch]);

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      {passengers.length && (
        <TablePassenger titles={titles} items={passengers} />
      )}
    </Layout>
  );
};

export default HomePage;
