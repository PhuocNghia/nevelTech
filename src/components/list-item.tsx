'use client'

import Image from 'next/image'
import '../styles/list-item.scss'

const ListItem = () => {
  const list_item = [
    { icon: '/assets/diamond.svg', text: 'Diamond mine ', link: '#' },
    { icon: '/assets/vip.svg', text: 'VIP', link: '#' },
    { icon: '/assets/promotion.svg', text: 'Promotion', link: '#' },
    { icon: '/assets/match.svg', text: 'Hot Match', link: '#' },
    { icon: '/assets/transition.svg', text: 'P2P Transaction', link: '#' },
    { icon: '/assets/game.svg', text: 'Games', link: '#' },
    { icon: '/assets/providers.svg', text: 'Providers', link: '#' }
  ]
  return (
    <section className='list-item'>
      <div className='container'>
        <div className='list-item-inner'>
          <a href='#' className='search-menu-item'>
            <span className='icon'>
              <Image
                src='/assets/search-icon.svg'
                layout='intrinsic'
                width={24}
                height={24}
                alt=''
              />
            </span>
            <span className='text'>Search</span>
          </a>
          {list_item.map((item, index) => (
            <a key={index} href={item.link}  className={`menu-item ${index >= list_item.length - 2 ? "custom-items" : ""}`}>
            <span className='icon'>
              <Image
                src={item.icon}
                layout='intrinsic'
                width={24}
                height={24}
                alt=''
              />
            </span>
            <span className='text'>{item.text}</span>
          </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListItem
