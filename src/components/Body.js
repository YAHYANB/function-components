import React from 'react'

export default function Body(props) {
  console.log(props.item)
  return (
    <div className="bg-gray-200 px-2 py-2 rounded-sm" key={props.item.id}>
      <div className="max-w-[230px] mx-auto py-3">
        <img src={props.item.thumbnail} alt='' className='rounded-sm'/>
      </div>
      <div className="px-3 py-1">
        <h1 className='text-xl font-bold uppercase'>
          {props.item.brand}
        </h1>
        <p className='text-gray-700 text-md font-mono'>{props.item.title}</p>
        <p className='text-gray-500 text-sm font-semibold py-1'>{props.item.description}</p>
      </div>
    </div>
  )
}
