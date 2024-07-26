// React
import { memo } from 'react'

// Types
import { CompanyCurrentPriceType } from '@typage/mainType'

const CompanyCurrentPrice: CompanyCurrentPriceType = memo(({ companyCurrentPrice, companyCurrency }) => {
  return (
    <div className="companyCurrentPrice">
      <span>
        {companyCurrentPrice} {companyCurrency}
      </span>
    </div>
  )
})

// Display the component name in react dev tools profiler
CompanyCurrentPrice.displayName = 'CompanyCurrentPrice'

export default CompanyCurrentPrice
