import React,{useState} from 'react'
import {arrayList} from './array'
import ListNicknames from './ListNicknames';

function index() {
  const numerosPares= [1,2,3,4,5, 22, 21,24,26];
  const fn1 = (numArr) => {
  const filterArr = numArr.map(num => num > 20 && num % 2 === 0 ? 20 : num)
  const values= filterArr.reduce((total, current) => total+current)
    return (paramFn) => {
      paramFn(values)
    }
  }
  
  fn1(numerosPares)((numParFilt) => {
    console.log(numParFilt)
  })
  
  return (
    <div> 
       {/**componente React */}
       <p> ver console.log() para ver el ejercicio 1</p>
      <ListNicknames arrayList={arrayList} order='ASC'/>
    </div>
  )
}

export default index