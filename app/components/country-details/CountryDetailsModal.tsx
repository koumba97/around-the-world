import './country-details-modal.scss';
import { Country } from '@/app/types/Country';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import CloseSVG from '@/app/svg/Close';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAmerica,
    faLandmarkFlag,
    faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Label } from 'koum-ui';
import { Continent, continentColorMap } from '@/app/types/ContinentColor';
import { ContryInfoObj } from '@/app/data/CountryInfo';
import Pin from '@/app/svg/Pin';
import { VisitedButton } from '@/app/ui/visited-button/VisitedButton';

interface Prop {
    country: Country;
    isOpen: boolean;
    visited?: boolean;
}

const Marker = ({
    lat,
    lng,
    text,
}: {
    lat: number;
    lng: number;
    text?: string;
}) => (
    <div
        style={{
            color: 'white',
            background: 'red',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            textAlign: 'center',
        }}
    />
);

export const CountryDetailsModal = ({
    country,
    isOpen,
    visited = false,
}: Prop) => {
    const commaNumber = require('comma-number');
    const [modalIsOpen, setModalIsOpen] = useState(isOpen);
    const [isVisited, setIsVisited] = useState(visited);
    const [visitedButtonIsHovered, setVisitedButtonIsHovered] = useState(false);

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 100,
    };
    return (
        <Modal
            className="country-details-modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
        >
            <div className="country-name-wrapper">
                <FontAwesomeIcon
                    icon={faEarthAmerica}
                    size="2x"
                    color="#61a0ff"
                />
                <h2 className="country-name">{country.name.common}</h2>
            </div>
            <button
                className="close-button"
                onClick={() => setModalIsOpen(false)}
            >
                <CloseSVG width={20} height={20} viewBox="8 5 120 120" />
            </button>
            <div
                className="country-image"
                style={{
                    backgroundImage: `url(/countries/${country?.cca3}.jpg)`,
                }}
            >
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
            </div>
            <div className="country-description-container">
                <h2 className="title">About this country {country.cca3}</h2>
                <p className="country-description">
                    {ContryInfoObj[country.cca3]?.description}
                </p>
                <VisitedButton display="large" countryId={country.cca3} />
            </div>

            <div className="country-bloc-info-wrapper">
                <div className="country-capital single-info-bloc">
                    <p className="title">Capital</p>
                    <span className="icon">
                        <FontAwesomeIcon
                            icon={faLandmarkFlag}
                            size="lg"
                            color="#535353ff"
                        />
                    </span>
                    <p className="info capital">{country.capital}</p>
                </div>
                {country?.currencies &&
                    Object.keys(country.currencies).length > 0 && (
                        <div className="country-currency single-info-bloc">
                            <p className="title">Currency</p>
                            <p className="info currency-sign">
                                {country.currencies[
                                    Object.keys(country.currencies ?? {})[0]
                                ]?.symbol ?? '-'}
                            </p>
                            <p className="info currency-name">
                                {country.currencies[
                                    Object.keys(country.currencies ?? {})[0]
                                ]?.name ?? '-'}
                            </p>
                        </div>
                    )}

                <div className="country-population single-info-bloc">
                    <p className="title">Population</p>
                    <span className="icon">
                        <FontAwesomeIcon
                            icon={faPerson}
                            size="lg"
                            color="#535353ff"
                        />
                    </span>
                    <p className="population">
                        {commaNumber(country?.population, ' ')}
                    </p>
                </div>
                <div className="country-flag single-info">
                    <div
                        className="flag"
                        style={{
                            backgroundImage: `url(${country?.flags?.png})`,
                        }}
                    ></div>
                </div>
            </div>

            <div className="country-map">
                <GoogleMapReact
                    yesIWantToUseGoogleMapApiInternals
                    bootstrapURLKeys={{
                        key: process.env
                            .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                    }}
                    defaultCenter={{
                        lat: country.latlng[0],
                        lng: country.latlng[1],
                    }}
                    defaultZoom={10}
                >
                    <Marker lat={country.latlng[0]} lng={country.latlng[1]} />
                </GoogleMapReact>
            </div>
        </Modal>
    );
};
