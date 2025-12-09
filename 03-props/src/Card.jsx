import React from 'react'

const card = (props) => {

    console.log(props.user,props.age,props.img)
  
    return (
    <div>
        <div className='w-[300px] border-white border-[1px] p-[20px] m-4 text-center rounded-lg bg-[#302e31] text-white'>
        <img src={props.img} alt="PFP" className='m-4 mx-auto w-[200px] h-[200px] object-cover rounded-full' />
        <h1 className='font-bold text-2xl'>{props.user} {props.age}</h1>
        <p className='m-5 mx-0 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className='p-4 bg-white text-black rounded-xl font-semibold'>View Product</button>
      </div>
    </div>
  )
}

export default card