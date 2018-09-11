import React from 'react'
import Icon from '../containers/app/icons/Icon'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class HeaderLokal extends React.Component {
  constructor (props) {
    super(props);
  }
  
  
  render () {
    const { content } = this.props
    
    let navOpened = false;
    const nav = document.getElementsByClassName('header-lokal')[0];
    
    function handleClick(e) {
      e.preventDefault();
  
      navOpened = !navOpened
      
      if (navOpened) {
        document.body.classList.add('mobNavOpened');
        disableBodyScroll(nav);
      } else {
        document.body.classList.remove('mobNavOpened');
        enableBodyScroll(nav);
      }
     
    }
  
    let sectionStyle = {
      backgroundImage: 'url('+ content.backgroundImage +')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    
    return (
      <div>
        <header className="header-lokal">
          <div className="header-lokal__background" style={sectionStyle}>
            <p>Je suis un(e)</p>
          </div>
          <nav role="navigation" className="nav__wrapper">
            <ul className="nav-lokal">
        
              {content.menu.map((item, key) =>
                  <li className={"nav-lokal__item" + (item.current ? ' nav__current--item' : '')} key={"nav__item-" + key}>
                    <a href={item.url} className="link">
                      <span className="link__text" dangerouslySetInnerHTML={{__html: item.title}} />
                    </a>
                    <Icon icon={item.icon}/>
                  </li>
              )}
      
            </ul>
          </nav>
        </header>
        <button className="header-lokal__trigger" id="header-lokal__trigger" onClick={handleClick}>
          <span className="border border--top"/>
          <span className="border border--middle"/>
          <span className="border border--bottom"/>
        </button>
      </div>
    )
  }
}

export default HeaderLokal