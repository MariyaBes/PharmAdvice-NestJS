import { IPharmacy } from '@/app/types/pharmacy.interface'

export interface IMedication {
	medication_id_: number;
	name: string;
	slug: string;
	data_storage_: string;
	composition: string;
	application_: string;
	provider: string;
	price: number;
	images: string[];
	userUser_id?: number | null;
	listMedicationListrecipe_id?: number | null;
	pharmacy: IPharmacy[];
}
