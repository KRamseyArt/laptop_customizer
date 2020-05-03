import React, { Component } from 'react'
import FeatureOption from './FeatureOption';

export class Feature extends Component {
  render() {
    const feature = this.props.feature.props.children

    return (
      <>
        <h4>{feature[0]}</h4>
        {feature[1].map((option,id) => {
          return <FeatureOption key={id} option={option}/>
        })}
      </>
    )
  }
}

export default Feature
