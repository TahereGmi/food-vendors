export interface IVendors {
    result: IVendorResult[],
    loading: boolean,
    loaded: boolean,
    error: unknown | null
}

export interface IVendorResult {
    type: string,
    data: IVendor
}

export interface IVendor {
    backgroundImage: string,
    cuisinesArray: ICuisine[],
    description: string,
    logo: string,
    deliveryFee: number,
    rate: number,
    title: string,
    isZFExpress: boolean
}

export interface ICuisine {
    id: number,
    title: string
}

export interface IQueryParams {
    page: number, 
    page_size: number, 
    lat: number, 
    long: number
}