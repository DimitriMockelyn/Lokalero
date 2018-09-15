import React from 'react';
import Icon from '../../containers/app/icons/Icon'
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import PopupContact from './popup-contact';


const footerNavigation = [
  {
    title: 'Le projet',
    url: '/',
    target: '_self'
  },
  {
    title: 'La borne et vous',
    url: '/',
    target: '_self'
  },
  {
    title: 'Nous contacter',
    url: '/',
    target: '_self'
  }
]

class FooterHtml5 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false}
    this.footerNavigation = [
      {
        title: 'Le projet',
        url: '/',
        target: '_self',
        key: 0
      },
      {
        title: 'La borne et vous',
        url: '/',
        target: '_self',
        key: 1
      },
      {
        title: 'Nous contacter',
        url: '/',
        target: '_self',
        key: 2
      }
    ]
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
      <footer className="section footer" role="content-info" itemScope itemType="http://schema.org/WPFooter">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col col-lg-4">
                  <div className="footer__col footer__col--left">
                    <h2 className="footer__title title upper">Lokaléro</h2>
                    <nav role="navigation" className="footer-nav">
                      <ul className="nav-wrap">
                        {this.footerNavigation.map((item, key) => <li key={key}>
                          <a href="{item.url}" title="{item.title}" aria-label="{item.title}">{item.title}</a>
                        </li>)}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="footer__col footer__col--middle">
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
                  <div className="footer__col footer__col--right">
                    <h2 className="footer__title title upper">Suivez-nous</h2>
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
    
                      <p><span itemProp="copyrightYear">2018</span> <strong className="up" itemProp="copyrightHolder" itemScope itemType="http://schema.org/LocalBusiness">Lokaléro</strong> - Tous droits réservés - France</p>
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
