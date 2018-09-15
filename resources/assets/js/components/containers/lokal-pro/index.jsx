import React from "react";
import ReactDOM from 'react-dom';
import Icon from '../../containers/app/icons/Icon'
import FourColumns from '../../components/FourColumns'
import FourColumnsWave from '../../components/FourColumnsWave'
import ThreeColumns from '../../components/ThreeColumns'
import HeaderLokal from '../../components/HeaderLokal'

class LokalPro extends React.Component {
  constructor(props) {
    super(props);
  
    this.header = {
      backgroundImage: 'images/lokal/4.jpg',
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
          current: true,
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
          current: false,
        }
      ]
    }
  
    this.firstSection = {
      title: 'Pourquoi c\'est cool',
      col: [
        {
          title: 'Je renforce mon ancrage sur le territoire',
          text: 'En montrant que je contribue à la dynamique de mon quartier',
          icon: 'ancrage-local'
        },
        {
          title: 'Je soutiens les projets qui me tiennent à coeur',
          text: 'Tout en exerçant mon activité professionnelle',
          icon: 'soutiens'
        },
        {
          title: 'Je favorise les actes positifs et la bonne humeur',
          text: 'En leur permettant de s’engager sans leur prendre de temps supplémentaire',
          icon: 'smile'
        },
        {
          title: 'Je suscite la fierté de mes équipes et clients \n',
          text: 'En donnant à mon activité une nouvelle dimension porteuse de sens',
          icon: 'proud'
        }
      ],
    }
  
    this.secondSection = {
      title: 'Mes super-pouvoirs',
      col: [
        {
          title: 'Soutenir',
          text: 'Grâce à la borne, mon engagement est visible et concret. Je fais de mon commerce / cabinet un lieu de vie et de solidarité locale. ',
          icon: 'informer'
        },
        {
          title: 'Choisir',
          text: 'Je reste maître des projets qui sont diffusés sur la borne. Je les choisis tous les mois parmi une liste pré-sélectionnée.',
          icon: 'choisir'
        },
        {
          title: 'Valoriser',
          text: 'Je propose à mes clients ou patients une intéraction innovante et solidaire. Avant de les recevoir en RDV,  leur  temps d’attente est valorisé.',
          icon: 'agir'
        },
        {
          title: 'Fidéliser',
          text: 'Je renforce les liens avec mes clients, patients et salariés en leur permettant d’avoir un impact social dans leurs activités du quotidien.',
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
          text: 'Je retrouve les bornes',
          url: '/',
          target: '_self',
          isDisabled: false,
          tooltip: false,
          color: 'dark',
        }
      ]
    }
  }
  
  render() {
    const sectionStyle = {
      backgroundImage: 'url(images/lokal/3.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    
    return (
        <div>
  
          <HeaderLokal content={this.header}/>
  
          <FourColumns content={this.firstSection}/>
  
          <FourColumnsWave content={this.secondSection}/>
          
          <section className="section section--three-columns">
            <div className="wrapper">
              <div className="container">
                <div className="row align-v">
                  <div className="col col-lg-7">
                    <h2 className="h1 bold orange">Le truc en plus : la proximité</h2>
                    
                    <p className="h2 bold">
                      Je suis fortement susceptible de connaître les porteurs
                      du projet puisque cela se passe à côté de chez moi !
                    </p>
                    
                    <p className="h2">
                      Par exemple, je donne pour le potager collectif dans le
                      parc derrière la mairie, la recherche sur la maladie dont
                      le petit Théo de l'école primaire est atteint, l’équipe de basket
                      du village etc.
                    </p>
                  </div>
                  <div className="col offset-md-0 col-md-7 col-lg-3">
                    <div className="button-container align-v">
                      <a href="#" className="button button--white">
                        <span className="button__label">Les projets</span>
                      </a>
  
                      <a href="#" className="button button--white">
                        <span className="button__label">Les bornes</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="col offset-sm-0 col-md-5 col-lg-2">
                    <Icon icon="citoyen-right"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
  }
}

export default LokalPro


if (document.getElementById('lokal-pro')) {
  ReactDOM.render(<LokalPro />, document.getElementById('lokal-pro'));
}