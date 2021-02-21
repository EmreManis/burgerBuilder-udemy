import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-add34.firebaseio.com'
});

export default instance;