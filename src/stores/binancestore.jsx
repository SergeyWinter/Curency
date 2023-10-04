import axios from "axios";
import { create } from 'zustand';

const binanceStore = create((set)=>({
   
fetchCoins:async()=>{
let coins=[]
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/search/trending`)
        // const res = await axios.get(`https://testnet.binance.vision/api/v3/exchangeInfo`) 
        // const res = await axios.get(`https://api.binance.com/api`, {
        //     headers: {
        //       'Access-Control-Allow-Origin' : '*',
        //       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        //     }
        //   }
        // )
        
        console.log(res)
         coins=res.data.coins

        return set({coins})
      } catch (err) {
        console.error(err.toJSON())
      }
   
}
})
)
export default binanceStore;

