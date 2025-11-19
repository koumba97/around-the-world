import { useState } from 'react';
import './visited-button.scss';
import Pin from '@/app/svg/Pin';
import { Button } from 'koum-ui';

interface Prop {
    visited?: boolean;
    display?: 'icon' | 'large';
}
export const VisitedButton = ({ visited = false, display = 'icon' }: Prop) => {
    const [isVisited, setIsVisited] = useState(visited);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsVisited(!isVisited);
        console.log(isVisited);
    };

    if (display === 'icon') {
        return (
            <button
                className="visited-button"
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered && <p>Country visited</p>}
                <Pin
                    filled={isVisited}
                    isHovered={isHovered}
                    color={isHovered ? 'white' : 'black'}
                />
            </button>
        );
    }

    return (
        <Button
            label="Country visited"
            additionalClass="visited-button large"
            iconPosition="right"
            icon={
                <Pin filled={isVisited} color={'white'} isHovered={isHovered} />
            }
            onClick={handleClick}
            shape="round"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
};
