const url = 'http://localhost:7000/api';

const requestOptionsGET = {
  method: 'GET',
  redirect: 'follow',
};

const getPassengers = async () => fetch(`${url}/passengers`, requestOptionsGET);

export default { getPassengers};
