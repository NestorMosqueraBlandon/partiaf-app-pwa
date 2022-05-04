import axios from "axios"


const url = 'https://partiaf-api-v2.herokuapp.com/api/v1/stores/listall';

export const fetchStores = () => axios.get(url);
