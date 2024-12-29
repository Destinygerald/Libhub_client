import { CollectionType, BookType, DisplayCardType } from '../assets/Types.ts'


const collections: CollectionType[] = [
	{
		collectionName: 'Python Books',
		noOfBooks: 8,
		id: 'py_bks_3802'
	},
	{
		collectionName: 'Java Books',
		noOfBooks: 12,
		id: 'jv_bks_3202'
	},
	{
		collectionName: 'Starting Js',
		noOfBooks: 16,
		id: 'js_bks_1902'
	},
	{
		collectionName: 'MAT 211',
		noOfBooks: 8,
		id: 'mat_bks_5027'
	},
	{
		collectionName: 'CSC Books',
		noOfBooks: 12,
		id: 'csc_bks_3202'
	},
	{
		collectionName: 'STA Books',
		noOfBooks: 8,
		id: 'st_bks_3202'
	},
	{
		collectionName: 'OOP Books, C Version',
		noOfBooks: 23,
		id: 'oop_bks_1902'
	},
	{
		collectionName: 'MAT 201',
		noOfBooks: 8,
		id: 'mat_bks_1027'
	},
	{
		collectionName: 'Starting Frontend',
		noOfBooks: 8,
		id: 'fe_bks_3802'
	},
	{
		collectionName: 'Starting Backend',
		noOfBooks: 12,
		id: 'be_bks_3202'
	},
	{
		collectionName: 'Test PQ',
		noOfBooks: 28,
		id: 'tst_pq_1902'
	},
	{
		collectionName: 'Exam PQ',
		noOfBooks: 48,
		id: 'exm_pq_5027'
	},
	{
		collectionName: 'Satoru Manga',
		noOfBooks: 24,
		id: 'str_mng_3802'
	},
	{
		collectionName: 'MCU Comics',
		noOfBooks: 12,
		id: 'mcu_bks_5902'
	},
	{
		collectionName: 'DC Comics',
		noOfBooks: 16,
		id: 'dc_cmc_6729'
	},
	{
		collectionName: 'Cyber Security',
		noOfBooks: 18,
		id: 'cyb_sec_5027'
	},
	{
		collectionName: 'Blockchain Dev',
		noOfBooks: 18,
		id: 'bck_dev_5027'
	}
]

const Books: BookType[] = [
	{
		title: 'MAT 201',
		id: 'mat_bk_8122',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 80
	},
	{
		title: 'GNS 211',
		id: 'gns_bk_0a22',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 180
	},
	{
		title: 'Java for Beginners',
		id: 'jv_bg_j1s2',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 96
	},
	{
		title: 'STA 203',
		id: 'sta_bk_72h0',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 68
	},
	{
		title: 'STA 211',
		id: 'sta_bk_8122',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 70
	},
	{
		title: 'MAT 213',
		id: 'mat_bk_0a22',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 120
	},
	{
		title: 'Flutter',
		id: 'flt_bk_j1s2',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 96
	},
	{
		title: 'C: OOP',
		id: 'c_oop_92s2',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 96
	},
	{
		title: 'MAC 221',
		id: 'mac_bk_1022',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 72
	},
	{
		title: 'PHY 231',
		id: 'phy_bk_0t67',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 180
	},
	{
		title: 'Mental HealthCare',
		id: 'mtl_hlt_c1s2',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 220
	},
	{
		title: 'How to Pass Exams',
		id: 'hw_tex_7ye2',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 96
	},
	{
		title: 'GST 210',
		id: 'gst_bk_7989',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 24
	},
	{
		title: 'Data Science',
		id: 'dt_sc_79s8',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 116
	},
	{
		title: 'Roadmap to Networking',
		id: 'rdp_ntw_hs98',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 44
	},
	{
		title: 'Typescript',
		id: 'tps_bk_7ye2',
		img: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		views: 126
	}
]

export const DisplayBooks: DisplayCardType[] = [
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	},
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	},
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	},
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	},
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	},
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	},
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	},
	{
		img: '',
		title: 'The Wishing Well',
		category: ['Folklore, Fantaty, Tradegyu']
	}
]

export function fetchBooks (id: number): Promise<BookType[]> {

	return new Promise<BookType[]>((resolve,  reject) => {

		let index = id - 1

		let value = Books.slice(index * 12, (index * 12) + 12)

		if (index < 0) reject([]);
		resolve(value)
	})
}

export function getNoOfBooksPage (): number {

	let page = Math.floor(Books.length / 12)

	if (Books.length % 12 > 0) {
		page += 1
	}

	return page
}

export function fetchPopularBooks (): Promise<BookType[]> {
	return new Promise<BookType[]>((resolve, _) => {
		let value = Books.filter(itm => itm.views > 120)
		resolve(value)
	})
}


export function getNoOfPopularBooks () {
	let value = Books.filter(itm => itm.views > 120).length

	let page = Math.floor(value / 12)

	if (value % 12 > 0) {
		page += 1
	}

	return page
} 

export function fetchCollections (id: number): Promise<CollectionType[]> {

	return new Promise<CollectionType[]>((resolve,  reject) => {

		let index = id - 1

		let value = collections.slice(index * 12, (index * 12) + 12)

		if (index < 0) reject([]);
		resolve(value)
	})
}

export function getNoOfCollectionPage (): number {

	let page = Math.floor(collections.length / 12)

	if (collections.length % 12 > 0) {
		page += 1
	}

	return page
}
