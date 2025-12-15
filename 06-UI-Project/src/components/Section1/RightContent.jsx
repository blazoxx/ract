import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='right' className='h-[90%] p-6 lg:w-2/3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
        {props.users.map(function(ele, idx) {
          return <RightCard key={idx} color={ele.color} id={idx} img={ele.img} tag={ele.tag}/>
        })}
    </div>
  )
}

export default RightContent