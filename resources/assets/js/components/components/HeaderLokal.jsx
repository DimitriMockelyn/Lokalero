import React from 'react'
import Icon from '../containers/app/icons/Icon'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class HeaderLokal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      navOpened: false
    }
  }
  
  render () {
    const { content } = this.props
    
    const nav = document.getElementsByClassName('header-lokal')[0];
    
    const handleClick = (e) =>  {
      e.preventDefault();
      
      
      if (!this.state.navOpened) {
        document.body.classList.add('mobNavOpened');
        disableBodyScroll(nav);
  
        this.setState({
          navOpened: true
        })
        
      } else {
        document.body.classList.remove('mobNavOpened');
        enableBodyScroll(nav);
  
        this.setState({
          navOpened: false
        })
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
        <button className="hamburger header-lokal__trigger" aria-expanded={this.state.navOpened} id="header-lokal__trigger" onClick={handleClick}>
          <span className="hamburger__line"/>
          <span className="hamburger__line"/>
          <span className="hamburger__line"/>
        </button>
      </div>
    )
  }
}

export default HeaderLokal