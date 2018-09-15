import React from "react";
import ReactDOM from 'react-dom';
import Icon from '../../containers/app/icons/Icon'
import FourColumns from '../../components/FourColumns'
import FourColumnsWave from '../../components/FourColumnsWave'
import ThreeColumns from '../../components/ThreeColumns'
import HeaderLokal from '../../components/HeaderLokal'


class Crowdfunding extends React.Component {
  constructor(props) {
    super(props);
  
    this.header = {
      backgroundImage: 'images/lokal/5.jpg',
      menu: [
        {
          title: 'Lokal citoyen(ne)',
          url: '/lokal-citoyen',
          icon: 'citoyen',
          current: false,
        },
        {
          title: 'Lokal association',
          url: '/lokal-association',
          icon: 'association',
          backgroundImage: '',
          current: false,
        },
        {
          title: 'Lokal professionnel(le)',
          url: '/lokal-pro',
          icon: 'pro',
          backgroundImage: '',
          current: false,
        },
        {
          title: 'Lokal collectivité',
          url: '/lokal-collectivite',
          icon: 'collectivite',
          backgroundImage: '',
          current: false,
        },
        {
          title: 'Plateforme de <br/>crowdfunding',
          url: '/plateforme-de-crowdfunding',
          icon: 'crowdfunding',
          backgroundImage: '',
          current: true,
        }
      ]
    }
  
    this.firstSection = {
      title: 'Pourquoi c\'est cool',
      col: [
        {
          title: 'J’augmente mon impact local',
          text: 'En renforcant ma marque sur les territoires',
          icon: 'impact'
        },
        {
          title: 'Je démocratise le crowdfunding',
          text: 'En aidant les porteurs de projets à mobiliser le fameux “3e cercle”',
          icon: 'people'
        },
        {
          title: 'J’améliore mon taux de succès des projets',
          text: 'En convertissant plus de citoyens au financement participatif',
          icon: 'taux'
        },
        {
          title: 'J’augmente le traffic sur mon site',
          text: 'En me faisant d’abord connaître par un point d’entrée physique',
          icon: 'trafic'
        }
      ],
    }
  
    this.secondSection = {
      title: 'Mes super-pouvoirs',
      col: [
        {
          title: 'Localiser',
          text: 'Dans chaque commune, je mets en avant les projets hébergés sur ma plateforme et qui sont portés dans la région alentour.',
          icon: 'informer'
        },
        {
          title: 'Facilier',
          text: 'Je propose aux porteurs de projets un service qui leur permet de toucher plus facilement le public, cible souvent difficile à atteindre.',
          icon: 'choisir'
        },
        {
          title: 'Se développer',
          text: 'J’améliore mes statistiques de collecte. Par exemple le nombre de contributeurs ou le nombre de projets qui atteignent leur objectif.',
          icon: 'agir'
        },
        {
          title: 'Communiquer',
          text: 'J’utiliser la borne en tant que prolongement physique de ma plateforme. J’invite ainsi chacun à venir se créer un profil donateur en ligne.',
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
  }
  
  render() {
    const sectionStyle = {
      backgroundImage: 'url(images/lokal/5.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    
    return (
      <div>
  
        <HeaderLokal content={this.header}/>

        <FourColumns content={this.firstSection}/>
  
        <FourColumnsWave content={this.secondSection}/>
        
        <section className="section section--frame">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col offset-md-1 col-md-10 offset-lg-3 col-lg-6">
                  <Icon icon="crowdfunding-schema" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    )
  }
}

export default Crowdfunding


if (document.getElementById('crowdfunding')) {
  ReactDOM.render(<Crowdfunding />, document.getElementById('crowdfunding'));
}