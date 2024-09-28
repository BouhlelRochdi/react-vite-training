import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

export const ProductsRowList = ({ product }: { product?: any }) => {
    return (
        <Tr>
            <Td>{product.id}</Td>
            <Td>{product.title} </Td>
            <Td>{product.body} </Td>
            <Td>{product.userId} </Td>
        </Tr>
    )
}