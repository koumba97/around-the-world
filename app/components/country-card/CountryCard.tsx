import { KoumThemeColor, KoumThemeColorHex, Label } from 'koum-ui';
import { Country } from '../../types/Country';
import './country-card.scss';
import { Continent, continentColorMap } from '@/app/types/ContinentColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { VisitedButton } from '@/app/ui/visited-button/VisitedButton';

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
                <VisitedButton />
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
                        id={`population-${country.name}`}
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
                <p
                    className="country-capital"
                    style={{ color: KoumThemeColorHex.info }}
                >
                    {country.capital}
                </p>
                <div
                    className="flag"
                    style={{
                        backgroundImage: `url(${country.flags.png})`,
                    }}
                ></div>
            </div>
        </div>
    );
};
