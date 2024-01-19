import './index.css'

const Type = props => {
  const {each, typeId, typeIndex} = props
  const typeObject = {
    menuCategoryId: parseInt(each.menu_category_id),
    menuCategory: each.menu_category,
  }

  const add = typeIndex === typeObject.menuCategoryId ? 'typeStyle' : ''

  const typeIdChange = () => {
    typeId(typeObject.menuCategoryId)
  }

  return (
    <div>
      <li className="li1">
        <button type="button" onClick={typeIdChange} className={`btn2 ${add}`}>
          {typeObject.menuCategory}
        </button>
      </li>
      {typeIndex === typeObject.menuCategoryId && <hr />}
    </div>
  )
}

export default Type
