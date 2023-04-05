import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import Child from './component/Child';
import { getAllData } from './features/gitUserSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>{
    return state.show.value;
  })
  const userData = useSelector((state)=>{
    return state.app.users;
   
  })
  if (userData.loading) {
    return <h2>Loading.....</h2>
  }

  if (userData.error != null) {
    return <h2>{userData.error}</h2>
  }

  return (
    <div className="App">
      <Child/>
      <h1>app component -{data}</h1>
      <button onClick={()=>dispatch(getAllData())}>Get Users</button>
     { userData.error ?
      userData.map((ele)=>{
        <ul key={ele.index}>{ele.name}</ul>
      })
       :null }
    </div>
  );
}

export default App;
