import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const isStyleApplied = isActive ? 'active-tab-btn' : ''

  const onUpdate = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`${isStyleApplied} tab-btn`}
        onClick={onUpdate}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
