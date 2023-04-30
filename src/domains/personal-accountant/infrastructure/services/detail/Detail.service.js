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
            console.log("detailValidateAdapter: ", detailValidateAdapter(body))
            if (detailValidateAdapter(body)) {
                new Error(`Error requirements params ${messageRequirements}`)
            }
            const bodyFormater = detailInputAdapter(body)
            console.log("bodyFormater: ", bodyFormater)
            const result = await instance.post(`/${this.#path}`,
                bodyFormater)
            return detailOutputAdapter(result.data)
        } catch (error) {
            console.log("DetailService().create()", error);
        }
    }

}

export default DetailService