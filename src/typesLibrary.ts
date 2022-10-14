import { Token } from "typescript"

export type Book = {
	id: string,
	image: string,
	title: string,
	description: string,
	author: string,
	price: string,
	featured: boolean,
}

export interface BookInCart extends Book {
	amount: number
}

export type CheckoutInfo = {
	cart: any,
	total: any,
	address: string | null,
	token: string | null
}