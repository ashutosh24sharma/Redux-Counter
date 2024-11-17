import React from "react";
import { useSelector,useDispatch } from "react-redux";
import ChangeNumber from "./Reducers/updown";
import {incNumber,dicNumber} from "./Action/index"

function App() {

     const myState=useSelector((state)=> state.ChangeNumber);
     const dispatch = useDispatch();

  return ( <div className="bg-zinc-800 h-screen justify-center flex items-center ">
          
    <div className="flex juatify-center px-12 py-7 items-center flex-col ">
      <div className="items-center flex flex-col juatify-center ">
      <h1 className="bg-gradient-to-r from-pink-600 via-slate-100 text-2xl font-serif font-bold mb-5 to-purple-400 bg-clip-text md:text-5xl tracking-tight text-transparent">INcreament/ Decrement Counter</h1>
      <h2 className="bg-gradient-to-r from-green-600 via-slate-100 to-pink-400 bg-clip-text text-3xl tracking-tight text-transparent">Using React and Redux</h2>
      </div>
      <div className="h-8 w-8 flex bg-white  flex-row justify-center items-center m-16">
      <button className="bg-green-200 md:text-10 px-3 py-3 text-4xl" onClick={()=> dispatch(dicNumber())}>-</button>
      <input className="px-3 py-3 text-center  md:text-10 w-20 text-4xl bg-slate-400 text-zinc-800" value={myState} type="text"/>
      <button className="bg-pink-200 px-3 py-3  md:text-10 text-4xl" onClick={()=> dispatch(incNumber())}>+</button>
    </div>

    </div>
   



  </div>  );
}

export default App;