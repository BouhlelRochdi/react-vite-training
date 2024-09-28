import { Table, TableContainer, TableCaption, Thead, Tr, Th, Tbody } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export interface genericTableTypes {
    title: string,
    columnNames: string[],
    data: any[],
    children: any
};

const GenericTable = ({ title, columnNames, children, data }: genericTableTypes) => {
const [formattedData, setFormattedData] = React.useState<any[]>([])
    useEffect(() => {
        const formattedData = data.map((obj: any) => {
            // return keys that exists only from the columnNames
            return Object.keys(obj).filter((key: string) => columnNames.includes(key)).reduce((acc: any, key: string) => {
                acc[key] = obj[key]
                return acc
            }, {})
        })
        setFormattedData(formattedData)
    }, [data])

    
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>{title}</TableCaption>
                <Thead>
                    <Tr>
                        {columnNames.map((columnName: string) => {
                            return <Th key={columnName}>{columnName}</Th>
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {formattedData.map((obj: any) =>
                        React.cloneElement(children, { product: obj, key: obj.id })
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default GenericTable
