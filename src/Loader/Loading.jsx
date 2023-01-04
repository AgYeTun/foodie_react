import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="spinner fixed left-[50%] top-[50%]">
      <div className="spinner-wrapper">
        <div className="rotator">
          <div className="inner-spin"></div>
          <div className="inner-spin"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading