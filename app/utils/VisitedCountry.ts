export const getVisitedList = () => {
    return JSON.parse(localStorage.getItem('visitedCountries') || '[]');
};

export const toggleCountry = (countryId: string) => {
    const list = getVisitedList();

    let newList;
    if (list.includes(countryId)) {
        newList = list.filter((id: string) => id !== countryId);
    } else {
        newList = [...list, countryId];
    }

    localStorage.setItem('visitedCountries', JSON.stringify(newList));
    return newList.includes(countryId);
};
