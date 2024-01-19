import {Component} from 'react'
import './index.css'

class RestoItem extends Component {
  state = {count: 0}

  decrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(pre => ({count: pre.count - 1}))
    }
  }

  increase = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }

  render() {
    const {count} = this.state
    const {each} = this.props
    const itemDetails = {
      addonCat: each.addonCat,
      dishAvailability: each.dish_Availability,
      dishType: each.dish_Type,
      dishCalories: each.dish_calories,
      dishCurrency: each.dish_currency,
      dishDescription: each.dish_description,
      dishId: each.dish_id,
      dishImage: each.dish_image,
      dishName: each.dish_name,
      dishPrice: each.dish_price,
    }
    console.log(itemDetails.dishAvailability)

    const isAwail = itemDetails.dishAvailability ? (
      <div className="div11">
        <button type="button" className="btn1" onClick={this.decrease}>
          -
        </button>
        <p>{count}</p>
        <button type="button" className="btn1" onClick={this.increase}>
          +
        </button>
      </div>
    ) : (
      <p className="not">Not available</p>
    )

    const addcart =
      itemDetails.addonCat.length === 0 ? (
        ''
      ) : (
        <p className="custm">Customizations available</p>
      )

    return (
      <li className="li2">
        <div>
          <h1>{itemDetails.dishName}</h1>
          <div className="div12">
            <p className="cur">
              {itemDetails.dishCurrency} {itemDetails.dishPrice}
            </p>
          </div>
          <p className="dis">{itemDetails.dishDescription}</p>
          {isAwail}
          {addcart}
        </div>
        <div>
          <p className="currency">{itemDetails.dishCalories} calories</p>
        </div>
        <img
          className="img1"
          src={itemDetails.dishImage}
          alt={itemDetails.dishName}
        />
      </li>
    )
  }
}

export default RestoItem
