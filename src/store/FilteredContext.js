import React from 'react'

const FilteredContext = React.createContext({
    clothersList: () => {},
    filteredClothers: () => {}
})
export default FilteredContext;