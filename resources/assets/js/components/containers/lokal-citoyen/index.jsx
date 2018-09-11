import React from "react"
import ReactDOM from 'react-dom'
import Icon from '../../containers/app/icons/Icon'
import FourColumns from '../../components/FourColumns'
import FourColumnsWave from '../../components/FourColumnsWave'
import ThreeColumns from '../../components/ThreeColumns'
import HeaderLokal from '../../components/HeaderLokal'

class LokalCitoyen extends React.Component {
  constructor(props) {
    super(props);
    this.header = {
      backgroundImage: 'images/lokal/1.jpg',
      menu: [
        {
          title: 'Lokal citoyen(ne)',
          url: '/lokal-citoyen',
          icon: 'citoyen',
          current: true,
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
          current: false,
        }
      ]
    }
    
    this.firstSection = {
      title: 'Pourquoi c\'est cool',
      col: [
        {
          title: 'J\'occupe mon temps d\'attente grâce à la borne',
          text: 'En faisant un geste citoyen et solidaire',
          icon: 'temps'
        },
        {
          title: 'Je suis au courant de l’actu sur les initiatives locales',
          text: 'En découvrant les projets proches de chez moi',
          icon: 'local'
        },
        {
          title: 'Je suis bénéficiaire du projet que je soutiens',
          text: 'En recevant des contreparties et en dynamisant mon quartier',
          icon: 'benefice'
        },
        {
          title: 'Je vois concrètement l’impact de mon action',
          text: 'En constatant la réalisation effective du projet',
          icon: 'local-impact'
        }
      ],
    }
    
    this.secondSection = {
      title: 'Mes super-pouvoirs',
      col: [
        {
          title: 'M\'informer',
          text: 'Je m’informe sur les actualités de mon quartier et je découvre les projets des associations <b>proches de chez moi</b>.',
          icon: 'informer'
        },
        {
          title: 'Choisir',
          text: 'Un projet me plait ? Je choisis la <b>valeur de ma contribution</b> Exemple, 5€ est égal à 1 sac de terreau pour le potager collectif.',
          icon: 'choisir'
        },
        {
          title: 'Agir',
          text: 'Je dégaine ma carte et deviens super-héros. Grâce au <b>sans contact</b>, je vois tout de suite ma contribution et l’avancée du projet.',
          icon: 'agir'
        },
        {
          title: 'Suivre',
          text: 'Je suis reçu(e) à mon RDV ? Je continue de <b>suivre les projets</b> sur le site lokalero.fr ou sur une autre borne du quartier.',
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
          color: 'dark',
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
        buttons: [
          {
            text: 'Les projets',
            url: '/',
            target: '_self',
            isDisabled: false,
            tooltip: false,
            color: 'white',
          },
          {
            text: 'Les bornes',
            url: '/',
            target: '_self',
            isDisabled: false,
            tooltip: false,
            color: 'white',
          }
        ]
      }
    }
  }
  
  render() {
    const sectionStyle = {
      backgroundImage: 'url(images/lokal/1.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    
    return (
      <div>
        
        <HeaderLokal content={this.header}/>

        <FourColumns content={this.firstSection}/>
        
        <FourColumnsWave content={this.secondSection}/>
  
        <ThreeColumns content={this.thirdSection}/>
        
      </div>
    )
  }
}

export default LokalCitoyen


if (document.getElementById('lokal-citoyen')) {
  ReactDOM.render(<LokalCitoyen />, document.getElementById('lokal-citoyen'));
}