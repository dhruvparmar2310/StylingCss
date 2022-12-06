import React from 'react'
import Header from '../../shared/components/Header/index'
import Hero from '../../shared/components/Hero'
import Intro from '../../shared/components/Intro'
import './style.css'
import { FiCast, FiUsers } from 'react-icons/fi'
import { ImStack } from 'react-icons/im'
import ServiceCard from '../../shared/components/ServiceCard'
import serviceOne from '../../assets/images/service-1.jpeg'
import serviceTwo from '../../assets/images/service-2.jpeg'
import serviceThree from '../../assets/images/service-3.jpeg'
import Statistics from '../../shared/components/Statistics'

export default function MainContent () {
  return (
    <>
        {/* header */}
        <Header />

        {/* hero section */}
        <Hero />

        {/* into section */}
        <section className='intro'>
            <Intro logo={<FiCast />} title='Business Stratagy' desc='I throw myself down among the tall grass by the stream as I lie close to the earth.' />
            <Intro logo={<ImStack />} title='Website Development' desc='I throw myself down among the tall grass by the stream as I lie close to the earth.' />
            <Intro logo={<FiUsers />} title='Marketing & Reporting' desc='I throw myself down among the tall grass by the stream as I lie close to the earth.' />
        </section>

        {/* servies section */}
        <section className='services' id='services'>
            <div className='services-info'>
                <h1>Services</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but.</p>
                <button>Request Custom Service</button>
            </div>
            <div className='services-card'>
                <ServiceCard src={serviceOne} title='Thinking Development' desc='I throw myself down among the tall grass by the stream' />
                <ServiceCard src={serviceTwo} title='Business Consulting' desc='I throw myself down among the tall grass by the stream' />
                <ServiceCard src={serviceThree} title='Business Development' desc='I throw myself down among the tall grass by the stream' />
            </div>
        </section>

        {/* statistics section */}
        <section className='statistics'>
            <Statistics />
        </section>
    </>
  )
}
