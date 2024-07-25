// Types
import { CompanyCurrentPriceType } from '@typage/mainType'

const CompanyCurrentPrice: CompanyCurrentPriceType = ({ companyCurrentPrice, companyCurrency }) => {
  return (
    <div className="companyCurrentPrice">
      <span>{companyCurrentPrice}</span>
      <span>{companyCurrency}</span>
    </div>
  )
}

// Display the component name in react dev tools profiler
CompanyCurrentPrice.displayName = 'CompanyCurrentPrice'

export default CompanyCurrentPrice
