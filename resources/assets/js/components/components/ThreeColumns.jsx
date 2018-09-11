import React from 'react'
import Icon from '../containers/app/icons/Icon'

class ThreeColumns extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    const { content } = this.props;
    
    return (
      <section className="section section--three-columns">
        <div className="wrapper">
          <div className="container">
            <div className="row align-v">
              <div className="col col-lg-7">
                <h2 className="h1 bold orange">{content.col1.title}</h2>
            
                <p className="h2 bold">{content.col1.introduction}</p>
            
                <p className="h2">{content.col1.text}</p>
              </div>
              
              {content.col2.buttons.length > 0 && <div className="col offset-sm-0 offset-md-0 col-md-7 col-lg-3">
                <div className="button-container align-v">
                  {content.col2.buttons.map((button, key) =>
                      <a href={button.url} className="button button--white" title={button.text} aria-label={button.text} target={button.target} key={key}>
                        <span className="button__label">{button.text}</span>
                      </a>
                  )}
                </div>
              </div>}
              
              {content.col2.buttons.length === 0 && <div className="col col--center offset-sm-0 col-md-5 col-lg-5">
                <Icon icon="citoyen-right"/>
              </div>}
  
              {content.col2.buttons.length > 0 && <div className="col col--center offset-sm-0 col-md-5 col-lg-2">
                <Icon icon="citoyen-right"/>
              </div>}
            </div>
            
            <div className="row">
              <div className="col">
                <div className="button-container">
                  <a href="" className="button button--big button--white" title="" aria-label="" target="">
                    <span className="button__label">Contactez-nous</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ThreeColumns