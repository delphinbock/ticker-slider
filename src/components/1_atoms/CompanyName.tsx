// React
import { memo } from 'react'

// Types
import { CompanyNameType } from '@typage/mainType'

const CompanyName: CompanyNameType = memo(({ companyName }) => {
  return <span className="companyName">{companyName}</span>
})

// Display the component name in react dev tools profiler
CompanyName.displayName = 'CompanyName'

export default CompanyName
