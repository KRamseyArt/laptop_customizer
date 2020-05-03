import React, { Component } from 'react'
import FeatureForm from './FeatureForm';
import Summary from './Summary';

export class Shop extends Component {
  render() {
    return (
      <main className="Shop">
        <FeatureForm
          features={this.props.features}
          updateFeatures={this.props.updateFeatures}
        />
        {/* <form className="main__form">
          <h2>Customize your laptop</h2>
          {this.props.features}
        </form>  */}
        <Summary
          summary={this.props.summary}
          USCurrencyFormat={this.props.USCurrencyFormat}
          total={this.props.total}
        />
        {/* <section className="main__summary">
          <h2>Your cart</h2>
          {this.props.summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {this.props.USCurrencyFormat.format(this.props.total)}
            </div>
          </div>
        </section> */}
       </main>
    )
  }
}

export default Shop
