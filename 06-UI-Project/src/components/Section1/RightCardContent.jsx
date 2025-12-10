import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semibold">{props.id+1}</h2>
        <div>
          <p className="text-lg leading-normal mb-10 text-white">
            {props.bio}
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className="text-white font-semibold px-7 py-2.5 rounded-full">{props.tag}</button>
            <button><i style={{backgroundColor:props.color}} className="ri-arrow-right-line text-lg text-white font-semibold px-2.5 py-2.5 rounded-full"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent