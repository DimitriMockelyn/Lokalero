import React from 'react';
import Icon from '../../containers/app/icons/Icon'
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import PopupContact from './popup-contact';

class FooterHtml5 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false}
  }
  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal(that) {
    return function(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      that.setState({ open: false });
    }
  }
  render()  {
    return (
      <footer className="section footer">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                {/*<div className="col col-lg-4">
                  <h2 className="title">Lokaléro</h2>
                  <nav role="navigation" className="footer-nav">
                    <ul className="nav-wrap">
                      <li><a href="#" title="Qui sommes-nous ?" aria-label="Qui sommes-nous ?">Qui sommes-nous ?</a></li>
                      <li><a href="#" title="Lokaléro" aria-label="Lokaléro">La borne <span className="upper">Lokaléro</span></a></li>
                      <li><a href="#" title="Rejoindre l'équipe" aria-label="Rejoindre l'équipe">Rejoindre l'équipe</a></li>
                      <li><a href="#" title="Nos partenaires" aria-label="Nos partenaires">Nos partenaires</a></li>
                      <li><a href="#" title="Kit de presse" aria-label="Kit de presse">Kit de presse</a></li>
                    </ul>
                  </nav>
                </div>*/}
                <div className="col offset-lg-4 col-lg-4">
                  <div className="col__footer--middle">
                    <figure>
                      <img src="images/Portrait_Ophelie.png" alt="Ophélie Le Grand"/>
                    </figure>
  
                    <p>Pour nous contacter <br/>
                      envoyez un mail à Ophélie :<br/>
                      <a className="link link--primary orange" href="mailto:ophelie@lokalero.fr">
                        <span className="link__text">ophelie@lokalero.fr</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="col__footer--right">
                    <h2 className="title">Suivez-nous</h2>
                    <p onClick={() => {this.onOpenModal()}}>S'abonner à la newsletter</p>
  
                    <ul className="social-links">
                      <li>
                        <a title="#" onClick={() => {this.onOpenModal()}}>
                          <Icon icon="email" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/lokalero/" title="#">
                          <Icon icon="facebook" />
                        </a>
                      </li>
                    </ul>
  
                    <div className="mentions">
                      <ul className="mentions-list">
                        <li><a href="#">Mentions Légales</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">CGU</a></li>
                      </ul>
    
                      <p>2018 <strong className="up">Lokaléro</strong> - Tous droits réservés - France</p>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
          <Modal open={this.state.open} onClose={this.onCloseModal(this)} center>
            <PopupContact onCloseModal={this.onCloseModal(this)}/>
          </Modal>
        </footer>
    );
  }
}

const RealFooter =  FooterHtml5;
export default RealFooter;

if (document.getElementById('footerHTML5')) {
  ReactDOM.render(
      <RealFooter />, document.getElementById('footerHTML5'));
}
