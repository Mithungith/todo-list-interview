import React from 'react';
import TodoItems from './TodoItems';
import {useState} from 'react';
import {uuid4} from 'uuid4';
export default function TodoForm() {
    const [inputArray,setInputArray] = useState([]);
    const [inputValue,setInputValue] = useState('');
    const arr = [];
    function handleChange(e){
        setInputValue(e.target.value);
    }
    function handleSubmit(e){
        setInputArray(prevValue=>[...prevValue,inputValue]);
        setInputValue('')
    }
  return (
    <div>
      <input type='text' placeholer='Enter todo' onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
      <div className='list'>
      {inputArray.map(item=><TodoItems key={uuid4()} value={item}/>)}
      </div>
    </div>
  )
}
