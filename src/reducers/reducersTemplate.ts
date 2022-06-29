import constantsTemplate from "../constants/constantsTemplate";

interface ReducerProps {
  constants: constantsTemplate;
}

export default class reducerTemplate {
  LIST_REQUEST: string;
  LIST_SUCCESS: string;
  LIST_FAIL: string;
  LIST_MANY_REQUEST: string;
  LIST_MANY_SUCCESS: string;
  LIST_MANY_FAIL: string;
  CREATE_REQUEST: string;
  CREATE_SUCCESS: string;
  CREATE_FAIL: string;
  CREATE_RESET: string;
  DELETE_REQUEST: string;
  DELETE_SUCCESS: string;
  DELETE_FAIL: string;
  DELETE_RESET: string;
  UPDATE_REQUEST: string;
  UPDATE_SUCCESS: string;
  UPDATE_FAIL: string;
  UPDATE_RESET: string;
  DETAILS_REQUEST: string;
  DETAILS_SUCCESS: string;
  DETAILS_FAIL: string;
  DETAILS_RESET: string;

  constructor({ constants }: ReducerProps) {
    this.LIST_REQUEST = constants.constants().LIST_REQUEST;
    this.LIST_SUCCESS = constants.constants().LIST_SUCCESS;
    this.LIST_FAIL = constants.constants().LIST_FAIL;

    this.LIST_MANY_REQUEST = constants.constants().LIST_MANY_REQUEST;
    this.LIST_MANY_SUCCESS = constants.constants().LIST_MANY_SUCCESS;
    this.LIST_MANY_FAIL = constants.constants().LIST_MANY_FAIL;

    this.CREATE_REQUEST = constants.constants().CREATE_REQUEST;
    this.CREATE_SUCCESS = constants.constants().CREATE_SUCCESS;
    this.CREATE_FAIL = constants.constants().CREATE_FAIL;
    this.CREATE_RESET = constants.constants().CREATE_RESET;

    this.DELETE_REQUEST = constants.constants().DELETE_REQUEST;
    this.DELETE_SUCCESS = constants.constants().DELETE_SUCCESS;
    this.DELETE_FAIL = constants.constants().DELETE_FAIL;
    this.DELETE_RESET = constants.constants().DELETE_RESET;

    this.UPDATE_REQUEST = constants.constants().UPDATE_REQUEST;
    this.UPDATE_SUCCESS = constants.constants().UPDATE_SUCCESS;
    this.UPDATE_FAIL = constants.constants().UPDATE_FAIL;
    this.UPDATE_RESET = constants.constants().UPDATE_RESET;

    this.DETAILS_REQUEST = constants.constants().DETAILS_REQUEST;
    this.DETAILS_SUCCESS = constants.constants().DETAILS_SUCCESS;
    this.DETAILS_FAIL = constants.constants().DETAILS_FAIL;
    this.DETAILS_RESET = constants.constants().DETAILS_RESET;
  }

  listReducer = (state = { data: [] }, action: any) => {
    switch (action.type) {
      case this.LIST_REQUEST:
        return { loading: true };
      case this.LIST_SUCCESS:
        return { loading: false, data: action.payload };
      case this.LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };



  listDataReducer = (state = { data: [] }, action: any) => {
    switch (action.type) {
      case this.LIST_MANY_REQUEST:
        return { loading: true };
      case this.LIST_MANY_SUCCESS:
        return { loading: false, data: action.payload };
      case this.LIST_MANY_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  createReducer = (state = {}, action: any) => {
    switch (action.type) {
      case this.CREATE_REQUEST:
        return { loading: true };
      case this.CREATE_SUCCESS:
        return { loading: false, success: true };
      case this.CREATE_FAIL:
        return { loading: false, error: action.payload };
      case this.CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  oneReducer = (state = { loading: true }, action: any) => {
    switch (action.type) {
      case this.DETAILS_REQUEST:
        return { loading: true };
      case this.DETAILS_SUCCESS:
        return { loading: false, data: action.payload };
      case this.DETAILS_FAIL:
        return { loading: false, error: action.payload };
      case this.DETAILS_RESET:
        return {};
      default:
        return state;
    }
  };

  updateReducer = (state = {}, action: any) => {
    switch (action.type) {
      case this.UPDATE_REQUEST:
        return { loading: true };
      case this.UPDATE_SUCCESS:
        return { loading: false, success: true };
      case this.UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case this.UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  deleteReducer = (state = {}, action: any) => {
    switch (action.type) {
      case this.DELETE_REQUEST:
        return { loading: true };
      case this.DELETE_SUCCESS:
        return { loading: false, success: true };
      case this.DELETE_FAIL:
        return { loading: false, error: action.payload };
      case this.DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
}
