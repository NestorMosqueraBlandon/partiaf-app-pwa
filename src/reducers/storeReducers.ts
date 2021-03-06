import constantsTemplate from "../constants/constantsTemplate";
import reducerTemplate from "./reducersTemplate";

type Action = {
  type: string;
  payload?: any;
};

export const storeListReducer = (state = { stores: [] }, action: Action) => {
  switch (action.type) {
    case STORE_LIST_REQUESTS:
      return { loading: true };
    case STORE_LIST_SUCCESS:
      return { loading: false, stores: action.payload };
    case STORE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const storeConstants = new constantsTemplate("STORES");
const storeReducer = new reducerTemplate({ constants: storeConstants });

export default storeReducer;
