import React from 'react';
import Icon from '../../containers/app/icons/Icon'
import ReactDOM from 'react-dom';
//let lastScrollY = 0;


class HeaderHTML5 extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render()  {
    return (
      <header className="section header" role="banner" itemScope itemType="http://schema.org/WPHeader">
        <div className="row">
          <a href={window.location.origin}>
            <Icon icon="lokalero" />
          </a>

          <nav className="nav-main" role="navigation">
            <a href={window.location.origin+"#video"} className="link link--regular orange" title="La borne Lokaléro" aria-label="La borne Lokaléro">
              <span className="link__text upper">La borne Lokaléro</span>
            </a>
  
            <a href={window.location.origin+"/contact"} className="link link--bordered header__contact green" title="Nous contacter" aria-label="Nous contacter">
              <span className="link__text upper">Nous contacter</span> <Icon icon="email"/>
            </a>
          </nav>
          
        </div>
      </header>
    );
  }
}

export default HeaderHTML5;

if (document.getElementById('headerHTML5')) {
  ReactDOM.render(
      <HeaderHTML5 />, document.getElementById('headerHTML5'));
}
