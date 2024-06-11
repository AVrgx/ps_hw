import { createContext, useState } from 'react';

export const Context = createContext('')

export const UserContextProvider = ({ children }) => {
	const [userId, setUserId] = useState(null);
	return <Context.Provider value={{ userId, setUserId }}> {children}</Context.Provider>
};



