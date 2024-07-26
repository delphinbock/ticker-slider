// React
import { FC } from "react"

// Company
type CompanyProps = {
  name: string
  isin: string
  prevPrice: number
  currentPrice: number
  currency: string
}

type CompanyType = CompanyProps[]

// Company name
type CompanyNameProps = {
  companyName: string
}

type CompanyNameType = FC<CompanyNameProps>

// Company ISIN
type CompanyIsinProps = {
  companyIsin: string
}

type CompanyIsinType = FC<CompanyIsinProps>

// Current price
type CompanyCurrentPriceProps = {
  companyCurrentPrice: number
  companyCurrency: string
}

type CompanyCurrentPriceType = FC<CompanyCurrentPriceProps>

// Current percent
type CompanyCurrentPercentProps = {
  companyCurrentPrice: number
  companyPrevPrice: number
}

type CompanyCurrentPercentType = FC<CompanyCurrentPercentProps>

// Ticker item
type TickerItemProps = {
  companyName: string
  companyIsin: string
  companyCurrentPrice: number
  companyPrevPrice: number
  companyCurrency: string
}

type TickerItemType = FC<TickerItemProps>

// Companies ticker
type CompaniesTickerProps = {
  companiesArr: CompanyType
}

type CompaniesTickerType = FC<CompaniesTickerProps>

// Ticker items collection
type TickerItemsCollectionProps = {
  companiesArr: CompanyType
}

type TickerItemsCollectionType = FC<TickerItemsCollectionProps>

// Ticker slider
type TickerSliderProps = {
  companiesArr: CompanyType
}

type TickerSliderType = FC

// Companies mapping
type CompaniesMapType = () => CompanyType;

// Hook useFetchCompanies
type UseFetchCompaniesType = () => CompanyType

export {
  CompanyProps,
  CompanyType,
  CompanyNameProps,
  CompanyNameType,
  CompanyIsinProps,
  CompanyIsinType,
  CompanyCurrentPriceProps,
  CompanyCurrentPriceType,
  CompanyCurrentPercentProps,
  CompanyCurrentPercentType,
  TickerItemProps,
  TickerItemType,
  CompaniesTickerProps,
  CompaniesTickerType,
  TickerItemsCollectionProps,
  TickerItemsCollectionType,
  TickerSliderProps,
  TickerSliderType,
  UseFetchCompaniesType,
  CompaniesMapType
}