import instance from 'domains/personal-accountant/infrastructure/services/config'
import detailInputAdapter from 'domains/personal-accountant/infrastructure/adapters/detailInput.adapter'
import detailOutputAdapter from 'domains/personal-accountant/infrastructure/adapters/detailOutput.adapter'
import detailValidateAdapter, { messageRequirements } from 'domains/personal-accountant/infrastructure/adapters/detailValidate.adapter'
import { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'

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

    async create(body:TypeDetailBody) {
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

    async edited(body:TypeDetailBody) {
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

    async deleted(id:string) {
        console.log("DetailService().deleted()");
        try {
            const result = await instance.delete(`/${this.#path}/${id}`)
            return result.data
        } catch (error) {
            console.log("DetailService().deleted()", error);
        }
    }

    async search(name:string) {
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