import instance from "..";
import detailInputAdapter from "../../adapters/detailInput.adapter";
import detailOutputAdapter from "../../adapters/detailOutput.adapter";
import detailValidateAdapter, { messageRequirements } from "../../adapters/detailValidate.adapter";

class DetailService {
    #path
    constructor() {
        this.#path = 'details'
    }

    async list() {
        try {
            const result = await instance.get(`/${this.#path}`)
            return detailOutputAdapter(result.data)
        } catch (error) {
            console.log("DetailService().list()", error);
        }
    }

    async create(body) {
        try {
            if (detailValidateAdapter(body)) {
                new Error(`Error requirements params ${messageRequirements}`)
            }
            const bodyFormater = detailInputAdapter(body)
            const result = await instance.post(`/${this.#path}`,
                bodyFormater)
            return detailOutputAdapter(result.data)
        } catch (error) {
            console.log("DetailService().create()", error);
        }
    }

    async edited(body) {
        try {
            const { id, ...data } = body
            if (detailValidateAdapter(data)) {
                new Error(`Error requirements params ${messageRequirements}`)
            }
            const bodyFormater = detailInputAdapter(data)
            const result = await instance.put(`/${this.#path}/${id}`,
                bodyFormater)
            return detailOutputAdapter(result.data)
        } catch (error) {
            console.log("DetailService().edited()", error);
        }
    }

    async deleted(id) {
        console.log("DetailService().deleted()");
        try {
            const result = await instance.delete(`/${this.#path}/${id}`)
            return result.data
        } catch (error) {
            console.log("DetailService().deleted()", error);
        }
    }

    async search(name) {
        try {
            const result = await instance.post(`/detailSearch`, {
                search: name
            })
            return detailOutputAdapter(result.data)
        } catch (error) {
            return error
        }
    }

}

export default DetailService