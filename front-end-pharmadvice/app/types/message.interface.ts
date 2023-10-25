import { IUser } from '@/app/types/user.interface'
import { IChat } from '@/app/types/chat.interface'

export interface IMessage {
	message_id: number;
	content: string;
	imageURL: string | null;
	createAt: Date;
	updatedAt: Date;
	chatChat_id: number | null;
	userUser_id: number | null;
	chat: IChat | null;
	user: IUser | null;
}
