import { useEffect, useState } from 'react';
import './visited-button.scss';
import Pin from '@/app/svg/Pin';
import { Button } from 'koum-ui';
import { getVisitedList } from '@/app/utils/VisitedCountry';

interface Prop {
    visited?: boolean;
    display?: 'icon' | 'large';
    countryId: string;
}
export const VisitedButton = ({
    visited = false,
    display = 'icon',
    countryId,
}: Prop) => {
    const [isVisited, setIsVisited] = useState(visited);
    const [isHovered, setIsHovered] = useState(false);

    const getVisitedList = () => {
        return JSON.parse(localStorage.getItem('visitedCountries') || '[]');
    };

    const toggleCountry = (id: string) => {
        const list = getVisitedList();

        let newList;
        if (list.includes(id)) {
            newList = list.filter((x: string) => x !== id);
        } else {
            newList = [...list, id];
        }

        localStorage.setItem('visitedCountries', JSON.stringify(newList));
        return newList.includes(id);
    };

    useEffect(() => {
        const list = getVisitedList();
        setIsVisited(list.includes(countryId));
    }, [countryId]);

    const handleClick = () => {
        const newState = toggleCountry(countryId);
        setIsVisited(newState);
    };

    if (display === 'icon') {
        return (
            <button
                className="visited-button"
                //@ts-ignore
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    handleClick();
                }}
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
            //@ts-ignore
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                handleClick();
            }}
            shape="round"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
};
