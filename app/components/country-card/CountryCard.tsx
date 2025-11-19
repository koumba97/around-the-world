import { KoumThemeColorHex, Label } from 'koum-ui';
import { Country } from '../../types/Country';
import './country-card.scss';
import { Continent, continentColorMap } from '@/app/types/ContinentColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { VisitedButton } from '@/app/ui/visited-button/VisitedButton';
import { useState } from 'react';
import { CountryDetailsModal } from '../country-details/CountryDetailsModal';

interface LoadingState {
    loading: true;
    country?: never;
}

interface LoadedState {
    loading?: false;
    country: Country;
}

type Prop = LoadingState | LoadedState;

export const CountryCard = ({ country, loading = false }: Prop) => {
    const commaNumber = require('comma-number');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div
                className={`country-card ${loading && 'loading'}`}
                onClick={() => setModalIsOpen(!modalIsOpen)}
            >
                <div
                    className="card-image"
                    style={{
                        backgroundImage: !loading
                            ? `url(/countries/${country?.cca3}.jpg)`
                            : undefined,
                    }}
                >
                    {country && <VisitedButton countryId={country.cca3} />}
                    {!loading ? (
                        <div className="labels-container">
                            <Label
                                additionalClass="country-continent"
                                label={country?.continents?.[0] || ''}
                                size="small"
                                color={
                                    continentColorMap[
                                        country?.continents?.[0].replace(
                                            ' ',
                                            ''
                                        ) as Continent
                                    ]
                                }
                            ></Label>

                            <Label
                                size="small"
                                color="neutral"
                                additionalClass="country-population"
                                id={`population-${country?.name}`}
                            >
                                <FontAwesomeIcon
                                    icon={faPerson}
                                    size="1x"
                                    color="#414a59"
                                />
                                {commaNumber(country?.population, ' ')}
                            </Label>
                        </div>
                    ) : (
                        <div className="labels-container">
                            <Label
                                additionalClass="country-continent"
                                size="small"
                                color="neutral"
                            ></Label>
                            <Label
                                size="small"
                                color="neutral"
                                additionalClass="country-population"
                            ></Label>
                        </div>
                    )}
                </div>
                {!loading ? (
                    <div className="card-info">
                        <h1 className="country-name">{country?.name.common}</h1>
                        <p
                            className="country-capital"
                            style={{ color: KoumThemeColorHex.info }}
                        >
                            {country?.capital}
                        </p>
                        <div
                            className="flag"
                            style={{
                                backgroundImage: `url(${country?.flags?.png})`,
                            }}
                        ></div>
                    </div>
                ) : (
                    <div className="card-info">
                        <div className="country-name"> </div>
                        <div className="country-capital"></div>
                        <div className="flag"></div>
                    </div>
                )}
            </div>

            {country && (
                <CountryDetailsModal
                    country={country}
                    isOpen={modalIsOpen}
                    closeModal={() => setModalIsOpen(false)}
                />
            )}
        </>
    );
};
