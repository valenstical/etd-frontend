export interface ResponseData {
    code: number;
    data: any;
    message: string;
    status: boolean;
    timestamp: number;
}
export interface Pagination {
    currentPage: number;
    lastPage: number;
    currentCount: number;
    totalCount: number;
}
export interface PageData {
    page: number;
    size: number;
}
