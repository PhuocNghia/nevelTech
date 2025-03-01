'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Link from 'next/link'
import "swiper/css";
import '../styles/mv.scss'

export default function MySwiper () {
  return (
    <section className="mv-section">
      <Swiper
        slidesPerView="auto"
        centeredSlides
        loop={true}
        spaceBetween={40}
        grabCursor
        className="custom-swiper"
      >
        <SwiperSlide>
          <div className='slide-inner slide_gr'>
            <div className='slide-cnt'>
              <div className='slide-lbl'>Exclusive Tournament</div>
              <div className='slide-ttl'>
                Piggy Christmas Tap:
                <br /> €35,000 For Your
                <br /> Wins
              </div>
              <div className='slide-btn'>
                <Link href='#'>JOIN AND WIN</Link>
              </div>
            </div>
            <div className='slide-img'>
              <Image
                src='/assets/slide_1.png'
                layout='intrinsic'
                width={585}
                height={485}
                alt='Slide 1'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-inner slide_bl'>
            <div className='slide-cnt'>
              <div className='slide-lbl'>CashBack</div>
              <div className='slide-ttl'>
                Win or Get Back up
                <br /> to €100
              </div>
              <div className='slide-btn'>
                <Link href='#'>Discover More</Link>
              </div>
              <div className='slide-desc'>
                See your best cashback offers for Slots, Live Games, and <br />
                Crash
                <br />
                Games. Play and get your money back daily!
              </div>
            </div>
            <div className='slide-img'>
              <Image
                src='/assets/slide_2.png'
                layout='intrinsic'
                width={536}
                height={445}
                alt='Slide 2'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-inner slide_bl'>
            <div className='slide-cnt'>
              <div className='slide-lbl'>Sport Welcome Pack</div>
              <div className='slide-ttl'>Up to 300%</div>
              <div className='slide-btn'>
                <Link href='#'>GET NOW</Link>
              </div>
              <div className='slide-desc'>
                Boost your balance by getting a €60 FreeBet for the first 3
                deposits
                <br />
                to win with favs at BlueChip. New players only.
              </div>
            </div>
            <div className='slide-img'>
              <Image
                src='/assets/slide_3.png'
                layout='intrinsic'
                width={536}
                height={445}
                alt='Slide 3'
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
