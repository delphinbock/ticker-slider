// React
import { memo } from 'react'

// Component
import TickerItem from '@molecules/TickerItem'

// Types
import { CompaniesTickerType } from '@typage/mainType'

const CompaniesTicker: CompaniesTickerType = memo(({ companiesArr }) => {
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
})

// Display the component name in react dev tools profiler
CompaniesTicker.displayName = 'CompaniesTicker'

export default CompaniesTicker
