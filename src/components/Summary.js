import React, { Component } from 'react'
import SummaryTotal from './SummaryTotal';

export class Summary extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {this.props.summary}
        <SummaryTotal 
          USCurrencyFormat={this.props.USCurrencyFormat}
          total={this.props.total}
        />
        {/* <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.USCurrencyFormat.format(this.props.total)}
          </div>
        </div> */}
      </section>
    )
  }
}

export default Summary
