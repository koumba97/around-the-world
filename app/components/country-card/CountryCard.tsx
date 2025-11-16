import { KoumThemeColor, Label } from 'koum-ui';
import { Country } from '../../types/Country';
import './country-card.scss';
import {
    Continent,
    ContinentColor,
    continentColorMap,
} from '@/app/types/ContinentColor';

interface Prop {
    country: Country;
}

export const CountryCard = ({ country }: Prop) => {
    return (
        <div className="country-card">
            <div
                className="card-image"
                style={{
                    backgroundImage: `url(/countries/${country.cca3}.jpg)`,
                }}
            ></div>
            <div className="card-info">
                <h1 className="country-name">{country.name.common}</h1>
                <Label
                    additionalClass="country-continent"
                    label={country.continents[0]}
                    size="small"
                    color={
                        continentColorMap[
                            country.continents[0].replace(' ', '') as Continent
                        ]
                    }
                ></Label>
                <p className="country-population">
                    Population: {country.population}
                </p>
            </div>
        </div>
    );
};
