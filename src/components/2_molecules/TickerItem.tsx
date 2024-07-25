// Components
import CompanyName from '@atoms/CompanyName'
import CompanyIsin from '@atoms/CompanyIsin'
import CompanyCurrentPrice from '@atoms/CompanyCurrentPrice'
import CompanyCurrentPercent from '@atoms/CompanyCurrentPercent'

// Types
import { TickerItemType } from '@typage/mainType'

// Composant TickerItem
const TickerItem: TickerItemType = ({ companyName, companyIsin, companyCurrentPrice, companyPrevPrice, companyCurrency }) => {
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
}

export default TickerItem
