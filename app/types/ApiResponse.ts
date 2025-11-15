export interface ApiError {
    success: false;
    status: number;
}

export interface ApiSuccess<T> {
    success: true;
    status: number;
    data: T;
}

export type ApiResponse<T> = ApiError | ApiSuccess<T>;
