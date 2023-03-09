import styled from 'styled-components';
import { Select } from 'antd';
import { useState } from 'react';
import { CountryGroupDataType, DataGroupedByCountryType } from './Types';
import { UnivariateMap } from './UnivariateMap';

interface Props {
  data: DataGroupedByCountryType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  worldShape: any;
  countryTaxonomy: CountryGroupDataType[];
}

const El = styled.div`
  width: 100%;
  overflow: auto;
  position: relative;
  background-color: var(--black-200);
  @media (min-width: 961px) {
    height: 740px;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const SettingEl = styled.div`
  width: calc(100% - 2.5rem);
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  background-color: rgba(255, 255, 255, 0.6);
  @media (min-width: 820px) {
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: var(--shadow);
    min-width: 340px;
    width: calc(25% + 2.5rem);
    margin-top: 1.25rem;
    margin-left: 0;
    position: absolute;
    top: 2.5rem;
    left: 1.25rem;
    top: 0;
    z-index: 2;
  }
`;

export function MapArea(props: Props) {
  const { data, worldShape, countryTaxonomy } = props;
  const [selectedOption, setSelectedOption] = useState<
    'No. of Projects' | 'Budget' | 'Expenses'
  >('No. of Projects');

  const options = ['No. of Projects', 'Budget', 'Expenses'];

  return (
    <El id='graph-node'>
      <SettingEl>
        <div
          className='margin-bottom-05'
          style={{ width: '100%', minWidth: '19rem' }}
        >
          <p className='label'>Select Indicator</p>
          <Select
            className='undp-select'
            placeholder='Please select'
            value={selectedOption}
            onChange={d => {
              setSelectedOption(d);
            }}
          >
            {options.map(d => (
              <Select.Option className='undp-select-option' key={d}>
                {d}
              </Select.Option>
            ))}
          </Select>
        </div>
      </SettingEl>
      <UnivariateMap
        data={data}
        selectedOption={selectedOption}
        worldShape={worldShape}
        countryTaxonomy={countryTaxonomy}
      />
    </El>
  );
}
