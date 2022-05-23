import Axios from "axios";
import { Dispatch } from "redux";
import constantsTemplate from "../constants/constantsTemplate";

export default class actionsTemplate{
    api: string;
    URL: string;

    LIST_REQUEST:string;    
    LIST_SUCCESS: string;
    LIST_FAIL : string;
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

    constructor(constants: constantsTemplate, api: string){
        this.api = api;

        this.LIST_REQUEST     = constants.constants().LIST_REQUEST;
        this.LIST_SUCCESS     = constants.constants().LIST_SUCCESS;
        this.LIST_FAIL        = constants.constants().LIST_FAIL;
        
        this.CREATE_REQUEST   = constants.constants().CREATE_REQUEST;
        this.CREATE_SUCCESS   = constants.constants().CREATE_SUCCESS;
        this.CREATE_FAIL      = constants.constants().CREATE_FAIL;
        this.CREATE_RESET     = constants.constants().CREATE_RESET;
        
        this.DELETE_REQUEST   = constants.constants().DELETE_REQUEST;
        this.DELETE_SUCCESS   = constants.constants().DELETE_SUCCESS;
        this.DELETE_FAIL      = constants.constants().DELETE_FAIL;
        this.DELETE_RESET     = constants.constants().DELETE_RESET;
        
        this.UPDATE_REQUEST   = constants.constants().UPDATE_REQUEST;
        this.UPDATE_SUCCESS   = constants.constants().UPDATE_SUCCESS;
        this.UPDATE_FAIL      = constants.constants().UPDATE_FAIL;
        this.UPDATE_RESET     = constants.constants().UPDATE_RESET;
        
        this.DETAILS_REQUEST  = constants.constants().DETAILS_REQUEST;
        this.DETAILS_SUCCESS  = constants.constants().DETAILS_SUCCESS;
        this.DETAILS_FAIL     = constants.constants().DETAILS_FAIL;
        this.DETAILS_RESET    = constants.constants().DETAILS_RESET;

        this.api = api;

        // this.URL = "https://partiaf-api-v2.herokuapp.com/api/v1";
        this.URL = "http://localhost:4300/api/v1";
    }

    list = () => async(dispatch: Dispatch) => {
        dispatch({type: this.LIST_REQUEST});
        try{
            const {data} = await Axios.get(`${this.URL}/${this.api}`)
            dispatch({type: this.LIST_SUCCESS, payload: data});
        }catch(err){
            dispatch({type: this.LIST_FAIL});
        }
    }

    one = (id: string | undefined) => async(dispatch: any) => {
        console.log(id)
        dispatch({type: this.DETAILS_REQUEST, payload: id});
        try{
            const {data} = await Axios.get(`${this.URL}/${this.api}/${id}`);
            dispatch({type: this.DETAILS_SUCCESS, payload:data});
        }catch(err){
            dispatch({type: this.DETAILS_FAIL});
        }
    }

    create = (props: any) => async(dispatch: any) => {
        dispatch({type: this.CREATE_REQUEST, payload: props});
        try{
            const {data} = await Axios.put(`${this.URL}/${this.api}`, props);
            dispatch({type: this.CREATE_SUCCESS, payload: data});
        }catch(error:any){
            const message = error.response && error.response.data.message ? error.response.data.message : error.message;
            dispatch({type: this.CREATE_FAIL, payload: message});
        }
    }

    update = (props: any) => async(dispatch: any) => {
        dispatch({ type: this.UPDATE_REQUEST, payload: { props } });
        try {
          const { data } = await Axios.put(`${this.URL}/${this.api}/${props._id}`, { props });
          dispatch({ type: this.UPDATE_SUCCESS, payload: data });
        } catch (err) {
          dispatch({ type: this.UPDATE_FAIL, payload: err });
        }
    }

    delete = (id: string) => async(dispatch: any) => {
        dispatch({type: this.DELETE_REQUEST, payload: id});
        try{
            Axios.delete(`${this.URL}/${this.api}/${id}`);
            dispatch({type: this.DELETE_SUCCESS})
        }catch(error: any){
            dispatch({type: this.DELETE_FAIL, payload: error.message && error.response.data.message? error.response.data.message : error.message, })
        }
    }

}

  