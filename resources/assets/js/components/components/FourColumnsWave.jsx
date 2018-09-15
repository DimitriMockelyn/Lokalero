import React from 'react'
import Tooltip from 'rc-tooltip';
import Icon from '../containers/app/icons/Icon'

class FourColumnsWave extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    const { content } = this.props;
    
    return (
      <div>
        <section className="section section--wave">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="title-container">
                    <h2 className="h1 bold upper">{content.title}</h2>
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
                {content.col.map((item, key) =>
                  <div className="col offset-sm-0 col-md-6 col-lg-3" key={"menu-" + key}>
                    <div className="col__content">
                      <Icon icon={item.icon}/>
                      <h2 className="h2 text-center bold upper white">{item.title}</h2>
                      <p className="text-justify" dangerouslySetInnerHTML={{__html: item.text}} />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="row">
                <div className="col">
                  <p className="text-center" dangerouslySetInnerHTML={{__html: content.text}} />
                </div>
              </div>
  
              {content.buttons.length > 0 &&
      
                <div className="row">
                  <div className="col">
                    <div className="button-container align-h">
                      {content.buttons.map((button, key) => {
                        return button.tooltip && button.isDisabled ?
                            <Tooltip placement="top" trigger={['hover']} key={key} overlay={<span>Le site et la solution sont en cours de construction. Nous travaillons dur pour vous permettre de retrouver rapidement des premiers projets en ligne.</span>}>
                            <a href={button.url} className={`button button--big disabled button--bordered button--${button.color}`}>
                              <span className="button__label">{button.text}</span>
                            </a>
                            </Tooltip>
                            :
                            <a href={button.url} className={`button button--big button--bordered button--${button.color}`} key={key}>
                              <span className="button__label">{button.text}</span>
                            </a>
                        }
                      )}
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default FourColumnsWave