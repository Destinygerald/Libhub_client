import { store } from '../App.tsx'
import React from 'react'

export type IRootState = ReturnType<typeof store.getState>


// Landing page types
export type MessageType = {
	name: string;
	email: string;
	message: string;
}

export type FeaturesCardType = {
	icon: any;
	title: string;
}

export type DisplayCardType = {
	img: string;
	title: string;
	category: string[];
}

// Login/Signup types
export type InputFieldType = {
	type: string;
	value: string;
	name: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	forgot?: boolean;
}

export type LoginType = {
	email: string;
	password: string;
}

export type SignupType = {
	name: string,
	email: string;
	password: string;
	confirm_password: string;
}

// Dashboard types

// Dashboard Home
export type HomeBookCardType = {
	key?: string;
	img: string | undefined;
	title: string;
	category: string[];	
}

export type SidebarItemProps = {
	icon: any;
	nav: string;
	name: string;
	active: boolean;
}

// Dashboard Books
export type BookCardType = {
	key?: string;
	id: string;
	img?: string | any;
	title: string;
	description: string;
	views: number;
}

export type PopupInputType = {
	type: string;
	name: string;
	value?: string;
	placeholder: string;
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
} 

export type PagePopupType = {
	setPopup: (arg: boolean) => void;
}

export type PageNavType = {
	nav?: string;
	setNav: (arg: string) => void;
}

export type BookPageNavType = {
	nav?: string;
	setNav: (arg: string) => void;
	setPopup: (arg: boolean) => void;
}

export type BookDetailsType = {
	title: string;
	category: string;
	cover_image?: string;
	description?: string;
}

export type BookDisplayMainBooksType = {
	title: string;
	img?: string;
	id: string;
}

export type BookAnswerType = {
	reply: string;
	author: string
	approval: number;
	disapproval: number;
	date: string;
}

export type BookQuestionType = {
	questionTitle: string;
	questionDescription: string;
	approval: number;
	disapproval: number;
	author: string;
	date: string;
	repliesNo: number;
	replies?: BookAnswerType[];
}


export type questionPopupType = {
	closePopup: () => void;
}

export type questionPopupInput = {
	questionTitle: string;
	questionDescription: string;
}

export type CollectionNavType = {
	setPopup: (arg: boolean) => void;
}

export type CollectionType = {
	collectionName: string;
	noOfBooks: number;
	id: string;
}

export type CollectionPopupType = {
	collection_name: string;
}

export type CollectionBookType = {
	title: string;
	key?: string
}

export type CollectionCardType = {
	id?: string;
	key?: string;
	collectionName: string;
	noOfBooks: number;
	bookImgs?: string[];
}


export type BookType = {
	title: string;
	id: string;
	img?: string | any;
	description: string;
	views: number;
}

export type DraftCardType = {
	key?: string;
	id: string;
	title: string;
	date: number;
}

export type DraftPopupType = {
	open: boolean;
	id: string;
	title: string;
	type: string;
}

export type ProfileItemType = {
	title: string;
	amount: string;
}

export type ProfileNavItemType = {
	name: string;
	handleClick: (arg: string) => void;
	itemNav: string;
	nav: string;
}