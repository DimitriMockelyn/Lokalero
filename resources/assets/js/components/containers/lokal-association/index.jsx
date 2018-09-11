import React from "react";
import ReactDOM from 'react-dom';
import Icon from '../../containers/app/icons/Icon'
import FourColumns from '../../components/FourColumns'
import FourColumnsWave from '../../components/FourColumnsWave'
import ThreeColumns from '../../components/ThreeColumns'


class LokalAssociation extends React.Component {
  constructor(props) {
    super(props);
    this.firstSection = {
      title: 'Pourquoi c\'est cool',
      col: [
        {
          title: 'Je communique plus largement sur mon projet',
          text: 'En le faisant apparaître sur les bornes Lokaléro',
          icon: 'communication'
        },
        {
          title: 'Je multiplie les chances d’atteindre mon objectif',
          text: 'En ayant le soutien des commerçants de mon quartier',
          icon: 'objectif'
        },
        {
          title: 'J’utilise la borne comme un tronc de collecte',
          text: 'En présentant le projet en physique aux habitants',
          icon: 'dons'
        },
        {
          title: 'Je remercie tous mes supers donateurs (et les futurs)',
          text: 'Et je leurs explique ce qui a été mis en place grâce à eux',
          icon: 'merci'
        }
      ],
    }
  
    this.secondSection = {
      title: 'Mes super-pouvoirs',
      col: [
        {
          title: 'Communiquer',
          text: 'Je mets mon projet en valeur sur plusieurs bornes du quartier <b>pendant 2 mois</b>. Ainsi, je le fais connaître auprès d’un maximum de citoyens.',
          icon: 'informer'
        },
        {
          title: 'Démultiplier',
          text: 'Je touche plus facilement <b>le grand public</b>, ce « 3e cercle » difficile à atteindre lors d’une campagne de collecte. Et la mairie soutient mon projet.',
          icon: 'choisir'
        },
        {
          title: 'Animer',
          text: 'Je multiplie mon impact en allant <b>à la rencontre des citoyens.</b> Je leur explique le projet et ils peuvent tout de suite le soutenir sur la borne.',
          icon: 'agir'
        },
        {
          title: 'Informer',
          text: 'J’explique aux habitants <b>ce que devient le projet</b> 6 mois après son financement, délai pendant lequel il reste consultable sur la borne.',
          icon: 'suivre'
        }
      ],
      text: 'Voici les super-pouvoirs que vous aurez en tant que plateforme de crowdfunding une fois que notre solution sera développée.',
      buttons: [
        {
          text: 'Je découvre les projets',
          url: '/',
          target: '_self',
          isDisabled: true,
          tooltip: 'Le site est en cours de contruction. Nous travaillons dur pour vous permettre de retrouver les premiers projets en ligne.',
          color: 'orange',
        },
        {
          text: 'Je découvre les bornes',
          url: '/',
          target: '_self',
          isDisabled: false,
          tooltip: false,
          color: 'orange',
        }
      ]
    }
  
    this.thirdSection = {
      col1: {
        title: 'Le truc en plus : la proximité',
        introduction: 'Je suis fortement susceptible de connaître les porteurs du projet puisque cela se passe à côté de chez moi !',
        text: 'Par exemple, je donne pour le potager collectif dans le parc derrière la mairie, la recherche sur la maladie dont le petit Théo de l\'école primaire est atteint, l’équipe de basket du village etc.',
      },
      col2: {
        buttons: []
      }
    }
  }
  
  render() {
    const sectionStyle = {
      backgroundImage: 'url(images/lokal/2.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    
    return (
      <div>
        
        <header className="header-lokal">
          <div className="header-lokal__background" style={sectionStyle}>
            <p>Je suis un(e)</p>
          </div>
          <nav role="navigation">
            <ul className="nav-lokal">
              <li className="nav-lokal__item">
                <a href="/lokal-citoyen" className="link">
                  <span className="link__text">Lokal citoyen(ne)</span>
                </a>
                <Icon icon="citoyen"/>
              </li>
              <li className="nav-lokal__item nav__current--item">
                <a href="/lokal-association" className="link">
                  <span className="link__text">Lokal association</span>
                </a>
                <Icon icon="association"/>
              </li>
              <li className="nav-lokal__item">
                <a href="/lokal-pro" className="link">
                  <span className="link__text">Lokal professionnel(le)</span>
                </a>
                <Icon icon="pro"/>
              </li>
              <li className="nav-lokal__item">
                <a href="/lokal-collectivite" className="link">
                  <span className="link__text">Lokal collectivité</span>
                </a>
                <Icon icon="collectivite"/>
              </li>
              <li className="nav-lokal__item">
                <a href="/plateforme-de-crowdfunding" className="link">
                  <span className="link__text">Plateforme de <br/>crowdfunding</span>
                </a>
                <Icon icon="crowdfunding"/>
              </li>
            </ul>
          </nav>
        </header>

        <FourColumns content={this.firstSection}/>

        <FourColumnsWave content={this.secondSection}/>

        <ThreeColumns content={this.thirdSection}/>
        
      </div>
    )
  }
}

export default LokalAssociation


if (document.getElementById('lokal-association')) {
  ReactDOM.render(<LokalAssociation />, document.getElementById('lokal-association'));
}