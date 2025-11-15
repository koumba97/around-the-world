import { Country } from '../types/Country';
import './country-card.scss';

interface Prop {
    country: Country;
}
export const CountryCard = ({ country }: Prop) => {
    return (
        <div className="country-card">
            <h1>{country.name.common}</h1>
        </div>
    );
};
