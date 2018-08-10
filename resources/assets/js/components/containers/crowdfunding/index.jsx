import React from "react";
import ReactDOM from 'react-dom';
import Icon from '../../containers/app/icons/Icon'


class Crowdfunding extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const sectionStyle = {
      backgroundImage: 'url(images/lokal/5.jpg)',
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
                <li className="nav-lokal__item">
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
                <li className="nav-lokal__item current--item">
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
                      <h2 className="h2 bold orange">Localiser</h2>
                      <p>Dans chaque commune, je
                        mets en avant les projets
                        hébergés sur ma plateforme
                        et qui sont portés dans la
                        région alentour.</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <h2 className="h2 bold orange">Faciliter</h2>
                      <p>Je propose aux porteurs de
                        projets un service qui leur
                        permet de toucher plus
                        facilement le public, cible
                        souvent difficile à atteindre.</p>
                    </div>
                  </div>
                  <div className="col offset-md-0 col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <h2 className="h2 bold orange">Se développer</h2>
                      <p>J’améliore mes statistiques
                        de collecte. Par exemple le
                        nombre de contributeurs
                        ou le nombre de projets qui
                        atteignent leur objectif.</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <h2 className="h2 bold orange">Communiquer</h2>
                      <p>J’utiliser la borne en tant que
                        prolongement physique de
                        ma plateforme. J’invite ainsi
                        chacun à venir se créer un
                        profil donateur en ligne.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
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
                      <Icon icon="impact"/>
              
                      <h3 className="h3 bold">
                        J’augmente mon impact
                        local
                      </h3>
                      <p>En renforcant ma marque sur
                        les territoires</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="people"/>
              
                      <h3 className="h3 bold">
                        Je démocratise le
                        crowdfunding
                      </h3>
                      <p>En aidant les porteurs de projets à
                        mobiliser le fameux “3e cercle”</p>
                    </div>
                  </div>
                  <div className="col offset-md-0 col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="taux"/>
              
                      <h3 className="h3 bold">
                        J’améliore mon taux de
                        succès des projets
                      </h3>
                      <p>En convertissant plus de citoyens
                        au financement participatif</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="trafic"/>
              
                      <h3 className="h3 bold">
                        J’augmente le traffic sur
                        mon site
                      </h3>
                      <p>En me faisant d’abord connaître par
                        un point d’entrée physique</p>
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

export default Crowdfunding


if (document.getElementById('crowdfunding')) {
  ReactDOM.render(<Crowdfunding />, document.getElementById('crowdfunding'));
}