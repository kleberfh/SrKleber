import React from 'react';
import Footer from './components/Footer';

import './App.css';

import {ReactComponent as Email} from './Assets/Icons/at-outline.svg';
import {ReactComponent as Github} from './Assets/Icons/github-outline.svg';
import {ReactComponent as Linkedin} from './Assets/Icons/linkedin-outline.svg';

import me from './Assets/Images/me.png';
import curve from './Assets/Icons/curve.svg';
import {ReactComponent as Constructor} from './Assets/Icons/Site-constructor.svg';

function App() {
  return (
    <div className="app_container">
      <img className={'curve_vector'} src={curve} alt="curve vector" />
      <div className={'content_container'}>
        <div className={'column_container'}>
          <p className={'info_text'}>
            Olá, ainda estou em construção, mas você pode voltar
            em breve. Para saber um pouco mais sobre mim, te convido a visitar minhas redes sociais.
          </p>
          <Constructor className={'constructor_icon'} />
        </div>
        <div className={'column_container'}>
          <div className={'image_container'}>
            <img src={me} className={'me_image'} alt="kleber photo" />
          </div>
          <div className={'social_container'}>
            <h3 className={'name'}>Kleber Fernando</h3>
            <a
                target={'_blank'}
                rel="noopener noreferrer"
                href={'https://github.com/kleberfh'}
                className={'social_link black_font'}
            >
              <Github className={'social_icon'} />
              KleberFh
            </a>
            <a
                target={'_blank'}
                rel="noopener noreferrer"
                className={'social_link blue_font'}
                href={'https://www.linkedin.com/in/kleber-fernando/'}
            >
              <Linkedin className={'social_icon blue_icon'} />
              Kleber Fernando
            </a>
            <a
                target={'_blank'}
                rel="noopener noreferrer"
                className={'social_link black_font'}
                href={'mailto:kleber.canedo@gmail.com'}
            >
              <Email className={'social_icon'} />
              kleber.canedo@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
