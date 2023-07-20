import { queue } from 'd3-queue';
import { csv, json } from 'd3-request';
import { useEffect, useState } from 'react';
import uniqBy from 'lodash.uniqby';
import sumBy from 'lodash.sumby';
import { format } from 'd3-format';
import { Select } from 'antd';
import {
  CountryGroupDataType,
  DataType,
  FormattedDataType,
  DataGroupedByCountryType,
  DataSplitByCountriesType,
  CategoriesDataType,
} from './Types';
import { MapArea } from './MapArea';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [worldShape, setWorldShape] = useState<any>(undefined);
  const [rawData, setRawData] = useState<undefined | FormattedDataType[]>(
    undefined,
  );
  const [countryTaxonomy, setCountryTaxonomy] = useState<
    undefined | CountryGroupDataType[]
  >(undefined);
  const [dataGroupedByCountry, setDataGroupedByCountry] = useState<
    undefined | DataGroupedByCountryType[]
  >(undefined);
  const [filter, setFilter] = useState<CategoriesDataType>('All');
  useEffect(() => {
    queue()
      .defer(
        json,
        'https://raw.githubusercontent.com/UNDP-Data/dv-world-map-geojson-data/main/worldMap.json',
      )
      .defer(
        csv,
        'https://raw.githubusercontent.com/UNDP-Data/dv-water-project-data/update-data/water-related-projects.csv',
      )
      .defer(
        json,
        'https://raw.githubusercontent.com/UNDP-Data/country-taxonomy-from-azure/main/country_territory_groups.json',
      )
      .await(
        (
          err: unknown,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          worldShapeData: any,
          data: DataType[],
          countryTaxonomyData: CountryGroupDataType[],
        ) => {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          if (err) throw err;
          setWorldShape(worldShapeData);
          const dataFormatted: FormattedDataType[] = data.map(d => ({
            ...d,
            Budget: d.Budget ? +d.Budget : 0,
            'EXPENSES without minos': +d['EXPENSES without minos'],
            'Country TRANSPARENCY': d['Country TRANSPARENCY'].split('; '),
            All: 'Y',
          }));
          const dataSplitByCountries: DataSplitByCountriesType[] = [];
          dataFormatted.forEach(d => {
            d['Country TRANSPARENCY'].forEach(el => {
              dataSplitByCountries.push({
                ...d,
                'Country TRANSPARENCY': el,
                Budget: d.Budget / d['Country TRANSPARENCY'].length,
                'EXPENSES without minos':
                  d['EXPENSES without minos'] /
                  d['Country TRANSPARENCY'].length,
              });
            });
          });
          const countryList = uniqBy(
            dataSplitByCountries,
            d => d['Country TRANSPARENCY'],
          ).map(d => d['Country TRANSPARENCY']);
          const groupedByCountry = countryList.map(d => {
            const country = d;
            const dataFilteredByCountry = dataSplitByCountries.filter(
              el => el['Country TRANSPARENCY'] === d,
            );
            const noOfProjects = dataFilteredByCountry.length;
            const noOfProjectsAWOnly = dataFilteredByCountry.filter(
              el => el.AW === 'Y',
            ).length;
            const noOfProjectsWQOnly = dataFilteredByCountry.filter(
              el => el.WQ === 'Y',
            ).length;
            const noOfProjectsWSOnly = dataFilteredByCountry.filter(
              el => el.WS === 'Y',
            ).length;
            const totalBudget = sumBy(dataFilteredByCountry, el => el.Budget);
            const totalExpenseWithoutMinos = sumBy(
              dataFilteredByCountry,
              el => el['EXPENSES without minos'],
            );
            const totalBudgetAWOnly = sumBy(
              dataFilteredByCountry.filter(el => el.AW === 'Y'),
              el => el.Budget,
            );
            const totalExpenseWithoutMinosAWOnly = sumBy(
              dataFilteredByCountry.filter(el => el.AW === 'Y'),
              el => el['EXPENSES without minos'],
            );
            const totalBudgetWQOnly = sumBy(
              dataFilteredByCountry.filter(el => el.WQ === 'Y'),
              el => el.Budget,
            );
            const totalExpenseWithoutMinosWQOnly = sumBy(
              dataFilteredByCountry.filter(el => el.WQ === 'Y'),
              el => el['EXPENSES without minos'],
            );
            const totalBudgetWSOnly = sumBy(
              dataFilteredByCountry.filter(el => el.WS === 'Y'),
              el => el.Budget,
            );
            const totalExpenseWithoutMinosWSOnly = sumBy(
              dataFilteredByCountry.filter(el => el.WS === 'Y'),
              el => el['EXPENSES without minos'],
            );
            return {
              country,
              noOfProjects: {
                All: noOfProjects,
                AW: noOfProjectsAWOnly,
                WS: noOfProjectsWSOnly,
                WQ: noOfProjectsWQOnly,
              },
              totalBudget: {
                All: totalBudget,
                AW: totalBudgetAWOnly,
                WS: totalBudgetWSOnly,
                WQ: totalBudgetWQOnly,
              },
              totalExpenseWithoutMinos: {
                All: totalExpenseWithoutMinos,
                AW: totalExpenseWithoutMinosAWOnly,
                WS: totalExpenseWithoutMinosWSOnly,
                WQ: totalExpenseWithoutMinosWQOnly,
              },
            };
          });
          setRawData(dataFormatted);
          setCountryTaxonomy(countryTaxonomyData);
          setDataGroupedByCountry(
            groupedByCountry.filter(
              d =>
                countryTaxonomyData.findIndex(
                  el => el['Alpha-3 code-1'] === d.country,
                ) !== -1,
            ),
          );
        },
      );
  }, []);
  const options = [
    {
      key: 'All',
      value: 'All Categories',
    },
    {
      key: 'AW',
      value: 'Access to Water',
    },
    {
      key: 'WS',
      value: 'Water Security',
    },
    {
      key: 'WQ',
      value: 'Water Quality',
    },
  ];
  return (
    <div className='undp-container'>
      <p className='indp-typography label'>Filter by category</p>
      <Select
        className='undp-select'
        placeholder='Please select'
        value={filter}
        onChange={d => {
          setFilter(d);
        }}
      >
        {options.map(d => (
          <Select.Option className='undp-select-option' key={d.key}>
            {d.value}
          </Select.Option>
        ))}
      </Select>
      {worldShape && rawData && dataGroupedByCountry && countryTaxonomy ? (
        <div className='margin-top-05'>
          <div className='stat-card-container margin-bottom-05'>
            <div className='stat-card no-hover' style={{ width: '33.33%' }}>
              <h3>{rawData.filter(d => d[filter] === 'Y').length}</h3>
              <p>No. of Projects</p>
            </div>
            <div className='stat-card no-hover' style={{ width: '33.33%' }}>
              <h3>
                {
                  dataGroupedByCountry.filter(d => d.noOfProjects[filter] > 0)
                    .length
                }
              </h3>
              <p>No. of countries with water related projects</p>
            </div>
            <div className='stat-card no-hover' style={{ width: '33.33%' }}>
              <h3>
                {format('.3s')(
                  sumBy(
                    rawData.filter(d => d[filter] === 'Y'),
                    el => el.Budget,
                  ),
                ).replace('G', 'B')}
              </h3>
              <h4>US $</h4>
              <p>Total Budget</p>
            </div>
          </div>
          <MapArea
            data={dataGroupedByCountry}
            countryTaxonomy={countryTaxonomy}
            worldShape={worldShape}
            filter={filter}
          />
        </div>
      ) : (
        <div className='undp-loader-container undp-container'>
          <div className='undp-loader' />
        </div>
      )}
    </div>
  );
}

export default App;
