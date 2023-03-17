export interface CountryGroupDataType {
  'Alpha-3 code-1': string;
  'Country or Area': string;
  'Alpha-2 code': string;
  'Numeric code': string;
  'Latitude (average)': string;
  'Longitude (average)': string;
  'Group 1': string;
  'Group 2': string;
  'Group 3': string;
  LDC: boolean;
  LLDC: boolean;
  SIDS: boolean;
  'Development classification': string;
  'Income group': string;
}

export interface DataType {
  Region: string;
  'Office PBI': string;
  'Project Title': string;
  'Transparency Portal': string;
  'Country TRANSPARENCY': string;
  Budget: string;
  'Expences from BPI': string;
  'EXPENSES without minos': string;
}

export interface FormattedDataType {
  Region: string;
  'Office PBI': string;
  'Project Title': string;
  'Transparency Portal': string;
  'Country TRANSPARENCY': string[];
  Budget: number;
  'EXPENSES without minos': number;
}

export interface DataSplitByCountriesType {
  Region: string;
  'Office PBI': string;
  'Project Title': string;
  'Transparency Portal': string;
  'Country TRANSPARENCY': string;
  Budget: number;
  'EXPENSES without minos': number;
}

export interface DataGroupedByCountryType {
  country: string;
  noOfProjects: number;
  totalBudget: number;
  totalExpenseWithoutMinos: number;
}

export interface HoverDataType {
  country: string;
  continent: string;
  budget?: number;
  expenses?: number;
  noOfProjects?: number;
  xPosition: number;
  yPosition: number;
}
