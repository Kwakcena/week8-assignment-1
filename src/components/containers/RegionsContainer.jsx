import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';

import { DefaultList as Regions } from '../../styles/List';
import { DefaultItems as RegionItem } from '../../styles/ListItem';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Regions>
      {regions.map((region) => (
        <RegionItem
          key={region.id}
          active={selectedRegion && region.id === selectedRegion.id}
        >
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </RegionItem>
      ))}
    </Regions>
  );
}
