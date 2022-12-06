/* eslint-disable react/prop-types */
import React from 'react'
import '../Intro/style.css'

export default function Intro ({ logo, title, desc }) {
  return (
    <>
        <div className='card'>
            <h1>{logo}</h1>
            <p className='title'>{title}</p>
            <p className='desc'>{desc}</p>
        </div>
    </>
  )
}
