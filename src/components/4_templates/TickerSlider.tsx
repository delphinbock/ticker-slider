// React
import { lazy, memo, Suspense } from 'react'

// Hooks
import useFetchCompanies from '@hooks/useFetchCompanies'

// Components
const TickerItemsCollection = lazy(() => import('@organisms/TickerItemsCollection'))

// Types
import { TickerSliderType } from '@typage/mainType'

const TickerSlider: TickerSliderType = memo(() => {
  // Fetch all companies
  const companiesArr = useFetchCompanies()

  return (
    <div className="tickerWrapper">
      <div className="tickerWrapper_tickerContent">
        <Suspense fallback={<div>Loading...</div>}>
          <TickerItemsCollection companiesArr={companiesArr} />
        </Suspense>
      </div>
    </div>
  )
})

// Display the component name in react dev tools profiler
TickerSlider.displayName = 'TickerSlider'

export default TickerSlider
