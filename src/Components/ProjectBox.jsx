import React from 'react'

function ProjectBox(props) {
  return (
   <>
   {/* <a href={""}> */}
   <div className='bg-gray-900 m-5 p-2 rounded-xl hover:bg-gray-800 max-w-max'>
            <div className='p-'>
            <img className='rounded' src={props.img} alt="Image" width="230" height="230" />
            </div>
            <h2 className='text-center text-white mt-2'>{props.name}</h2>
            <h2 className='text-left text-gray-300 mt-2'>{props.description}</h2>
            <a href={props.github_link} className='text-center text-white m-1 bg-[#A128F7] py-1 px-2 rounded-lg'>{"Github Page"}</a>
      
            <a href={props.project_link} className='text-center text-white m-1 bg-indigo-600 py-1 px-2 rounded-lg'>{"Open Project"}</a>
        </div>
   {/* </a> */}
   </>
  )
}

export default ProjectBox