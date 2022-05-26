import constantsTemplate from '../constants/constantsTemplate'
import actionsTemplate from './actionsTemplate';

const bookingConstants = new constantsTemplate('BOOKING');
const bookingActions = new actionsTemplate(bookingConstants, 'booking');

export default bookingActions;
// http://localhost:4300/api/v1/stores/store/62705da33e7e0742c3c409eb