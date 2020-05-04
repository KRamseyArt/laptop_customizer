import React, { Component } from 'react'
import SummaryTotal from './SummaryTotal';
import SummaryItem from './SummaryItem';
import './Summary.css'

export class Summary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      return (
        <SummaryItem
          feature={feature}
          idx={idx}
          key={idx}
          selected={this.props.selected}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <SummaryTotal 
          selected={this.props.selected}
          total={this.props.total}
        />
      </section>
    )
  }
}

export default Summary
