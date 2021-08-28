'use strict'
// $ deno run --allow-net --allow-env demo.js
import { init, shorten, getAccountsStatus } from './mod.ts'

const LONG_URL1 = 'https://github.com/WayneChang65/ptt-crawler';
const LONG_URL2 = 'https://github.com/WayneChang65/baha-crawler';
const LONG_URL3 = 'https://github.com/WayneChang65/fml-consolelog';
const LONG_URL4 = 'https://github.com/WayneChang65/unlimited-bitly';

const BITLY_KEYS = [
	Deno.env.get('TOSMM_BITLY_1_KEY'),
	Deno.env.get('TOSMM_BITLY_2_KEY'),
	Deno.env.get('TOSMM_BITLY_3_KEY'),
	Deno.env.get('TOSMM_BITLY_4_KEY')
];

init(BITLY_KEYS);

try {
    console.log(`shortenedUrl: ${await shorten(LONG_URL1)}, longUrl: ${LONG_URL1}`);
    console.log(`shortenedUrl: ${await shorten(LONG_URL2)}, longUrl: ${LONG_URL2}`);
    console.log(`shortenedUrl: ${await shorten(LONG_URL3)}, longUrl: ${LONG_URL3}`);
    console.log(`shortenedUrl: ${await shorten(LONG_URL4)}, longUrl: ${LONG_URL4}`);
    console.log(await getAccountsStatus());
} catch(e) {
    console.log(e);
}