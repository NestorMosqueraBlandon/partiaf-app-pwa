import constantsTemplate from "../constants/constantsTemplate";
import reducerTemplate from "./reducersTemplate";

const bookingConstants = new constantsTemplate("BOOKING");
const bookingReducer = new reducerTemplate({ constants: bookingConstants });

export default bookingReducer;
