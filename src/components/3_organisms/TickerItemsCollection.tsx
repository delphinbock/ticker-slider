// Components
import CompaniesTicker from '@organisms/CompaniesTicker'

// Types
import { TickerItemsCollectionType } from '@typage/mainType'

const TickerItemsCollection: TickerItemsCollectionType = ({ companiesArr }) => {
  return (
    <div className="itemsCollection">
      <CompaniesTicker companiesArr={companiesArr} />
      <CompaniesTicker companiesArr={companiesArr} />
    </div>
  )
}

export default TickerItemsCollection
