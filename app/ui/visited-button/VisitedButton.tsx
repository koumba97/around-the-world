import { useState } from 'react';
import './visited-button.scss';
import Pin from '@/app/svg/Pin';

interface Prop {
    visited?: boolean;
}
export const VisitedButton = ({ visited = false }: Prop) => {
    const [isVisited, setIsVisited] = useState(visited);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsVisited(!isVisited);
        console.log(isVisited);
    };
    return (
        <button
            className="visited-button"
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && <p>Country visited</p>}{' '}
            <Pin filled={isVisited} isHovered={isHovered} />
        </button>
    );
};
