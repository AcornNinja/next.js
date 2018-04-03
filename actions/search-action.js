import axios from 'axios';

const root_url ='http://api.tvmaze.com/search/shows?q=batman';
const API ='batman';
/*
//sync
export const LOAD_SERIAL_SUCCESS = (serials)=>{
    console.log(`load action data serials  ${serials[2].show.name}`);
    return{
        type:'LOAD_SERIAL_SUCCESS',
        serials
    }
};

//add  batman async
export const loadSerial = ()=> {
    return (dispatch) => {
       return axios.get(root_url)
        .then(response => {
            dispatch(LOAD_SERIAL_SUCCESS(response.data));
         })
         .catch(error => {
             throw(error)
         });
    }
};
*/
export const loadSerial = (serials)=> {
    return (dispatch) => {
        return axios.get(root_url)
            .then(response => {
                dispatch({
                    type: 'LOAD_SERIAL_SUCCESS',
                    serials: response.data
                    }
                );
            })
            .catch(error => {
                throw(error)
            });
    }
}
