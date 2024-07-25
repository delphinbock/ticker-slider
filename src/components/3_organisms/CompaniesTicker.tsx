// Component
import TickerItem from '@molecules/TickerItem'

// Types
import { CompaniesTickerType } from '@typage/mainType'

const CompaniesTicker: CompaniesTickerType = ({ companiesArr }) => {
  return (
    <>
      {companiesArr.map((company) => (
        <TickerItem
          key={`company_${company.isin}`}
          companyName={company.name}
          companyIsin={company.isin}
          companyCurrentPrice={company.currentPrice}
          companyPrevPrice={company.prevPrice}
          companyCurrency={company.currency}
        />
      ))}
    </>
  )
}

export default CompaniesTicker
