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

export async function getCountryByName(
    name: string
): Promise<ApiResponse<Country[]>> {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
        );

        if (!res.ok) {
            //console.error('Country not found or API error', res.status);
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
