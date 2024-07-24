// React
import { FC } from "react"

interface CompanyProps {
  name: string
  isin: string
  prevPrice: number
  currentPrice: number
  percentage: number
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

// Company symbol



export {
  CompanyProps,
  CompanyType,
  CompanyNameProps,
  CompanyNameType,
  CompanyIsinProps,
  CompanyIsinType
}