import React from 'react'

const Card = ({imj,detail, price}) => {
  return (
    <div className='p-2 rounded-sm border border-gray-600 flex flex-col justify-center items-center'>
        <div className='bg-pink-300 border border-r-white rounded-sm p-2'>
            <img 
            src={imj} 
            alt="img"
            className='w-[400px] h-auto'
            height={"400px"}
            width={"400px"}/>
        </div>
        <div className='bg-[#FAE3C6] border border-r-white rounded-sm w-full text-center p-2'>
            <p>{detail}</p>
            <p>RS:{price}</p>
        </div>
    </div>
  )
}

export default Card