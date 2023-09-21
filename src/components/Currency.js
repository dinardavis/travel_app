import React from "react";
import { TbSwitch2 } from 'react-icons/tb'

export default function Currency(props) {

  const [currencyData, setCurrenctyData] = React.useState(null)
  const [baseCurrency, setBaseCurrency] = React.useState(0)
  const [secondaryCurrency, setSecondaryCurrency] = React.useState(148.286)

  console.log(props.countryCode)

  function handleChange(event) {
    const value = event.target.value
    setBaseCurrency(value)
  }

  function switchCurrency() {

  }

  return (
    <>
        <p className="loading">Loading...</p>
        <section className="currency-container light-mode" style={{ display: props.showCurrencyWidget ? '': 'none'}}>
          <div className="widget-close-btn" onClick={props.toggleCurrencyWidget}>X</div>
          <div className="currency-content">
            <form className="currency-form">
              <p className='currency-base-rate'>Base Rate: 1 USD = 148.2858 JPY </p>
              <p className='currency-error'>Current rates are unavailable</p>
              <div className="country-currency-container">
                <div className="country-currency-content">
                  <div className="currency-flag">
                    <img src="https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg" alt="" />
                  </div>
                  <p className="currency-name">US Dollar<br/><span>Click flag to change</span></p>
                </div>
                <input
                  type="number"
                  placeholder={0}                className="search-input"
                  value={baseCurrency}
                  onChange={handleChange}
                />
              </div>
               
              <button
                className="currency-switch-btn"
                onClick={switchCurrency}
              >
                <TbSwitch2 />
              </button>

              <div className="country-currency-container">
                <div className="country-currency-content">
                  <div className="currency-flag">
                    <img src="https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg" alt="" />
                  </div>
                  <p className="currency-name">Japanese Yen<br/><span>Click flag to change</span></p>
                </div>
                <input
                  type="number"
                  placeholder={0}
                  className="search-input"
                  value={secondaryCurrency}
                  onChange={handleChange}
                />
              </div>        
            </form>
          </div>
        </section>
    </>
  )
}