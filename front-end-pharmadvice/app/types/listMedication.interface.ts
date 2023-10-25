import { IMedication } from '@/app/types/medication.interface'

export interface IListMedication {
	listrecipe_id: number;
	name: string;
	createAt: Date;
	updatedAt: Date;
	medication: IMedication[];
}
