import React from 'react';
import { Link } from 'react-scroll';
import './header.styles.scss';

const Header = () => (
  <div className='nav-container'>
    <div>D &amp; A</div>
    <div>
      <Link
        className='link-padding link-hover'
        to='info'
        spy={true}
        smooth={true}
      >
        Venue
      </Link>
      <Link
        className='link-padding link-hover'
        to='hotelBookings'
        spy={true}
        smooth={true}
      >
        Hotel Bookings
      </Link>
      <Link
        to="/"
        className='link-hover'
        spy={true}
        smooth={true}
      >
        RSVP
      </Link>
    </div>
  </div>
);

export default Header;
