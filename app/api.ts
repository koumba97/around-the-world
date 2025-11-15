export async function getCountryByName(name: string): Promise<any> {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
        );

        if (!res.ok) {
            console.error('Country not found or API error', res.status);
            return null;
        }

        const data: any = await res.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}
