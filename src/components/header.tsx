'use client'
import { useState } from 'react';

import Link from 'next/link'
import Image from 'next/image'

import '../styles/header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='header'>
      <div className="container">
        <div className="hd-inner d-flex">
          <div className='hd-lft d-flex'>
            <div className="hd-logo">
              <Link href='#' className='menu-btn' onClick={() => setIsOpen(!isOpen)}>
                <Image src='/assets/menu-icon.svg' alt='' width={35} height={35} />
              </Link>
              <Link href='/' className='logo'>
                <Image src='/assets/logo.png' alt='Logo' width={68} height={30} />
              </Link>
            </div>
            <nav className='nav d-flex'>
              <Link href='#' className='search-btn'>
                <Image src='/assets/search-icon.svg' alt='Logo' width={30} height={30} />
              </Link>
              <ul className='menu d-flex'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/game'>Game</Link>
                </li>
                <li>
                  <Link href='/infor'>Infor</Link>
                </li>
                <li>
                  <Link href='/news'>News</Link>
                </li>
                <li>
                  <Link href='/promotions'>Promotions</Link>
                </li>
                <li>
                  <Link href='/vip'>Vip</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="user-func d-flex">
            <Link href='#' className='login-btn'>
              Login
            </Link>
            <Link href='/' className='register-btn'>
              Registration
            </Link>
          </div>
        </div>
        <div className={`sp-menu ${isOpen ? 'active' : ''}`}>
          <ul className='menu'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/game'>Game</Link>
            </li>
            <li>
              <Link href='/infor'>Infor</Link>
            </li>
            <li>
              <Link href='/news'>News</Link>
            </li>
            <li>
              <Link href='/promotions'>Promotions</Link>
            </li>
            <li>
              <Link href='/vip'>Vip</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
