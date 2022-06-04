import constantsTemplate from "../constants/constantsTemplate";
import reducerTemplate from "./reducersTemplate";

const buyConstants = new constantsTemplate("BUY");
const buyReducer = new reducerTemplate({ constants: buyConstants });

export default buyReducer;
