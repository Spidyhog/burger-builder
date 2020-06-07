import axios from 'axios';
import {base} from './urls';

const instance = axios.create({
    baseURL:base
});

export default instance;