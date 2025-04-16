import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();


export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to update captain data
    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        isLoading,
        error,
        updateCaptain,
        setIsLoading,
        setError
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;