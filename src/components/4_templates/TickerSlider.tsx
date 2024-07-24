import React, { useEffect, useState } from 'react'
import './TickerSlider.scss' // Assurez-vous que le chemin du fichier CSS est correct

// Import du JSON avec require
import companiesObj from '@objs/companiesObj.json'

// Components
import CompanyName from '@atoms/CompanyName'
import CompanyIsin from '@atoms/CompanyIsin'

// Types
import { CompanyType } from '@typage/mainType'

// Fonction pour récupérer et traiter les données des entreprises
const fetchCompaniesObj = (): CompanyType => {
  const companies: CompanyType = companiesObj.map((company) => ({
    name: company.name,
    isin: company.isin,
    prevPrice: company.prevPrice,
    currentPrice: company.currentPrice,
    percentage: calculatePercentage(company.prevPrice, company.currentPrice),
    currency: company.currency,
  }))

  return companies
}

// Fonction pour calculer le pourcentage
const calculatePercentage = (oldPrice: number, currentPrice: number): number => {
  return ((oldPrice - currentPrice) / currentPrice) * 100
}

// Composant pour afficher chaque entreprise dans le ticker
const CompaniesTicker: React.FC<{ companies: CompanyType }> = ({ companies }) => {
  if (companies.length === 0) {
    return null
  }

  return (
    <>
      {companies.map((company, i) => (
        <div className="item" key={i}>
          <CompanyName companyName={company.name} />
          <CompanyIsin companyIsin={company.isin} />
          <span>
            {company.currentPrice} {company.currency} {/* Assurez-vous que currency est défini */}
          </span>
          {/* Affichage du pourcentage coloré */}
          <span className={`company-percentage ${company.percentage > 0 ? 'color-positive' : company.percentage < 0 ? 'color-negative' : 'color-neutral'}`}>
            {company.percentage > 0 ? `+${Math.abs(company.percentage).toFixed(2)} %` : `${Math.abs(company.percentage).toFixed(2)} %`}
          </span>
        </div>
      ))}
    </>
  )
}

// Composant principal du slider de ticker
const TickerSlider: React.FC = () => {
  // État pour les entreprises
  const [companies, setCompanies] = useState<CompanyType>([])

  // Effet secondaire pour charger les données des entreprises au montage
  useEffect(() => {
    setCompanies(fetchCompaniesObj())
  }, [])

  return (
    <div className="ticker-wrap">
      <div className="ticker-content">
        <div className="item-collection-1">
          <CompaniesTicker companies={companies} />
        </div>
        <div className="item-collection-2">
          <CompaniesTicker companies={companies} />
        </div>
      </div>
    </div>
  )
}

export default TickerSlider
