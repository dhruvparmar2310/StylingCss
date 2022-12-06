/* eslint-disable react/prop-types */
import React from 'react'
import '../ServiceCard/style.css'

export default function ServiceCard ({ src, title, desc }) {
  return (
    <>
        <div className='service-card-design'>
            <img src={src} />
            <p className='title'>{title}</p>
            <p className='desc'>{desc}</p>
            <button>Read More</button>
        </div>
    </>
  )
}
