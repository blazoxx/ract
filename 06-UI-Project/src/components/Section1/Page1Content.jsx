import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {

  return (
    <div className='pb-16 pt-6 px-20 flex gap-20 h-[95vh] w-screen'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content