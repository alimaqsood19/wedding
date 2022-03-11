import React from 'react';
import './info.styles.scss';

export const Intro = () => (
  <div id='intro' className='information-body'>
    <h1>Welcome</h1>
    <p>
      We are so excited to finally be able to share the details of our Irish
      wedding with you. To help with planning, we have outlined everything you
      need to know here. Invitations to follow early next year. Please note that
      only those who are fully vaccinated against Covid-19 can attend. If you
      have questions shoot us a message and we will do our best to help. Hope
      you can make it!
      <p>
        <p>Dee &amp; Ali</p>
      </p>
    </p>
  </div>
);

export const Info = () => (
  <div id='info' className='information-body'>
    <h1>Wedding Venue</h1>
    <p style={{ marginBottom: '20px' }}>
      Our wedding will be held at{' '}
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.barberstowncastle.ie/'
      >
        Barberstown Castle
      </a>
      , a country house and historic 13th century castle. The address is:
    </p>

    <p>Barberstown Castle,</p>
    <p>Barberstown, </p>
    <p>Straffan, </p>
    <p>Co. Kildare, Ireland</p>
    <p style={{ marginBottom: '20px' }}>W23 CX40</p>

    <p>The ceremony will begin @2pm.</p>
  </div>
);

export const HotelBookings = () => (
  <div id='hotelBookings' className='information-body'>
    <h1>Hotel Bookings</h1>
    <div>
      <h2>Staying at Barberstown Castle</h2>
      <ul>
        <li>
          Barberstown have offered a discounted room rate for guests of our
          wedding of <strong>$270/&euro;188 per room</strong> (includes a max of
          2 adults). The discounted rate is also available from Sunday to
          Thursday should you wish to extend your stay.
        </li>
        <li>
          To avail of this discounted rate on the night of the wedding you will
          need book using the code which is unique to our wedding{' '}
          <strong>BM2205</strong>. Please call 00 353 1 628 8157 Monday – Friday
          from 9:00am to 5:00pm GMT.
        </li>
        <li>
          There are only 37 rooms available in our room block which expires in
          February, 2022. Please book early to avoid disappointment.
        </li>
        <li>
          Upfront payment is required, however a full refund will be given if a
          room is cancelled at least four weeks prior to the Wedding date.{' '}
        </li>
        <li>
          This room rate includes a freshly cooked to order full Irish
          breakfast.
        </li>

        <li>Check-in is at 3pm and check-out is at 11.30am.</li>
      </ul>
    </div>
    <div>
      <h2>Getting There</h2>
      Barberstown Castle is a 30 minute drive from Dublin airport and from
      Dublin city centre.
    </div>
    <div className='m-0'>
      <h2>Alternative Nearby Hotel</h2>
      <p style={{ marginBottom: '20px' }}>
        The{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.westgrovehotel.com/'
        >
          Westgrove Hotel
        </a>{' '}
        is a short 7 minute drive from Barberstown Castle and is located in the
        centre of a nearby town. (RATE TBC- emailing me back) The address is:
      </p>
      <p>The Westgrove Hotel</p>
      <p>Abbeylands,</p>
      <p>Clane,</p>
      <p>Co. Kildare, Ireland,</p>
      <p>W91 YWE0</p>
    </div>
  </div>
);

export const TravellingToIreland = () => (
  <div id='travellingToIreland' className='information-body'>
    <div>
      <h1>Travelling to Ireland</h1>
      <h2>Flights</h2>
      <p>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.aircanada.com/us/en/aco/home.html'
        >
          Air Canada
        </a>
        ,{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.airtransat.com/en-CA/home'
        >
          Air Transat
        </a>{' '}
        and{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.aerlingus.com/html/home.html'
        >
          Aer Lingus
        </a>{' '}
        are currently offering direct flights from Canada to Dublin next May.
        Note that the time zone in Ireland is 5 hours ahead of Toronto.{' '}
      </p>
      <h2>Car Rental</h2>
      <h3>
        <a
          target='_blank'
          href='https://www.dublinairport.com/to-from-the-airport/car-rental'
          rel='noreferrer'
        >
          Renting a car from Dublin airport
        </a>
      </h3>
      <ul>
        <li>
          We recommend using sites like
          <a
            target='_blank'
            href='https://www.ca.kayak.com/Cheap-Dublin-Car-Rentals.7362.cars.ksp'
            rel='noreferrer'
          >
            {' '}
            Kayak{' '}
          </a>
          or
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.expedia.ca/Car-Rentals-In-Dublin.d4347204.Car-Rental-Guide?regionId=4347204&locale=en_CA&semcid=CA.MULTILOBC.GOOGLE.DL-c-EN.CAR&semdtl=a11774889650.b168524777429.r15ef456c5cfc5a970a22829ba4045192decd0e24ce820f036a521b6fb82592546.g1aud-1210701017419:kwd-320326255575.i1.d1343119474694.e1c.j19001551.k1.f1.n1.l1g.h1e.m1&gclid=CjwKCAjwgISIBhBfEiwALE19SdBBCwuNB84e2Is-paq5vWsW5Fx08x-VVugJ-EnIeZc0dZLKRw4gcxoCK9cQAvD_BwE'
          >
            {' '}
            Expedia{' '}
          </a>
          to find the best deal for your stay.
        </li>
        <li>
          Car insurance and collision damage protection is required when renting
          a car in Ireland and you will be asked to pay for it upon pick up of
          your car if you did not pay for it when booking online, that is unless
          you book with a good travel credit card such as a World Elite
          Mastercard that specifically covers car insurance in Ireland. If you
          do have this coverage you will, upon arrival, need to provide the
          clerk with a letter from your bank expressly stating that your credit
          card covers car insurance in the Republic of Ireland. If you don’t
          have this they will make you pay for insurance which is quite
          expensive (over $50 per day)!
        </li>
        <li>
          In Ireland we drive on the left of the road and on the right of the
          car, our roads are narrow and windy. Please take care!
        </li>
        <li>
          The car you rent will be a manual car unless you specify that you want
          an automatic.
        </li>
      </ul>
      <h2>Public Transport</h2>
      Public transport in Ireland is not the best, but should you need to you
      can get two buses from Dublin airport to Barberstown Castle which takes
      1.5 hours (Bus #777 to Liffey Valley then change to the 120 to Edenderry,
      getting off at Barberstown Cross).
    </div>
  </div>
);

export const ThingsToDo = () => (
  <div id='thingsToDo' className='information-body'>
    <h1>Things to do in Ireland</h1>
    <ul>
      <li>
        <a
          href='https://irishnationalstud.ie/'
          target='_blank'
          rel='noreferrer'
        >
          Irish National Stud and Japanese Gardens
        </a>
      </li>
      <li>
        <a
          href='https://www.tbvsc.com/kildare-village/en'
          target='_blank'
          rel='noreferrer'
        >
          Kildare Village Shopping Outlet
        </a>
      </li>
      <li>
        <a
          href='https://www.lullymoreheritagepark.com/'
          target='_blank'
          rel='noreferrer'
        >
          Lullymore Heritage and Discovery Park
        </a>
      </li>
      <li>
        <a href='https://taytopark.ie/' target='_blank' rel='noreferrer'>
          Tayto Park: Theme Park and Zoo
        </a>
      </li>
      <li>
        <a href='https://www.dublinzoo.ie/' target='_blank' rel='noreferrer'>
          Dublin Zoo
        </a>
      </li>
    </ul>
  </div>
);
