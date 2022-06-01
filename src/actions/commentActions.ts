import constantsTemplate from '../constants/constantsTemplate'
import actionsTemplate from './actionsTemplate';

const commentConstants = new constantsTemplate('COMMENT');
const commentActions = new actionsTemplate(commentConstants, 'comments')

export default commentActions;
// http://localhost:4300/api/v1/stores/store/62705da33e7e0742c3c409eb