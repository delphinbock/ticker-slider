// React
import { useEffect, useState } from 'react'

// Objs
import companiesObj from '@objs/companiesObj.json'

// Components
import TickerItemsCollection from '@organisms/TickerItemsCollection'

// Types
import { CompanyType, TickerSliderType } from '@typage/mainType'

// Fonction pour récupérer et traiter les données des entreprises
const fetchCompaniesObj: any = () => {
  const companiesArr = companiesObj.map((company) => ({
    name: company.name,
    isin: company.isin,
    prevPrice: company.prevPrice,
    currentPrice: company.currentPrice,
    currency: company.currency,
  }))

  return companiesArr
}

const TickerSlider: TickerSliderType = () => {
  // States
  const [companiesArr, setCompaniesArr] = useState<CompanyType>([])

  // Side effects
  useEffect(() => {
    setCompaniesArr(fetchCompaniesObj())
  }, [])

  return (
    <div className="tickerWrapper">
      <div className="tickerWrapper_tickerContent">
        <TickerItemsCollection companiesArr={companiesArr} />
      </div>
    </div>
  )
}

export default TickerSlider
