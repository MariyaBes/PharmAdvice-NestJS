'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface YandexMapContextProps {
	apiKey: string;
	setApiKey: React.Dispatch<React.SetStateAction<string>>;
}

const YandexMapContext = createContext<YandexMapContextProps | undefined>(undefined);

interface YandexMapProviderProps {
	children: ReactNode;
	apiKey: string;
}

export const YandexMapProvider: React.FC<YandexMapProviderProps> = ({ children, apiKey: initialApiKey }) => {

	const [apiKey, setApiKey] = useState(initialApiKey);
	console.log(apiKey)

	return (
		<YandexMapContext.Provider value={{ apiKey, setApiKey }}>
			{children}
		</YandexMapContext.Provider>
	);
};

export const useYandexMap = (): YandexMapContextProps => {
	const context = useContext(YandexMapContext);
	if (!context) {
		throw new Error('useYandexMap must be used within a YandexMapProvider');
	}
	return context;
};