'use client'

import Navbar from '@/app/component/navbar/Navbar'
import Footer from '@/app/component/footer/Footer'
import SidebarList from '@/app/search-map/components/SidebarList'
import YandexMap from '@/app/search-map/components/yandex-map/YandexMap'
import { useEffect } from 'react'


const SearchMap = () => {
	const apiKey = '36371c2f-4533-4c0b-baec-3d139420e57f';

	const initMap = () => {
		// Инициализируем карту
		const map = new window.ymaps.Map('map', {
			center: [55.76, 37.64], // Координаты центра карты
			zoom: 10, // Уровень масштабирования
		});

		// Добавляем метку
		const placemark = new window.ymaps.Placemark([55.76, 37.64], {
			hintContent: 'Метка на карте',
			balloonContent: 'Это метка',
		});

		map.geoObjects.add(placemark);
	};

	useEffect(() => {
		// Загружаем API Яндекс.Карт
		const script = document.createElement('script');
		script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
		script.async = true;

		script.onload = () => {
			if (window.ymaps) {
				// API Яндекс.Карт загружено
				console.log('Yandex Maps API loaded');
			}
		};

		document.head.appendChild(script);
	}, [apiKey]);


	return (
		<div>

			<Navbar />

			<div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full'>
				<div className='flex flex-row'>
					<SidebarList />
					<YandexMap ymaps={window.ymaps} initMap={initMap}/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default SearchMap