
const translit = (str: string): string => {
	const ru =
			'а-А-б-Б-в-В-г-Г-д-Д-е-Е-ё-Ё-ж-Ж-з-З-и-И-й-Й-к-К-л-Л-м-М-н-Н-о-О-п-П-р-Р-с-С-т-Т-у-У-ф-Ф-х-Х-ц-Ц-ч-Ч-ш-Ш-щ-Щ-ъ-Ъ-ы-Ы-ь-Ь-э-Э-ю-Ю-я-Я'.split('-'),
		en =
			'a-A-b-B-c-C-d-D-e-E-f-F-g-G-h-H-i-I-j-J-k-K-l-L-m-M-n-N-o-O-p-P-q-Q-r-R-s-S-t-T-u-U-v-V-w-W-x-X-y-Y-z-Z'.split('-')

	let res = ''
	for(let i = 0; i < str.length; i++) {
		let s = str.charAt(i)
		let	n = ru.indexOf(s)
		if (n >= 0) {
			res += en[n]
		} else {
			res += s
		}
	}

	return res
}

export const generateSlug = (str: string): string => {
	let url = str.replace(/[\s]+/gi, '-')
	url = translit(url)
	url = url.replace(/[^0-9a-z_\-]+/gi, '-')
		.replace('---', '-')
		.replace('--', '-')
		.toLowerCase()
	return url
}

