'use client'

import Image from 'next/image'
import '../styles/exclusive-games.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'

const ExclusiveGames = () => {
  const ex_game = [
    {
      icon: '/assets/ex_game_1.png',
      text: '100HP Gaming',
      link: '#',
      label: 'HOT'
    },
    { icon: '/assets/ex_game2.png', text: 'VeliPlay', link: '#', label: 'HOT' },
    {
      icon: '/assets/ex_game3.png',
      text: 'Evolution',
      link: '#',
      label: 'NEW'
    },
    { icon: '/assets/ex_game_1.png', text: 'VeliPlay', link: '#', label: 'NEW' },
    { icon: '/assets/ex_game2.png', text: 'VeliPlay', link: '#' },
    { icon: '/assets/ex_game3.png', text: 'VeliPlay', link: '#', label: 'HOT' },
    { icon: '/assets/ex_game_1.png', text: 'VeliPlay', link: '#' },
    { icon: '/assets/ex_game2.png', text: 'VeliPlay', link: '#', label: 'HOT' },
    { icon: '/assets/ex_game3.png', text: 'VeliPlay', link: '#' }
  ]
  return (
    <section className='ex-game'>
      <div className='container'>
        <h2 className="section-ttl">Exclusive Games</h2>
        <Link href='#' className="all-btn">SEE ALL</Link>
        <Swiper slidesPerView={'auto'} spaceBetween={16}>
          {ex_game.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link} className='menu-item'>
                {item.label === 'HOT' && (
                  <Image src='/assets/hot_lbl.png' alt='Hot' className='game-label' width={36} height={21} />
                )}
                {item.label === 'NEW' && (
                  <Image src='/assets/new_lbl.png' alt='New' className='game-label' width={36} height={21} />
                )}
                <span className='ex_img'>
                  <Image
                    src={item.icon}
                    layout='intrinsic'
                    width={156}
                    height={211}
                    alt=''
                  />
                </span>
                <span className='text'>{item.text}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ExclusiveGames
