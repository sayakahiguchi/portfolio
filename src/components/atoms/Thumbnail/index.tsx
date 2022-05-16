import React from 'react'
interface Props {
  src: string;
}

const Thumbnail = ({ src }) => {
  return (
    <div className= 'order-1 aspect-[16/9] aspect9to16' >
    <img className='object-contain'
  src = { src }
  alt = "Picture of the author"
    />

    < /div>
  )
}

export default Thumbnail