import React from 'react'
import logo from '../../../assets/images/logo.png'
import './style.css'

export default function Header () {
  return (
    <>
        <nav>
            <div className='logo'>
                <img src={logo} title='logo' alt='logo' />
            </div>
            <div className='nav-tabs'>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href='#services'>Service</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#pages'>Pages</a></li>
                    <li><a href='#blocks'>Blocks</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><button>Buy Now</button></li>
                </ul>
            </div>
        </nav>
    </>
  )
}
