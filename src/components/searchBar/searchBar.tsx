import React from 'react'
import { Input } from '@chakra-ui/react'
import { MaciWhite } from '../../utils/colors'

export function SearchBar(props: any): React.JSX.Element {
    return (
        <Input 
        borderColor="#000000"
        borderRadius="5px"
        background={MaciWhite}
        placeholder={props.placeholder} 
        />
    )
}