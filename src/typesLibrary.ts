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

export type test2 = {
	name: string
}