import axios from 'axios';
import * as Config from './../constants/ActionType';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method,
        url: '${Config.API_URL}/${endpoint}',
        data: body
    }).catch((err) => {
        console.log(err);
    })
}