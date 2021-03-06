import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          
        </p>
        <p className='footer-subscription-text'>
          
        </p>
        <div className='input-areas'>
          <form>
            <input
              //className='footer-input'
              //name='email'
             // type='email'
             // placeholder='Your Email'
            />
            
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2></h2>
            <Link to='/sign-up'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href="mailto:info@synbioshield.co.nz">Contact</a>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2></h2>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/synbioshield_nz">Instagram</a>
            <a href="https://www.facebook.com/SynbioShieldNZ">facebook</a>
            <a href="https://twitter.com/synbioshieldNZ">Twitter</a>
            <a href="https://www.linkedin.com/synbio-shield-nz">Linkedin</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SynBioShield
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>SynBioShield ?? 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
