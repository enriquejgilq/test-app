import React,{useState} from 'react'
import {arrayList} from './array'
import ListNicknames from './ListNicknames';

function index() {
 
  let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  //funcion que recibe un array como parametro para sumarlo
  const test =(array)=>{
    const initialValue = 0;
    let sumWithInitial = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log(sumWithInitial);
  }
  
  return (
    <div> 
      <button onClick={()=>test(array)}> Click</button>
      {/**componente React */}
      <ListNicknames arrayList={arrayList} order='ASC'/>
    </div>
  )
}

export default index