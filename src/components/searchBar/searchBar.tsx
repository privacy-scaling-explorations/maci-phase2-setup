import React from 'react'
import { Input } from '@chakra-ui/react'
import { MaciWhite } from '../../utils/colors'
import { ISearchBarProps } from '../../utils/interfaces'

/**
 * A styled input component with a custom setter function
 * @param <ISearchBarProps> - the props for the SearchBar component (see interfaces.tsx)
 * @returns <React.JSX.Element> - the SearchBar component
 */
export function SearchBar(props: ISearchBarProps): React.JSX.Element {
    return (
        <Input
            borderColor="#000000"
            borderRadius="5px"
            marginTop="4px"
            background={MaciWhite}
            placeholder={props.placeholder}
            onChange={(e) => props.setSearch(e.target.value)}
        />
    )
}
