import React from 'react'

function SkillBox(props) {
    return (
        <div className='bg-gray-900 m-2 p-4 rounded-xl'>
            <div className='p-'>
            <img src={props.img} alt="Image" width="100" height="100" />
            </div>
            <h2 className='text-center text-white font-bold'>{props.name}</h2>
        </div>
    )
}

export default SkillBox