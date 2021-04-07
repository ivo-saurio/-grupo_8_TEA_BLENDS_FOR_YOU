let axios = require('axios');
let defaults = require('./default');
const url = 'api/'

module.exports = {
    usersAll: ()=>{
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'users'
        })
    },
    productAll: ()=>{
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'products'
        })
    },
    categorias: ()=>{
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'categorias'
        })
    }

    
}
