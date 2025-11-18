import './not-found.scss';

interface Prop {}

export const NotFound = ({}: Prop) => {
    return (
        <div className="not-found">
            <h2>Country not found</h2>
        </div>
    );
};
