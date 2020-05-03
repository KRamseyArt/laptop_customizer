import React, { Component } from 'react'
import Feature from './Feature';

export class FeatureForm extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.props.features.map((feature, id) => {
          return <Feature key={id} feature={feature}/>})}
        {/* <Feature
          feature={this.props.feature}
        /> */}
        {/* {this.props.features} */}
      </form>
    )
  }
}

export default FeatureForm
