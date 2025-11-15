'use client';

import { useState } from 'react';
import './style.scss';
import { Input } from 'koum-ui';
import { getCountryByName } from './api';

export default function Home() {
    const [countriesByName, setCountriesByName] = useState<any>({});

    const handleSearchBar = async (value: string) => {
        const countries = await getCountryByName(value);
        setCountriesByName(countries);
        console.log(countriesByName, 'ok');
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
                    {Object.entries(countriesByName).map(
                        ([name, data]) => name
                    )}
                </div>
            </div>
        </div>
    );
}
