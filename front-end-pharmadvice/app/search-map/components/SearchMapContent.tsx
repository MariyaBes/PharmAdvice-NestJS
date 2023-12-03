'use client'

import Navbar from '@/app/component/navbar/Navbar'
import Footer from '@/app/component/footer/Footer'
import SidebarList from '@/app/search-map/components/SidebarList'
import YandexMap from '@/app/search-map/components/yandex-map/YandexMap'
import { useEffect, useState } from 'react'
import { useYandexMap } from '@/app/search-map/components/yandex-map/YandexMapContext'

const SearchMapContent = () => {
	const { apiKey } = useYandexMap();
	const [apiLoaded, setApiLoaded] = useState(false);

	const pharmacies = [
		{ id: 1, name: 'Ригла', coordinates: [44.93752, 34.09369] },
		{ id: 2, name: 'Апрель', coordinates: [44.94219, 34.09667] },
		{ id: 3, name: 'Ригла', coordinates: [44.93607, 34.08986] },
		{ id: 4, name: 'Виста', coordinates: [44.94431, 34.09338] },
		{ id: 5, name: 'Аптека', coordinates: [44.94709, 34.08355] },
		{ id: 6, name: 'Витапроф', coordinates: [44.94895, 34.09596] },
		{ id: 7, name: 'Экономная аптека № 30', coordinates: [44.94503, 34.09559] },
	];

	useEffect(() => {
		const loadScript = async () => {
			if (!window.ymaps) {
				const script = document.createElement('script');
				script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;

				script.onload = () => {
					console.log('Yandex Maps API loaded');
					setApiLoaded(true);
				};

				document.head.appendChild(script);
			} else {
				setApiLoaded(true);
			}
		};

		loadScript();
	}, [apiKey]);


	return (
		<div>
			<Navbar />

			<div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full'>
				<div className='flex flex-row'>
					<SidebarList />
					<YandexMap ymaps={window.ymaps} pharmacies={pharmacies}/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default SearchMapContent