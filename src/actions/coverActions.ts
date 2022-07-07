import axios from "axios";
import constantsTemplate from "../constants/constantsTemplate";
import actionsTemplate from "./actionsTemplate";

const coverConstants = new constantsTemplate("COVERS");
const coverActions = new actionsTemplate(coverConstants, "covers");

// const URL = "http://localhost:5000/api/v2";
const URL = "https://partiaf-api-recache.herokuapp.com/api/v2";

export const getManyCovers = (id: string | undefined) => async (dispatch: any) => {
    
    dispatch({ type: 'COVER_LIST_MANY_REQUEST', payload: id });
    try {
      const { data } = await axios.get(`${URL}/covers/${id}`);
      dispatch({ type: 'COVER_LIST_MANY_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'COVER_LIST_MANY_FAIL' });
    }
  };

  export const insertCover = (id: string | undefined, amount: number, user: string, state: string, price: number, gender: string, name: string, photo: string) => async (dispatch: any) => {
    
    dispatch({ type: 'COVER_INSERT_REQUEST', payload: {id, amount, user, state, price, gender, name, photo} });
    try {
      const { data } = await axios.post(`${URL}/covers/insert`, {id, amount ,user,state,price,gender,name, photo});
      dispatch({ type: 'COVER_INSERT_SUCCESS', payload: data });
      console.log(data)
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      dispatch({ type: 'COVER_INSERT_FAIL' });
    }
  };

export default coverActions;
// http://localhost:4300/api/v1/stores/store/62705da33e7e0742c3c409eb
