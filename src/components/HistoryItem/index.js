import './index.css'

const HistoryItem = props => {
  const {itemDetail, deleteItem} = props
  const onDelete = () => {
    deleteItem(itemDetail.id)
  }

  return (
    <li className="listMain">
      <p className="time">{itemDetail.timeAccessed}</p>
      <div className="urlMainCon">
        <div className="urlCon">
          <img
            className="domainLogo"
            src={itemDetail.logoUrl}
            alt="domain logo"
          />
          <div className="titleCon">
            <p className="title">{itemDetail.title}</p>
            <p className="domainUrl">{itemDetail.domainUrl}</p>
          </div>
        </div>
        <button type="button" onClick={onDelete} className="btn">
          <img
            className="deleteImg"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
