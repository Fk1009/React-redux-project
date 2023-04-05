import { useSelector,useDispatch } from 'react-redux';
import { incrementByValue, incrementData } from '../features/showSlice';
import { increment,decrement } from '../features/CounterSlice';

function Child() {
  const data = useSelector((state)=>{
        return state.show.value;
  })
  const counter = useSelector((state)=>{
    return state.counter.value;
})

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Child component -{data}</h1>
      <button onClick={()=>dispatch(incrementData())}>Click Me!!!</button>
      <button onClick={()=>dispatch(incrementByValue(2))}>Click Me payload!!!</button>
      <button onClick={()=>dispatch(decrement())}>-</button><span>{counter}</span>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  );
}

export default Child;