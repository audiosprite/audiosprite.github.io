import * as React from 'react';
import { Third } from '../../components';
import { Img } from '../../components/Icons';
import './About.scss';

const bio = `John Fio is a composer (ASCAP), multi-instrumentalist, producer, arranger, and audio engineer.

He lives in Brooklyn, New York.`;

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ante mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non ipsum semper, dapibus nisl eget, eleifend quam. Nunc pharetra risus felis, eget tempus magna dictum eget. Sed vitae purus libero. Quisque non ex justo. Maecenas ac lectus at nunc fermentum imperdiet auctor id dolor. Proin molestie risus eu felis placerat, vel tempus erat sodales. Integer gravida, elit at rutrum laoreet, est tellus euismod quam, id efficitur libero neque vel ligula.

Maecenas vel nisl at ligula fermentum hendrerit. Quisque in dapibus dolor. Ut a convallis tellus, sit amet ultrices diam. Aliquam consequat ipsum metus, vel cursus ex consectetur quis. Maecenas in dolor vulputate, euismod elit et, hendrerit nisi. Donec eget lorem ullamcorper, consequat dui in, viverra justo. Nullam ut mauris leo. Morbi vel pharetra diam. Sed elit justo, interdum ut cursus id, aliquam nec mi.

Etiam at orci eleifend, pharetra dui quis, aliquet eros. Nulla auctor lorem purus, vitae tempus lacus efficitur in. Mauris vestibulum vestibulum tellus, sit amet ultrices felis vulputate nec. Sed maximus efficitur dolor. Morbi a lacus ut est ultrices maximus. Etiam non iaculis diam. Fusce consequat purus elit, posuere tristique felis tristique eu. Phasellus mattis arcu consequat gravida pretium. Ut bibendum ex in faucibus imperdiet. Aenean velit felis, semper non feugiat ac, dictum id ex. Aenean egestas scelerisque lorem non blandit. Pellentesque est tortor, vehicula vitae rutrum quis, lobortis in nulla. Vestibulum ultricies scelerisque condimentum. Etiam nec cursus neque. Donec ex risus, varius ac justo sed, mattis vulputate felis.`;

const About = () => (
  <div className="About">
    <Third>
      <div className="About--Inner">
        <div className="About--PortraitWrapper">
          <Img className="About--Portrait" src="photos/portrait-emi.jpg" />
        </div>
        <div className="About--Copy">{bio}</div>
      </div>
    </Third>
  </div>
);

export default About;
