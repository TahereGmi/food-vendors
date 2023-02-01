import { useEffect, useState } from "react"
import { IProduct, IProductsResult } from '../../types/products'

const CachedProducts = {} as { [key: string]: IProductsResult }

const Products = () => {
    const [products, setProducts] = useState<IProductsResult>({} as IProductsResult)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState<undefined[] >([])

    useEffect(() => {
        (async () => {
            const url = `https://dummyjson.com/products?limit=15&skip=${(currentPage - 1 ) * 15}`
            try {
                if(!CachedProducts[url]) {
                    const response = await fetch(url)
                    const result: IProductsResult = await response.json()
                    CachedProducts[url] = result
                    console.log('CachedProducts', CachedProducts)
                    setProducts(result)
                } else {
                    setProducts(CachedProducts[url]) 
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [currentPage])


    useEffect(() => {
        const { total } = products
        const totalObj: undefined[] = Array.from({length: Math.ceil(total/15)})
        setTotalPage(totalObj)
    }, [products])


    const goToPage = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {products.products?.map((product: IProduct) => {
                        return (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                        </tr>)
                    })}
                    
                </tbody>
            </table>
            <div>
                <button
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}>
                    prev
                </button>
                {totalPage.map((_, page) => {
                    return (
                        <button
                            onClick={() => goToPage(page + 1)}
                            className={`${page === currentPage ? 'active pagination' :'pagination'}`}>
                                {page + 1}
                        </button>)
                })}
                <button
                    disabled={currentPage === totalPage.length}
                    onClick={() => goToPage(currentPage + 1)}>
                    next
                </button>
            </div>
        </>
    )
}

export default Products

