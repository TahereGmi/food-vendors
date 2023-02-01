export interface IProductsResult {
    limit: number,
    products: IProduct[],
    skip: number,
    total: number
}

export interface IProduct {
    title: string,
    id: number,
    price: number
}

