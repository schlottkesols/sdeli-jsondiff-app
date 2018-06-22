import axios from "axios";

const EntryService = {
    getAll: function(id){
        return axios.get('/entries/'+id)
    }
};

export default EntryService;
