import { ApiResponse } from './types/ApiResponse';
import { Country } from './types/Country';

export interface ApiError {
    success: false;
    status: number;
}

export interface ApiSuccess<T> {
    success: true;
    status: number;
    data: T;
}

export async function getAllCountries(): Promise<ApiResponse<Country[]>> {
    try {
        console.log('in');
        const res = await fetch(
            `https://restcountries.com/v3.1/all?fields=name`
        );

        if (!res.ok) {
            return {
                success: false,
                status: res.status,
            };
        }

        const data: any = await res.json();
        console.log(data);
        return {
            success: true,
            status: res.status,
            data: data,
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            success: false,
            status: 0,
        };
    }
}

export async function getCountryByName(
    query: string
): Promise<ApiResponse<Country[]>> {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`
        );

        if (!res.ok) {
            return {
                success: false,
                status: res.status,
            };
        }

        const data: any = await res.json();
        return {
            success: true,
            status: res.status,
            data: data,
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            success: false,
            status: 0,
        };
    }
}

export async function getCountryByRegion(
    region: string
): Promise<ApiResponse<Country[]>> {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/region/${encodeURIComponent(region)}`
        );

        if (!res.ok) {
            return {
                success: false,
                status: res.status,
            };
        }

        const data: any = await res.json();

        return {
            success: true,
            status: res.status,
            data: data,
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            success: false,
            status: 0,
        };
    }
}

export async function getCountryBySubRegion(
    subregion: string
): Promise<ApiResponse<Country[]>> {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/subregion/${encodeURIComponent(subregion)}`
        );

        if (!res.ok) {
            return {
                success: false,
                status: res.status,
            };
        }

        const data: any = await res.json();
        return {
            success: true,
            status: res.status,
            data: data,
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            success: false,
            status: 0,
        };
    }
}

export async function getCountryByCode(
    code: string
): Promise<ApiResponse<Country[]>> {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`
        );

        if (!res.ok) {
            return {
                success: false,
                status: res.status,
            };
        }

        const data: any = await res.json();
        return {
            success: true,
            status: res.status,
            data: data,
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            success: false,
            status: 0,
        };
    }
}
