// import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ProductsRowList } from './ProductsRowList'
import { ProductContext } from '../../contexts/ProductContext'
import { useProducts } from '../../contexts/ProductHook'
import GenericTable from '../../commonUi/GenericTable'


const ProductsComponents = () => {

    const [datas, setDatas] = React.useState([])

    const productContext = useContext(ProductContext);

    if (!productContext) {
        return <div>Loading...</div>; // Return a default value when productContext is null
    }
    const [isLoading, data, error] = useProducts()
    const { products, addProduct, getProducts } = productContext || {};
    console.log('product from context: ', products)


    return (
        <GenericTable title='Products' columnNames={['id', 'title', 'body', 'userId']} data={data as any} >
            <ProductsRowList />
            <button onClick={() => addProduct({ id: 1, title: 'New Product', body: 'blablabla', userId: '18' })}>
                Add New Product
            </button>
        </GenericTable>
    )
}

export default ProductsComponents
