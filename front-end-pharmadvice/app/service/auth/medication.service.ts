import { apiInterceptor } from '@/app/api/api.interceptor'
import { IMedication } from '@/app/types/medication.interface'

export const MEDICATION = 'medication'

export type typeData = {
	name: string;
	slug?: string;
	data_storage_: string;
	price: number;
	images: string[];
}

export type TypeDataFilters = {
	sort?: EnumMedicationSort
	searchTerm?: string
}

export enum EnumMedicationSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
}

export const MedicationService = {
	async getAll() {
		return apiInterceptor<IMedication[]>({
			url: MEDICATION,
			method: 'GET'
		})
	}
}