import axios from 'axios';

const FEES_API_BASE_URL = "http://localhost:8080/api/v1/Fees";

class FeesService {

    getAllFees(){
        return axios.get(FEES_API_BASE_URL);
    }

    createFees(Fees){
        return axios.post(FEES_API_BASE_URL, Fees);
    }

    getFeesById(FeesId){
        return axios.get(FEES_API_BASE_URL + '/' + FeesId);
    }

    updateFees(Fees, FeesId){
        return axios.put(FEES_API_BASE_URL + '/' + FeesId, Fees);
    }

    deleteFees(FeesId){
        return axios.delete(FEES_API_BASE_URL + '/' + FeesId);
    }
}

export default new FeesService()