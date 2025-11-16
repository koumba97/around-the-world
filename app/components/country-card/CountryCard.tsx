import { Country } from '../../types/Country';
import './country-card.scss';

interface Prop {
    country: Country;
}
export const CountryCard = ({ country }: Prop) => {
    return (
        <div
            className="country-card"
            style={{
                backgroundImage: `url(/countries/${country.cca3}.jpg)`,
            }}
        >
            <h1>{country.name.common}</h1>
            <h1>{country.cca3}</h1>
        </div>
    );
};
