import config from '@/config/config'
import axios from 'axios'

const searchPackages = (searchString, page) => {
    return new Promise((resolve, reject) => {
        const url = `${config.npmjsAPI}?text=${searchString}&size=${config.pageLimit}&from=${ (page - 1) * config.pageLimit}`
        axios({url: url, method: 'GET' })
            .then(async (response) => {
                resolve(response)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default {
    searchPackages
}
