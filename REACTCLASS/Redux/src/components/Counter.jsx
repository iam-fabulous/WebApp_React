import React from 'react';
import { increment,decrement, reset } from '../features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import style from "../styles/counter.module.css";

const Counter = () => {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch()

  return (
    <div className={style.counterbody}>
      <span className={style.display}>{count}</span>
      <button onClick={()=>dispatch(increment())}><h1>+</h1></button>
      <button onClick={()=>dispatch(decrement())}><h1>-</h1></button>
      <button onClick={()=>dispatch(reset())}><p>reset</p></button>
    </div>
  )
}

export default Counter