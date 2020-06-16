import React,{useState}from 'react';
import Forms from './component/Forms'


function App() {
  const [count,setCount]=useState(0)
  return (
    <div>
        <Forms />
    </div>
  );
}

export default App;
