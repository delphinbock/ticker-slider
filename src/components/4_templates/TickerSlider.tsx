import React, { useEffect, useState } from 'react'
import './TickerSlider.scss' // Assurez-vous que le chemin du fichier CSS est correct

// Import du JSON avec require
import companiesObj from '@objs/companiesObj.json'

// Type pour chaque entreprise
interface Company {
  name: string
  symbol: string
  old: number // Assurez-vous que cette propriété correspond à ce qui est dans companiesObj.json
  current: number // Assurez-vous que cette propriété correspond à ce qui est dans companiesObj.json
  percentage: string
  currency: string // Ajoutez la propriété currency si elle est présente dans vos données JSON
}

// Fonction pour récupérer et traiter les données des entreprises
const fetchCompaniesObj = (): Company[] => {
  // Récupération des entreprises depuis le JSON
  const companies: Company[] = companiesObj.map((company) => ({
    name: company.name.toUpperCase(),
    symbol: company.symbol.toUpperCase(),
    old: company.prev, // Assurez-vous que prev correspond à l'ancien prix dans votre JSON
    current: company.current, // Assurez-vous que current correspond au prix actuel dans votre JSON
    percentage: calculatePercentage(company.prev, company.current), // Ajoutez votre fonction de calcul ici
    currency: company.currency, // Assurez-vous que currency correspond à la devise dans votre JSON
  }))

  return companies
}

// Fonction pour calculer le pourcentage
const calculatePercentage = (oldPrice: number, currentPrice: number): string => {
  const percentage = ((oldPrice - currentPrice) / currentPrice) * 100
  return percentage.toFixed(2)
}

// Composant pour afficher chaque entreprise dans le ticker
const CompaniesTicker: React.FC<{ companies: Company[] }> = ({ companies }) => {
  if (companies.length === 0) {
    return null; // Si pas d'entreprises, retourne null ou autre message d'attente
  }

  return (
    <>
      {companies.map((company, i) => (
        <div className="item" key={i}>
          <span>{company.name}</span>
          <span>{company.symbol}</span>
          <span>
            {company.current} {company.currency} {/* Assurez-vous que currency est défini */}
          </span>
          {/* Affichage du pourcentage coloré */}
          <span className={`company-percentage ${parseFloat(company.percentage) > 0 ? 'color-positive' : parseFloat(company.percentage) < 0 ? 'color-negative' : 'color-neutral'}`}>
            {parseFloat(company.percentage) > 0 ? `+${Math.abs(parseFloat(company.percentage)).toFixed(2)} %` : `${Math.abs(parseFloat(company.percentage)).toFixed(2)} %`}
          </span>
        </div>
      ))}
    </>
  );
};


// Composant principal du slider de ticker
const TickerSlider: React.FC = () => {
  // État pour les entreprises
  const [companies, setCompanies] = useState<Company[]>([])

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
