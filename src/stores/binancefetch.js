import axios from "axios";


const res = axios.get(`https://api.coingecko.com/api/v3/search/trending`)
console.log(res);
module.exports=res;
