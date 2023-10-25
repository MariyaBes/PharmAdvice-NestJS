import { IPharmacist } from '@/app/types/pharmacist.interface'
import { IMessage } from '@/app/types/message.interface'

export interface IChat {
	chat_id: number;
	text: string;
	status: string;
	userUser_id: number | null;
	createAt: Date;
	updateAt: Date;
	messages: IMessage[];
	pharmacist: IPharmacist[];
}
