export interface IUser {
	user_id: number;
	email: string;
	avatarPath: string;
	name: string;
	phone_num: string;
	isAdmin?: boolean;
}