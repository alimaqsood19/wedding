import React from 'react';
import './homepage.styles.scss';
import {
  Intro,
  Info,
  HotelBookings,
  TravellingToIreland,
  ThingsToDo,
} from '../../components/Info/info.component';

const HomePage = () => (
  <div>
    <div className='main-container'>
      <span className='header'>Dee &amp; Ali</span>
      <p className='jumbo-subtext'>14 May 2022 | Barberstown Castle</p>
    </div>
    <div className='info-container'>
      <Intro />
      <Info />
      <HotelBookings />
      <TravellingToIreland />
      <ThingsToDo />
    </div>
  </div>
);

export default HomePage;
