import constantsTemplate from '../constants/constantsTemplate'
import actionsTemplate from './actionsTemplate';

const storeConstants = new constantsTemplate('STORES');
const storeActions = new actionsTemplate(storeConstants, 'stores/store')

export default storeActions;
// http://localhost:4300/api/v1/stores/store/62705da33e7e0742c3c409eb