import instance from "..";
import detailAdapter from "../../adapters/Detail.adapter";

class DetailService {
    #path 
    constructor(){
        this.#path = 'details'
    }

    async list(){
       const getList = await instance.get(`/${this.#path}`)
       return detailAdapter(getList.data)
    }

}

export default DetailService