// React
import { memo } from 'react'

// Components
import CompanyName from '@atoms/CompanyName'
import CompanyIsin from '@atoms/CompanyIsin'
import CompanyCurrentPrice from '@atoms/CompanyCurrentPrice'
import CompanyCurrentPercent from '@atoms/CompanyCurrentPercent'

// Types
import { TickerItemType } from '@typage/mainType'

// Composant TickerItem
const TickerItem: TickerItemType = memo(({ companyName, companyIsin, companyCurrentPrice, companyPrevPrice, companyCurrency }) => {
  return (
    <div className="tickerItem">
      {/* Name */}
      <CompanyName companyName={companyName} />

      {/* ISIN */}
      <CompanyIsin companyIsin={companyIsin} />

      {/* Current price */}
      <CompanyCurrentPrice companyCurrentPrice={companyCurrentPrice} companyCurrency={companyCurrency} />

      {/* Percentage */}
      <CompanyCurrentPercent companyCurrentPrice={companyCurrentPrice} companyPrevPrice={companyPrevPrice} />
    </div>
  )
})

// Display the component name in react dev tools profiler
TickerItem.displayName = 'TickerItem'

export default TickerItem
