import axios from 'axios';

const httpRequest={
    post(url,data){
        return axios.post(url,data);
    }
}

export default httpRequest;