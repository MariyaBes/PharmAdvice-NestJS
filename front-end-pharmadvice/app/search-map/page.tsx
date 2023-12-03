import React from 'react';
import { YandexMapProvider } from '@/app/search-map/components/yandex-map/YandexMapContext';
import SearchMapContent from '@/app/search-map/components/SearchMapContent'
import { Metadata } from 'next'

export const metadata: Metadata = ({
	title: 'Карта | PharmAdvice',
	description: 'Поиск лекарственных препаратов по карте',
} as const);

const SearchMap = () => (
	<YandexMapProvider apiKey="36371c2f-4533-4c0b-baec-3d139420e57f" >
		<SearchMapContent />
	</YandexMapProvider>
);

export default SearchMap;
