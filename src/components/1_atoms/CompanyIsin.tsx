// Types
import { CompanyIsinType } from '@typage/mainType'

const CompanyIsin: CompanyIsinType = ({ companyIsin }) => {
  return <span className="companyIsin">{companyIsin}</span>
}

// Display the component name in react dev tools profiler
CompanyIsin.displayName = 'CompanyIsin'

export default CompanyIsin
