import React from "react";
import ReactDOM from 'react-dom';
import Icon from '../../containers/app/icons/Icon'


class LokalCitoyen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const sectionStyle = {
      backgroundImage: 'url(images/lokal/1.jpg)',
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
                <li className="nav-lokal__item current--item">
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
                    <div className="title-container orange">
                      <h2 className="h1 bold upper">Pourquoi c'est cool</h2>
                      <Icon icon="title-right"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="temps"/>
                      <h2 className="h2 bold">J'occume mon temps d'attente grâce à la borne</h2>
                      <p>En faisant un geste citoyen <br/>et solidaire</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="local"/>
                      <h2 className="h2 bold">J'occume mon temps d'attente grâce à la borne</h2>
                      <p>En découvrant les projets <br/>proches de chez moi</p>
                    </div>
                  </div>
                  <div className="col offset-md-0 col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="benefice"/>
                      <h2 className="h2 bold">Je suis bénéficiaire du
                        projet que je soutiens</h2>
                      <p>En recevant des contreparties et <br/>
                        en dynamisant mon quartier</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content text-center">
                      <Icon icon="local-impact"/>
                      <h2 className="h2 bold">Je vois concrètement
                        l’impact de mon action
                      </h2>
                      <p>En constatant la réalisation <br/>
                        effective du projet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section section--wave">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <div className="title-container">
                      <h2 className="h1 bold upper">Mes super pouvoirs</h2>
                      <Icon icon="title-left"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section section--four-columns section--green">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content">
                      <Icon icon="informer"/>
                      <h2 className="h2 text-center bold upper white">M'informer</h2>
                      <p className="text-justify">
                        Je m’informe sur les actualités de
                        mon quartier et je découvre les
                        projets des associations <b>proches
                        de chez moi</b>.</p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content">
                      <Icon icon="choisir"/>
                      <h2 className="h2 text-center bold upper white">Choisir</h2>
                      <p className="text-justify">
                        Un projet me plait ? Je choisis
                        la <b>valeur de ma contribution</b>.
                        Exemple, 5€ est égal à 1 sac de
                        terreau pour le potager collectif.</p>
                    </div>
                  </div>
                  <div className="col offset-md-0 col-md-6 col-lg-3">
                    <div className="col__content">
                      <Icon icon="agir"/>
                      <h2 className="h2 text-center bold upper white">Agir</h2>
                      <p className="text-justify">
                        Je dégaine ma carte et deviens
                        super-héros. Grâce au <b>sans
                        contact</b>, je vois tout de suite ma
                        contribution et l’avancé du projet.
                      </p>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-3">
                    <div className="col__content">
                      <Icon icon="suivre"/>
                      <h2 className="h2 text-center bold upper white">Suivre</h2>
                      <p className="text-justify">
                        Je suis reçu(e) à mon RDV ? Je
                        continue de <b>suivre les projets</b> sur
                        le site lokalero.fr ou sur une autre
                        borne du quartier.</p>
                    </div>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col">
                    <div className="button-container align-h">
                      <a href="/" className="button button--big button--bordered button--orange">
                        <span className="button__label">Je découvre les projets</span>
                      </a>
        
                      <a href="/" className="button button--big button--bordered button--dark">
                        <span className="button__label">Je découvre les bornes</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
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
                  <div className="col offset-sm-0 offset-md-0 col-md-7 col-lg-3">
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

export default LokalCitoyen


if (document.getElementById('lokal-citoyen')) {
  ReactDOM.render(<LokalCitoyen />, document.getElementById('lokal-citoyen'));
}