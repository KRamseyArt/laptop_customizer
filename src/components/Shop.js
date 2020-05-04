import React, { Component } from 'react'
import FeatureForm from './FeatureForm';
import Summary from './Summary';

export class Shop extends Component {
  render() {
    return (
      <main>
        <FeatureForm
          updateFeature={this.props.updateFeature}
          features={this.props.features}
          selected={this.props.selected}
        />
        <Summary
          selected={this.props.selected}
        />
       </main>
    )
  }
}

export default Shop
