'use client';

import { useState } from 'react';
import './style.scss';
import { Input } from 'koum-ui';
import { getCountryByName } from './api';
import { Country } from './types/Countries';

export default function Home() {
    const [countriesByName, setCountriesByName] = useState<Country[]>([]);

    const handleSearchBar = async (value: string) => {
        if (value) {
            const countries = await getCountryByName(value);
            setCountriesByName(countries);
            console.log(countriesByName, 'ok');
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
                    {Object.entries(countriesByName).map(([name, data]) => (
                        <div key={name} className="country-card">
                            <h3>Nom:{data.name.common}</h3>
                            <p>Capital: {data.capital}</p>
                            <p>
                                Population: {data.population.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
