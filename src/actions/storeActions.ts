import axios from "axios";
import constantsTemplate from "../constants/constantsTemplate";
import actionsTemplate from "./actionsTemplate";

const storeConstants = new constantsTemplate("STORES");
const storeActions = new actionsTemplate(storeConstants, "stores");

// const URL = "http://localhost:5000/api/v2";
const URL = "https://partiaf-api-recache.herokuapp.com/api/v2";

export const getOneStore = (id: string | undefined) => async (dispatch: any) => {
    console.log(id);
    dispatch({ type: 'STORE_DETAILS_REQUEST', payload: id });
    try {
      const { data } = await axios.get(`${URL}/store/${id}`);
      dispatch({ type: 'STORE_DETAILS_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'STORE_DETAILS_FAIL' });
    }
  };

export default storeActions;
// http://localhost:4300/api/v1/stores/store/62705da33e7e0742c3c409eb