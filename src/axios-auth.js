import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vuejs-axios-24412.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'Sandalwood91';

export default instance;