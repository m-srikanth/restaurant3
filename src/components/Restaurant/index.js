import {Component} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Type from '../Type'
import RestoItem from '../RestoItem'
import './index.css'

const Constants = {
  initiate: 'INITIATE',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Restaurant extends Component {
  state = {
    typeList: [],
    typeIndex: 11,
    typeItemsList: [],
    apiStatus: Constants.initiate,
  }

  componentDidMount() {
    this.getData()
  }

  typeId = id => {
    this.setState({typeIndex: id}, this.getData)
  }

  getData = async () => {
    this.setState({apiStatus: 'INPROGRESS'})
    const {typeIndex} = this.state
    const response = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )
    if (response.ok) {
      const data = await response.json()
      const type = data[0].table_menu_list
      const itemsList = type.filter(
        i => parseInt(i.menu_category_id) === typeIndex,
      )
      this.setState({
        typeList: type,
        typeItemsList: itemsList[0].category_dishes,
        apiStatus: 'SUCCESS',
      })
    }
  }

  loaderView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="black" height="50" width="50" />
    </div>
  )

  successView = () => {
    const {typeItemsList} = this.state
    console.log(typeItemsList)

    return (
      <ul className="ul2">
        {typeItemsList.map(i => (
          <RestoItem each={i} key={i.dish_id} />
        ))}
      </ul>
    )
  }

  finalOutput = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'INPROGRESS':
        return this.loaderView()
      case 'SUCCESS':
        return this.successView()
      default:
        return null
    }
  }

  render() {
    const {typeList, typeIndex} = this.state

    return (
      <div>
        <div className="div2">
          <h1>UNI Resto Cafe</h1>
          <div className="div3">
            <h1>My Orders</h1>
            <AiOutlineShoppingCart size="50" />
          </div>
        </div>
        <ul className="ul1">
          {typeList.map(i => (
            <Type
              typeIndex={typeIndex}
              each={i}
              typeId={this.typeId}
              key={i.menu_category_id}
            />
          ))}
        </ul>
        {this.finalOutput()}
      </div>
    )
  }
}

export default Restaurant
