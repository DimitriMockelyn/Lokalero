import React from 'react'
import Icon from '../containers/app/icons/Icon'

class FourColumns extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    const { content } = this.props;
    
    return (
        <section className="section section--four-columns">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="title-container orange">
                    <h2 className="h1 bold upper">{content.title}</h2>
                    <Icon icon="title-right"/>
                  </div>
                </div>
              </div>
              
              <div className="row">
                {content.col.map((item, key) =>
        
                  <div className="col offset-sm-0 col-md-6 col-lg-3" key={key}>
                    <div className="col__content text-center">
                      <Icon icon={item.icon}/>
                      <h2 className="h2 bold">{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default FourColumns