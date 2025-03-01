'use client'

import Image from 'next/image'
import '../styles/provices.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'

const Providers = () => {
  const providers = [
    { icon: '/assets/providers_1.png', text: 'Evolution', link: '#', number: '312' },
    { icon: '/assets/providers_2.png', text: 'Spribe', link: '#', number: '12' },
    { icon: '/assets/providers_3.png', text: 'VeliPlay', link: '#', number: '9' },
    { icon: '/assets/providers_1.png', text: 'Evolution', link: '#', number: '312' },
    { icon: '/assets/providers_2.png', text: 'Spribe', link: '#', number: '12' },
    { icon: '/assets/providers_3.png', text: 'VeliPlay', link: '#', number: '9' },
    { icon: '/assets/providers_1.png', text: 'Evolution', link: '#', number: '312' },
    { icon: '/assets/providers_2.png', text: 'Spribe', link: '#', number: '12' },
  ]
  return (
    <section className='providers-section'>
      <div className='container'>
        <h2 className='section-ttl'>All providers</h2>
        <Link href='#' className='all-btn'>
          SEE ALL
        </Link>
        <Swiper slidesPerView={'auto'} spaceBetween={12}>
          {providers.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link} className='menu-item'>
                <span className='providers-logo'>
                  <Image
                    src={item.icon}
                    layout='intrinsic'
                    width={93}
                    height={30}
                    alt=''
                  />
                </span>
                <div className="providers-cnt">
                  <span className='text'>{item.text}</span><br/>
                  <span className='number'>{item.number} games</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Providers
