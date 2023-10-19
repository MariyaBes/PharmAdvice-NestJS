import * as dotenv from 'dotenv';
import { Medication, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

dotenv.config();

const prisma = new PrismaClient();

const createMedication = async (quantity: number) => {
	const medications: Medication[] = []

	for (let i = 0; i < quantity; i++){
		const medicationName = faker.commerce.productName();
		const price = faker.commerce.price();

		
	}
}