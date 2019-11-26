// Standard start end and middle bits
export const SIDE_BIN = '101';
export const MIDDLE_BIN = '01010';

export const BINARIES = {
	'L': [ // The L (left) type of encoding
		'0001101', '0011001', '0010011', '0111101', '0100011',
		'0110001', '0101111', '0111011', '0110111', '0001011'
	],
	'G': [ // The G type of encoding
		'0100111', '0110011', '0011011', '0100001', '0011101',
		'0111001', '0000101', '0010001', '0001001', '0010111'
	],
	'R': [ // The R (right) type of encoding
		'1110010', '1100110', '1101100', '1000010', '1011100',
		'1001110', '1010000', '1000100', '1001000', '1110100'
	],
	'O': [ // The O (odd) encoding for UPC-E
		'0001101', '0011001', '0010011', '0111101', '0100011',
		'0110001', '0101111', '0111011', '0110111', '0001011'
	],
	'E': [ // The E (even) encoding for UPC-E
		'0100111', '0110011', '0011011', '0100001', '0011101',
		'0111001', '0000101', '0010001', '0001001', '0010111'
	]
};

// Define the EAN-13 structure
export const EAN13_STRUCTURE = [
	'LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG',
	'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'
];
