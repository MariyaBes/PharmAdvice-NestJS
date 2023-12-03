import React, { FC, useEffect, useRef } from 'react';

interface YandexMapProps {
	ymaps: any;
	pharmacies: { id: number; name: string; coordinates: number[] }[];
}

const YandexMap: FC<YandexMapProps> = ({ ymaps, pharmacies  }) => {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapInitialized = useRef(false);

	useEffect(() => {
		if (!mapInitialized.current && ymaps && ymaps.ready && mapContainerRef.current) {
			ymaps.ready(() => {
				const map = new ymaps.Map(mapContainerRef.current, {
					center: [44.93979, 34.09134],
					zoom: 15,
				});

				pharmacies.forEach((pharmacy) => {
					const placemark = new ymaps.Placemark(pharmacy.coordinates, {
						hintContent: pharmacy.name,
						balloonContent: pharmacy.name,
					});

					map.geoObjects.add(placemark);
				});

				mapInitialized.current = true;
			});
		}
	}, [ymaps, pharmacies]);

	return <div ref={mapContainerRef} id='map' style={{ width: '100%', height: '862px' }} className='mt-[97px]'></div>;
};

export default YandexMap;