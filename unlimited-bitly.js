'use strict'
import { Bitly } from 'https://deno.land/x/bitly/mod.ts'

let bitlys = [];

export function init(tokens) {
	bitlys.length = 0;
	for (let i = 0; i < tokens.length; i++) {
		bitlys.push({ key: tokens[i], isvalid: true });
	}
	return this;
}

export async function shorten(longUrl, option = {}) {
	let result, err;
	let bitlyObj;
	for (let i = 0; i < bitlys.length; i++) {
		try {
			if (!bitlys[i].isvalid) continue;
			bitlyObj = new Bitly(bitlys[i].key);
			result = await bitlyObj.shorten(longUrl, option);
			break;
		} catch(e) {
			err = e;
			bitlys[i].isvalid = false;
		}
	}
	if (result)	return result;
	else throw err;
}

export async function getAccountsStatus() {
	const testLongUrl = 'https://github.com/WayneChang65/unlimited-bitly';
	let bitlyObj;
	let result = {
		valid: 0,
		total: bitlys.length
	};
	for (let i = 0; i < bitlys.length; i++) {
		try {
			bitlyObj = new Bitly(bitlys[i].key, {});
            await bitlyObj.shorten(testLongUrl);
			result.valid++;
		}catch(e){
			continue;
		}
	}
	return result;
}