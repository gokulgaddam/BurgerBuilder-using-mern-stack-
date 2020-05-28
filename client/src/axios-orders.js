import axios from 'axios';
const instance = axios.create({
  baseURL:'https://react-my-burger-280db.firebaseio.com/'
});

export default instance;