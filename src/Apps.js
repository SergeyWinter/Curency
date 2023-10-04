import React from "react";
import axios from "axios";

function App () {
const res = axios.get(`https://testnet.binance.vision/api`);
console.log(res)
return(
    <>
        <div>work
        </div>
    </>
)
}
export default App;

