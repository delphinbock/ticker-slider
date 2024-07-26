// React
import { memo } from 'react'

// Types
import { CompanyCurrentPercentType } from '@typage/mainType'

const CompanyCurrentPercent: CompanyCurrentPercentType = memo(({ companyCurrentPrice, companyPrevPrice }) => {
  // Calculate the percentage
  const companyCurrentPercent = ((companyCurrentPrice - companyPrevPrice) / companyPrevPrice) * 100

  // Determine the className based on the percentage
  let percentageClass = 'neutralPercent'

  if (companyCurrentPercent > 0) {
    percentageClass = 'positivePercent'
  } else if (companyCurrentPercent < 0) {
    percentageClass = 'negativePercent'
  }

  // Determine the sign for the percentage
  let sign = ''

  if (companyCurrentPercent > 0) {
    sign = '+'
  } else if (companyCurrentPercent < 0) {
    sign = '-'
  }

  // Format the percentage display text
  const absPercentage = Math.abs(companyCurrentPercent).toFixed(2)
  const formattedPercent = `${sign}${absPercentage} %`

  return <span className={`companyCurrentPercent companyCurrentPercent--${percentageClass}`}>{formattedPercent}</span>
})

// Display the component name in react dev tools profiler
CompanyCurrentPercent.displayName = 'CompanyCurrentPercent'

export default CompanyCurrentPercent
