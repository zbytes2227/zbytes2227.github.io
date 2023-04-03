import React from 'react'

function ProjectBox(props) {
  return (
   <>
   <a href='/jj'>
   <div className='bg-gray-900 m-5 p-2 rounded-xl hover:bg-gray-800 max-w-max'>
            <div className='p-'>
            <img className='rounded' src={props.img} alt="Image" width="230" height="230" />
            </div>
            <h2 className='text-center text-white mt-2'>{props.name}</h2>
        </div>
   </a>
   </>
  )
}

export default ProjectBox