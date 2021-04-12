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

When John was 11, he bootleg-recorded the entire <i>Zelda: Majora's Mask</i> soundtrack from the speakers of his TV onto a cassette player. This early love of game music later drove him to study music at Rutgers University in New Jersey.

Since then, John has had the opportunity of contributing original music to a <a href="/credits">wide range of videogames, shortfilms, and games-culture programming</a>. He also acts as a music curator for indie game venue <a href="https://www.wonderville.nyc/">Wonderville</a> in Bushwick, NYC.

In 2019, John placed 13<sup>th</sup> at EVO in <i>Super Smash Bros. Melee</i>. He lives in Brooklyn, New York.`.trim();

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non ipsum semper, dapibus nisl eget, eleifend quam. Nunc pharetra risus felis, eget tempus magna dictum eget. Sed vitae purus libero. Quisque non ex justo. Maecenas ac lectus at nunc fermentum imperdiet auctor id dolor. Proin molestie risus eu felis placerat, vel tempus erat sodales. Integer gravida, elit at rutrum laoreet, est tellus euismod quam, id efficitur libero neque vel ligula.

Maecenas vel nisl at ligula fermentum hendrerit. Quisque in dapibus dolor. Ut a convallis tellus, sit amet ultrices diam. Aliquam consequat ipsum metus, vel cursus ex consectetur quis. Maecenas in dolor vulputate, euismod elit et, hendrerit nisi. Donec eget lorem ullamcorper, consequat dui in, viverra justo. Nullam ut mauris leo. Morbi vel pharetra diam. Sed elit justo, interdum ut cursus id, aliquam nec mi.

Etiam at orci eleifend, pharetra dui quis, aliquet eros. Nulla auctor lorem purus, vitae tempus lacus efficitur in. Mauris vestibulum vestibulum tellus, sit amet ultrices felis vulputate nec. Sed maximus efficitur dolor. Morbi a lacus ut est ultrices maximus. Etiam non iaculis diam. Fusce consequat purus elit, posuere tristique felis tristique eu. Phasellus mattis arcu consequat gravida pretium. Ut bibendum ex in faucibus imperdiet. Aenean velit felis, semper non feugiat ac, dictum id ex. Aenean egestas scelerisque lorem non blandit. Pellentesque est tortor, vehicula vitae rutrum quis, lobortis in nulla. Vestibulum ultricies scelerisque condimentum. Etiam nec cursus neque. Donec ex risus, varius ac justo sed, mattis vulputate felis.`;

const About = () => (
  <div className="About">
    {/* <Third> */}
    <div className="About--Inner">
      <div className="About--PortraitWrapper">
        <div className="About--PortraitContent">
          <Img
            alt="John Fio"
            className="About--Portrait"
            src="photos/portrait-emi.jpg"
          />
          <Spacer />
          <div>
            photo © <Link href="https://www.uglymachine.net/">Emi Spicer</Link>
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
