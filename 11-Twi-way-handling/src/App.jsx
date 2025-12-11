import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by", title);
    setTitle(""); 
  }

  return (
    <div className='flex flex-wrap h-screen bg-slate-800 text-xl p-4'>
      <form className='' onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input className='text-white bg-[#aaaa] px-2 p-2 m-2 border-[#0005] border-3 rounded' onChange={(e)=>{
          setTitle(e.target.value)
        }} placeholder='type something ...' type="text" value={title} />
        
        <button className='bg-[#aaa] px-4 p-2 mt-2 rounded-full mx-2' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App