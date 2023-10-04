import React, { useState, useEffect } from 'react'

// Node Binance API
// https://github.com/binance-exchange/node-binance-api
const Binance = require('node-binance-api')
const binance = new Binance().options({
  APIKEY: '',
  APISECRET: ''
})


// BTCUSDT - price
const Appp = () => {
    const [btcPrice, setBtcPrice] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await binance.futuresPrices()
            response = response.BTCUSDT
            setBtcPrice(response)
            console.log(response)
        }
        fetchMyAPI()
    }, [btcPrice])
    return <div>{btcPrice}</div>
}
export default Appp;
