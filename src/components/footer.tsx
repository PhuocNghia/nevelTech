'use client'
import { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'
import '../styles/footer.scss'

const Footer = () => {
  const [is_1_Open, set_1_Open] = useState(false);
  const [is_2_Open, set_2_Open] = useState(false);
  const [is_3_Open, set_3_Open] = useState(false);
  return (
    <footer className='footer'>
      <div className="container">
        <div className="d-flex footer-inner">
          <div className="footer-1">
            <div className="help-inner">
              <h3 className="footer-ttl">Help Center</h3>
              <p>If you have any questions?</p>
              <Link href="#">get answers</Link>
            </div>
            <ul className="list-social">
              <li><Link href="#"><Image src="/assets/tele.svg" alt="" width={30} height={30} /></Link></li>
              <li><Link href="#"><Image src="/assets/fb.svg" alt="" width={30} height={30} /></Link></li>
              <li><Link href="#"><Image src="/assets/ins.svg" alt="" width={30} height={30} /></Link></li>
              <li><Link href="#"><Image src="/assets/twitter.svg" alt="" width={30} height={30} /></Link></li>
            </ul>
          </div>
          <div className="footer-2 footer-link">
            <h3 onClick={() => set_1_Open(!is_1_Open)}>Games</h3>
            <ul className={`${is_1_Open ? 'active' : ''}`}>
              <li><Link href="#">Game 1</Link></li>
              <li><Link href="#">Game 2</Link></li>
              <li><Link href="#">Game 3</Link></li>
              <li><Link href="#">Game 14</Link></li>
            </ul>
          </div>
          <div className="footer-3 footer-link">
            <h3 onClick={() => set_2_Open(!is_2_Open)}>About</h3>
            <ul className={`${is_2_Open ? 'active' : ''}`}>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Promotions</Link></li>
              <li><Link href="#">VIP</Link></li>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Awards & Certificates</Link></li>
              <li><Link href="#">App</Link></li>
            </ul>
          </div>
          <div className="footer-4 footer-link">
            <h3 onClick={() => set_3_Open(!is_3_Open)}>Legal Information</h3>
            <ul className={`${is_3_Open ? 'active' : ''}`}>
              <li><Link href="#">General Terms & Conditions</Link></li>
              <li><Link href="#">Responsible Gaming Policy</Link></li>
              <li><Link href="#">Sports Betting Rules</Link></li>
              <li><Link href="#">Privacy and Cookies Policy</Link></li>
              <li><Link href="#">Payment Methods</Link></li>
              <li><Link href="#">Limits</Link></li>
            </ul>
          </div>
          <div className="footer-5">
            <Image className="pc_display" src="/assets/platform_img.png" alt="" width={160} height={125} />
            <Image className="sp_display" src="/assets/platform_sp_img.png" alt="" width={160} height={125} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
