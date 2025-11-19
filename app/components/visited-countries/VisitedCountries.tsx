import { useEffect, useState } from 'react';
import './visited-countries.scss';
import Modal from 'react-modal';
import CloseSVG from '@/app/svg/Close';
import { Country } from '@/app/types/Country';
import { getVisitedList } from '@/app/utils/VisitedCountry';
import { getCountryByCode } from '@/app/api';
import { CountryCard } from '../country-card/CountryCard';

interface Prop {
    isOpen: boolean;
    closeModal: () => void;
}

export const VisitedCountriesModal = ({ isOpen, closeModal }: Prop) => {
    const commaNumber = require('comma-number');
    const [modalIsOpen, setModalIsOpen] = useState(isOpen);
    const [visitedCountries, setVisitedCountries] = useState<Country[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setModalIsOpen(isOpen);
        if (isOpen) getVisitedCountriesList();
    }, [isOpen]);

    const getVisitedCountriesList = async () => {
        const visitedList = getVisitedList();
        const newCountries: Country[] = [];

        for (const countryCode of visitedList) {
            const resp = await getCountryByCode(countryCode);

            if (resp.success && resp.data[0]) {
                if (!newCountries.find((c) => c.cca3 === resp.data[0].cca3)) {
                    newCountries.push(resp.data[0]);
                }
            } else {
                setError(true);
            }
        }

        setVisitedCountries(newCountries);
        if (newCountries.length > 0) setError(false);
    };

    return (
        <Modal
            className="visited-countries-modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <div className="header">
                <h1>Visited countries</h1>
                <button className="close-button" onClick={closeModal}>
                    <CloseSVG width={20} height={20} viewBox="8 5 120 120" />
                </button>
            </div>
            <div className="countries-container">
                {visitedCountries.map((country, i) => {
                    return (
                        <CountryCard
                            key={`visited-country-${i}`}
                            country={country}
                            loading={false}
                        />
                    );
                })}
            </div>
        </Modal>
    );
};
