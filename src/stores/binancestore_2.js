import axios from "axios";
import { create } from 'zustand';

const binanceStore = create((set)=>({
    coins:[],
fetchCoins:async()=>{

    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/search/trending`)
        // const res = await axios.get(`https://testnet.binance.vision/api/v3/orderList`,{
        //     headers: {
        //       'Access-Control-Allow-Origin' : '*',
        //       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        //     }})
        
        console.log(res)
        const coins=res.data.coins
        return set({coins})
      } catch (err) {
        console.error(err.toJSON())
      }
   
}
})
)
export default binanceStore;



// import axios from "axios";
// import { create } from 'zustand';

// const binanceStore = create((set)=>({
//     coins:[],
// fetchCoins:async()=>{
//     const res = await axios.get('https://api.coingeckoH.com/api/v3/search/trending,')
//    const coins=res.data.coins.map(coin=>{
//     return{
//         name:coin.item.name,
//         image:coin.item.larg,
//         id:coin.item.id,
//         priceBtc:coin.item.price_btc}})
//     set({coins})
// }
// })
// )
// export default binanceStore;
// {
//     headers: {
//       'Access-Control-Allow-Origin' : '*',
//       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
//     }