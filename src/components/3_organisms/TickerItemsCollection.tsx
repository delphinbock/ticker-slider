// React
import { memo } from 'react'

// Components
import CompaniesTicker from '@organisms/CompaniesTicker'

// Types
import { TickerItemsCollectionType } from '@typage/mainType'

const TickerItemsCollection: TickerItemsCollectionType = memo(({ companiesArr }) => {
  return (
    <div className="itemsCollection">
      <CompaniesTicker companiesArr={companiesArr} />
      <CompaniesTicker companiesArr={companiesArr} />
      <CompaniesTicker companiesArr={companiesArr} />
    </div>
  )
})

// Display the component name in react dev tools profiler
TickerItemsCollection.displayName = 'TickerItemsCollection'

export default TickerItemsCollection
