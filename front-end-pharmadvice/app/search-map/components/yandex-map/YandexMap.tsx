import React, { FC, useEffect, useRef } from 'react';

interface YandexMapProps {
	ymaps: any;
	initMap: () => void;
}

const YandexMap: FC<YandexMapProps> = ({ ymaps, initMap }) => {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapInitialized = useRef(false);

	useEffect(() => {
		// Проверяем, была ли карта уже инициализирована
		if (!mapInitialized.current && ymaps && ymaps.ready && mapContainerRef.current) {
			ymaps.ready(() => {
				// Проверяем, была ли карта уже инициализирована еще раз (другим компонентом, например)
				if (!mapInitialized.current) {
					// Если нет, инициализируем карту и устанавливаем флаг
					initMap();
					mapInitialized.current = true;
				}
			});
		}
	}, [ymaps, initMap]);

	return <div ref={mapContainerRef} id='map' style={{ width: '100%', height: '862px' }} className='mt-[97px]'></div>;
};

export default YandexMap;