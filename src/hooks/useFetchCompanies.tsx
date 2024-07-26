// React
import { useEffect, useState } from 'react'

// Objs
import companiesObj from '@objs/companiesObj.json'

// Types
import { CompanyType, CompaniesMapType, UseFetchCompaniesType } from '@typage/mainType'

// Companies mapping
const companiesArrObj: CompaniesMapType = () => {
  const companiesArr = companiesObj.map((company) => ({
    name: company.name,
    isin: company.isin,
    prevPrice: company.prevPrice,
    currentPrice: company.currentPrice,
    currency: company.currency,
  }))

  return companiesArr
}

const useFetchCompanies: UseFetchCompaniesType = () => {
  const [companiesArr, setCompaniesArr] = useState<CompanyType>([])

  useEffect(() => {
    const companies = companiesArrObj()
    setCompaniesArr(companies)
  }, [])

  return companiesArr
}

export default useFetchCompanies
