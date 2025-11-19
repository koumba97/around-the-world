'use client';

import { useEffect, useState } from 'react';
import './style.scss';
import { Input, Select } from 'koum-ui';
import {
    getAllCountries,
    getCountryByName,
    getCountryByRegion,
    getCountryBySubRegion,
} from './api';
import { Country } from './types/Country';
import { CountryCard } from './components/country-card/CountryCard';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NoCountry } from './components/no-country/NoCountry';
import { NotFound } from './components/not-found/NotFound';
config.autoAddCss = false;

type Option = {
    label: string;
    value: string;
};

export default function Home() {
    const [countriesByName, setCountriesByName] = useState<Country[]>([]);
    const [region, setRegion] = useState<Option | undefined>(undefined);
    const [query, setQuery] = useState<string>('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const RegionOptions: Option[] = [
        { label: 'Africa', value: 'africa' },
        { label: 'Asia', value: 'asia' },
        { label: 'Europe', value: 'europe' },
        { label: 'North America', value: 'north america' },
        { label: 'Oceania', value: 'oceania' },
        { label: 'South America', value: 'south america' },
    ];
    useEffect(() => {
        if (query !== '') {
            setRegion(undefined);
        }
    }, [query]);
    useEffect(() => {
        if (region) {
            setQuery('');
        }
    }, [region]);
    const handleSearchBar = async (value: string) => {
        setQuery(value);
        if (value) {
            setLoading(true);
            const resp = await getCountryByName(value);
            if (resp.success) {
                setCountriesByName(resp.data);
                console.log(countriesByName);
                setError(false);
            } else {
                setError(true);
                setCountriesByName([]);
            }
            setLoading(false);
        } else {
            setCountriesByName([]);
        }
    };

    const handleRegion = async (region: Option) => {
        setRegion(region);
        if (
            region.value === 'north america' ||
            region.value === 'south america'
        ) {
            setLoading(true);
            const resp = await getCountryBySubRegion(region.value);
            if (resp.success) {
                setCountriesByName(resp.data);
                console.log(countriesByName);
                setError(false);
            } else {
                setError(true);
                setCountriesByName([]);
            }
            setLoading(false);
        } else {
            setLoading(true);
            const resp = await getCountryByRegion(region.value);
            if (resp.success) {
                setCountriesByName(resp.data);
                console.log(countriesByName);
                setError(false);
            } else {
                setError(true);
                setCountriesByName([]);
            }
            setLoading(false);
        }
    };

    return (
        <div className="project-container">
            <div className="content-wrapper">
                <h1>Around the world</h1>
                <div className="inputs-container">
                    <Input
                        additionalClass="search-bar"
                        label="Search bar"
                        size="medium"
                        placeholder="Find your next destination..."
                        width="100%"
                        value={query}
                        visibleLabel={false}
                        onChange={(val) => handleSearchBar(val as string)}
                        icon={
                            <FontAwesomeIcon
                                icon={faSearch}
                                size="1x"
                                color="#7f8898"
                            />
                        }
                    />

                    <Select
                        additionalClass="region-selector"
                        label="Region"
                        visibleLabel={false}
                        value={region}
                        icon={
                            <FontAwesomeIcon
                                icon={faEarthAmerica}
                                size="1x"
                                color="#7f8898"
                            />
                        }
                        options={RegionOptions}
                        width="max-content"
                        onChange={handleRegion}
                    />
                </div>

                {error ? (
                    <NotFound />
                ) : countriesByName.length > 0 ? (
                    <div className="result-container">
                        {!loading
                            ? Object.entries(countriesByName).map(
                                  ([name, data]) => (
                                      <CountryCard key={name} country={data} />
                                  )
                              )
                            : [...Array(9)].map((_, i) => (
                                  <CountryCard key={i} loading />
                              ))}
                    </div>
                ) : (
                    <NoCountry />
                )}
            </div>
        </div>
    );
}
