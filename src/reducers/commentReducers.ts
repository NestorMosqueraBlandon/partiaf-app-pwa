import constantsTemplate from "../constants/constantsTemplate"
import reducerTemplate from "./reducersTemplate";

const commentConstants = new constantsTemplate("COMMENT");
const commentReducer = new reducerTemplate({constants: commentConstants});

export default commentReducer;