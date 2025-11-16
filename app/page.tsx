'use client';

import { useState } from 'react';
import './style.scss';
import { Input } from 'koum-ui';
import { getCountryByName } from './api';
import { Country } from './types/Country';
import { CountryCard } from './components/country-card/CountryCard';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
    const [countriesByName, setCountriesByName] = useState<Country[]>([]);
    const [error, setError] = useState(false);

    const handleSearchBar = async (value: string) => {
        if (value) {
            const resp = await getCountryByName(value);
            if (resp.success) {
                setCountriesByName(resp.data);
                console.log(countriesByName);
                setError(false);
            } else {
                setError(true);
            }
        } else {
            setCountriesByName([]);
        }
    };
    return (
        <div className="project-container">
            <div className="content-wrapper">
                <h1>Around the world</h1>
                <Input
                    id="search-bar"
                    label="Search bar"
                    placeholder="Find your next destination..."
                    visibleLabel={false}
                    onChange={(val) => handleSearchBar(val as string)}
                />
                <div className="result-container">
                    {!error ? (
                        Object.entries(countriesByName).map(([name, data]) => (
                            <CountryCard key={name} country={data} />
                        ))
                    ) : (
                        <>Country not found</>
                    )}
                </div>
            </div>
        </div>
    );
}
