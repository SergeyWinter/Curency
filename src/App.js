import React from 'react';
import { Block } from './Block';
import './index.scss';
// import binanceStore from './stores/binancestore';
import binancefetch from './stores/binancefetch';
console.log(binancefetch);

function App() {
  const[fromCurrency,setFromCurrency]=React.useState('RUB');
  const[fromPrice,setFromPrice]=React.useState(0);
  const[ferstName,setFerstName]=React.useState('');

const[rates,setRates]=React.useState(0);
// console.log(rates)

  const store =binanceStore()
  // console.log(store)
  React.useEffect(()=>{
   store.fetchCoins() 
  },[]);
  // const getOP=store.coins
  let getOp=store
  //  getOp= store.coins.map(coin=>{return{
  //   name:coin.item.name,
  //   image:coin.item.larg,
  //   id:coin.item.id,
  //   priceBtc:coin.item.price_btc
  // }})
  // rates.push(45)
  // setRates()
console.log(getOp)
  const onChangeFromPrice=(value)=>{
    setFromPrice(value);
    console.log(fromPrice)
  }
  return (
    <div className="App">
      {/* <input onChange={(e) => onChangeValue(e.target.value)}  */}
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={ferstName} currency="USD" onChangeValue={e=>setFerstName(e.target.value)} />
      <p>Value: {fromPrice}</p>
      {rates&& <p>{rates}</p>}
       {/* <>{getOP && <p>DJKLFGJLDFKGJLDKFJ</p>}</> */}
       {/* {getOp&&<div>{getOp[1][`name`]}</div>} */}
       {/* {getOp ?<>'ресурс найден'</>:<>'false'</>} */}
    </div>
  );
}

// export default App;
