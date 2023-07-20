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
  AW: 'Y' | 'N';
  WS: 'Y' | 'N';
  WQ: 'Y' | 'N';
}

export interface FormattedDataType {
  Region: string;
  'Office PBI': string;
  'Project Title': string;
  'Transparency Portal': string;
  'Country TRANSPARENCY': string[];
  Budget: number;
  'EXPENSES without minos': number;
  AW: 'Y' | 'N';
  WS: 'Y' | 'N';
  WQ: 'Y' | 'N';
  All: 'Y';
}

export interface DataSplitByCountriesType {
  Region: string;
  'Office PBI': string;
  'Project Title': string;
  'Transparency Portal': string;
  'Country TRANSPARENCY': string;
  Budget: number;
  'EXPENSES without minos': number;
  AW: 'Y' | 'N';
  WS: 'Y' | 'N';
  WQ: 'Y' | 'N';
}

export interface DataGroupedByCountryType {
  country: string;
  noOfProjects: {
    All: number;
    AW: number;
    WS: number;
    WQ: number;
  };
  totalBudget: {
    All: number;
    AW: number;
    WS: number;
    WQ: number;
  };
  totalExpenseWithoutMinos: {
    All: number;
    AW: number;
    WS: number;
    WQ: number;
  };
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

export type CategoriesDataType = 'All' | 'WS' | 'WQ' | 'AW';
