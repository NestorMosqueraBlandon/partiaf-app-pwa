import axios from "axios";

const url = "https://partiaf-api.herokuapp.com/api/v1/stores/listall";

export const fetchStores = () => axios.get(url);
