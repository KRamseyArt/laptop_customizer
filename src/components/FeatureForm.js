import React, { Component } from 'react'
import Feature from './Feature';
import './FeatureForm.css';

export class FeatureForm extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return (
        <Feature
          feature={feature}
          features={this.props.features}
          key={idx}
          idx={idx}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      )
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default FeatureForm
