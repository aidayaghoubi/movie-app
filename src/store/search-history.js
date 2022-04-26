import React, { Children, useState } from "react";

export const SearchHistory = React.createContext([])



const SearchPriveder = ({ children }) => {

    const [state , setState]=useState([])

    const addToState = (props) => {
        setState(prev => prev.find(el => el === props) ? [...prev] : [...prev , props])
      
    }   
   

    return <SearchHistory.Provider
                value={{state ,addToState}}
    >
        {children}
    </SearchHistory.Provider>
}

export default SearchPriveder