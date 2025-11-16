import { KoumThemeColor, KoumThemeColorHex, Label } from 'koum-ui';
import { Country } from '../../types/Country';
import './country-card.scss';
import { Continent, continentColorMap } from '@/app/types/ContinentColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

interface Prop {
    country: Country;
}

export const CountryCard = ({ country }: Prop) => {
    const commaNumber = require('comma-number');
    return (
        <div className="country-card">
            <div
                className="card-image"
                style={{
                    backgroundImage: `url(/countries/${country.cca3}.jpg)`,
                }}
            >
                <div className="labels-container">
                    <Label
                        additionalClass="country-continent"
                        label={country.continents[0]}
                        size="small"
                        color={
                            continentColorMap[
                                country.continents[0].replace(
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
                    >
                        <FontAwesomeIcon
                            icon={faPerson}
                            size="1x"
                            color="#414a59"
                        />
                        {commaNumber(country.population, ' ')}
                    </Label>
                </div>
            </div>
            <div className="card-info">
                <h1 className="country-name">{country.name.common}</h1>
                <p style={{ color: KoumThemeColorHex.info }}>
                    {country.capital}
                </p>
            </div>
        </div>
    );
};
