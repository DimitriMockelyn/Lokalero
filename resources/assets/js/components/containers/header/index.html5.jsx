import React from 'react';
import Icon from '../../containers/app/icons/Icon'
import ReactDOM from 'react-dom';
let lastScrollY = 0;


class HeaderHTML5 extends React.Component {
  constructor (props) {
    super(props);
  }
  
  /*handleScroll() {
    const header = document.querySelector('.header')
    if (window.pageYOffset > 75) {
      header.classList.add('page-head--contracted')
    } else {
      header.classList.remove('page-head--contracted')
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }*/
  
  
  render()  {
    return (
        <header className="section header">
          <div className="row">
          <a href={window.location.origin}>
            <Icon icon="lokalero" />
            </a>
  
            <a href={window.location.origin+"#video"} className="link link--regular orange">
              <span className="link__text upper">La borne Lokaléro</span>
            </a>
  
            <a href={window.location.origin+"/contact"} className="link link--bordered green">
              <span className="link__text upper">Nous contacter</span>
            </a>
            
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
