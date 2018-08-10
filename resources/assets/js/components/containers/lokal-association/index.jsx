import React from "react";
import ReactDOM from 'react-dom';
import Icon from '../../containers/app/icons/Icon'


class LokalAssociation extends React.Component {
  constructor(props) {
    super(props);
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
                <li className="nav-lokal__item current--item">
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
          
          <section className="section section--four-columns">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <div className="title-container red">
                      <h2 className="h1 bold upper">Mes supers pouvoirs</h2>
                      <Icon icon="title-left"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <h2 className="h2 bold orange">Communiquer</h2>
                      <p>Je mets mon projet en valeur
                        sur plusieurs bornes du
                        quartier pendant 1 mois. Ainsi,
                        je le fais connaître auprès d’un
                        maximum de citoyens.</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <h2 className="h2 bold orange">Démultiplier</h2>
                      <p>Je touche plus facilement
                        le public, ce « 3e cercle »
                        difficile à atteindre lors d’une
                        campagne de collecte. Et la
                        mairie soutient mon projet.</p>
                    </div>
                  </div>
                  <div className="col offset-md-0 col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <h2 className="h2 bold orange">Animer</h2>
                      <p>Je multiplie mon impact en
                        allant à la rencontre des
                        citoyens. Je leur explique le
                        projet et ils peuvent tout de
                        suite le soutenir sur la borne.</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <h2 className="h2 bold orange">Informer</h2>
                      <p>J’explique aux habitants ce
                        que devient le projet 4 mois
                        après son financement, délai
                        pendant lequel il reste
                        consultable sur la borne.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section section-frame">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col offset-md-1 col-md-10 offset-lg-3 col-lg-6">
                    <div className="frame-container">
                      <h2 className="h2">La condition</h2>
                      
                      <p>Déposer son projet sur une plateforme de crowdfunding
                        partenaire et demander à bénéficier du service de bornes LOKALERO.
                        En fonction de la nature de votre projet,
                        LOKALERO vous orientera vers la plateforme la plus adaptée
                        à vos besoins. Puis, au cours de votre dernier mois de collecte,
                        il sera mis en valeur sur les bornes de votre région pour
                        augmenter votre nombre de contributeurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section section--four-columns section--highlight">
            <div className="wrapper">
              <div className="container">
  
                <div className="row">
                  <div className="col text-center">
                    <div className="title-container green">
                      <h2 className="h1 bold upper">Pourquoi c'est cool</h2>
                      <Icon icon="title-right"/>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="impact-communication"/>
  
                      <h3 className="h3 bold">
                        Je démultiplie l’impact
                        de mes communications
                      </h3>
                      <p>En diffusant plus largement
                        les contenus produits</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="link"/>
  
                      <h3 className="h3 bold">
                        Je renforce le lien entre élus
                        locaux et administrés
                      </h3>
                      <p>En tamponnant les projets du logo
                        officiel de la mairie, </p>
                    </div>
                  </div>
                  <div className="col offset-md-0 col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="idea"/>
  
                      <h3 className="h3 bold">
                        Je démultiplie l’impact
                        de mes communications
                      </h3>
                      <p>En leur permettant de choisir les projets
                        qu’ils jugent les plus pertinents</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="network"/>
  
                      <h3 className="h3 bold">
                        Je bénéficie d’un effet
                        de levier
                      </h3>
                      <p>En mobilisant de mulitiples donateurs
                        pour développer la vie locale</p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </section>
  
          <section className="section section--four-columns section--highlight">
            <div className="wrapper">
              <div className="container">
        
                <div className="row">
                  <div className="col text-center">
                    <div className="title-container green">
                      <h2 className="h1 bold upper">Pourquoi c'est cool</h2>
                      <Icon icon="title-right"/>
                    </div>
                  </div>
                </div>
        
                <div className="row">
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="communication"/>
              
                      <h3 className="h3 bold">
                        Je renforce la communication
                        autour de mon projet
                      </h3>
                      <p>En le faisant apparaître sur
                        les bornes Lokaléro</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="objectif"/>
              
                      <h3 className="h3 bold">
                        Je démultiplie mes chances
                        d’atteindre mon objectif
                      </h3>
                      <p>En crédibilisant mon projet car il a
                        un soutien institutionnel</p>
                    </div>
                  </div>
                  <div className="col offset-md-0 col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="dons"/>
              
                      <h3 className="h3 bold">
                        J’utilise la borne comme un tronc de collecte
                      </h3>
                      <p>En organisant des temps de
                        présentation du projet en physique</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="merci"/>
              
                      <h3 className="h3 bold">
                        Je remercie tous mes supers
                        donateurs (et les futurs)
                      </h3>
                      <p>Et en leur expliquant ce qui a été
                        mis en place grâce à eux</p>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          </section>
          
          <section className="section section--agir">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col col--center">
                    <div className="button-container">
                      <a href="#" className="button button--big button--green">
                        <span className="button__label">J'agis</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
    )
  }
}

export default LokalAssociation


if (document.getElementById('lokal-association')) {
  ReactDOM.render(<LokalAssociation />, document.getElementById('lokal-association'));
}