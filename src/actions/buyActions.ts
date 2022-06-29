import constantsTemplate from "../constants/constantsTemplate";
import actionsTemplate from "./actionsTemplate";

const buyConstants = new constantsTemplate("BUY");
const buyActions = new actionsTemplate(buyConstants, "buy");

export default buyActions;
// http://localhost:4300/api/v1/stores/store/62705da33e7e0742c3c409eb
