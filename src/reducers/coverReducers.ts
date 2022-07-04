import constantsTemplate from "../constants/constantsTemplate";
import reducerTemplate from "./reducersTemplate";

const coverConstants = new constantsTemplate("STORES");
const coverReducer = new reducerTemplate({ constants: coverConstants });

export const coverListManyReducer = (state = { loading: true }, action: any) => {
    switch (action.type) {
      case 'COVER_LIST_MANY_REQUEST':
        return { loading: true };
      case 'COVER_LIST_MANY_SUCCESS':
        return { loading: false, covers: action.payload };
      case 'COVER_LIST_MANY_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const coverInsertReducer = (state = { loading: true }, action: any) => {
    switch (action.type) {
      case 'COVER_INSERT_REQUEST':
        return { loading: true };
      case 'COVER_INSERT_SUCCESS':
        return { loading: false, success: true };
      case 'COVER_INSERT_FAIL':
        return { loading: false, error: action.payload };
        case 'COVER_INSERT_RESET':
        return { };
      default:
        return state;
    }
  };


export default coverReducer;
