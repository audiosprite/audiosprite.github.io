import * as React from 'react';
import { Link, Spacer, Third } from '../../components';
import { Img } from '../../components/Icons';
import './About.scss';

const bio = `John Fio is a composer (ASCAP), multi-instrumentalist, producer, arranger, and audio engineer.

He lives in Brooklyn, New York.`;

// open with a quote?

// some music stuff here
// history? education, work etc
// what i like to do
// brand yrself

const testBio = `
<strong>John Fio</strong> is a composer (ASCAP), multi-instrumentalist, producer, arranger, and audio engineer.

When John was 11, he bootleg-recorded the <i>Zelda: Majora's Mask</i> soundtrack from the speakers of his TV onto a cassette player. This early love of game music later drove him to study music at Rutgers University in New Jersey.

Since then, John has had the opportunity of contributing original music to a <a href="/credits">wide range of videogames, shortfilms, and games-culture programming</a>. He also acts as a music curator for indie game venue <a href="https://www.wonderville.nyc/">Wonderville</a> in Bushwick, NYC.

In 2019, John placed 13<sup>th</sup> at EVO in <i>Super Smash Bros. Melee</i>. He lives in Brooklyn, New York.`.trim();

const About: React.FC = () => (
  <div className="About">
    {/* <Third> */}
    <div className="About--Inner">
      <div className="About--PortraitWrapper">
        <div className="About--PortraitContent">
          <Img
            alt="John Fio"
            className="About--Portrait"
            src="photos/signalawards-crop.jpg"
          />
          <Spacer />
          <div>
            photo ©{' '}
            <Link href="https://www.signalaward.com/">The Signal Awards</Link>
          </div>
        </div>
      </div>
      {/* <div className="About--Copy">{testBio}</div> */}
      <div
        className="About--Copy"
        dangerouslySetInnerHTML={{ __html: testBio }}
      />
    </div>
    {/* </Third> */}
  </div>
);

export default About;
