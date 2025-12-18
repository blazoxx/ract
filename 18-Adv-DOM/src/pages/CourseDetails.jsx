import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    
  const param = useParams();

  return (
    <div>
        <h1 className='center-absolute-text center-absolute-text-wrap '>{param.courseId} Courses Detail Page</h1>
    </div>
  )
}

export default CourseDetails