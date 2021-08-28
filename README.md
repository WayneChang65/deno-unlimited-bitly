# deno-unlimited-bitly
deno-unlimited-bitly 是一個將**多個**[Bitly](https://bitly.com)帳號的轉短址額度結合起來而成為**一個較大且幾乎可無限擴充額度容量**的模組。**此模組必須運行在[Deno](https://deno.land/)相容的環境中**。  

deno-unlimited-bitly is a module which can **combine many [Bitly](https://bitly.com) accounts together** to be an extensible quota usage. This module has to run in a [Deno](https://deno.land/) compatible environment.  

## 前言(Overview)
[Bitly](https://bitly.com)是很常被使用來將長網址轉成短網址的服務商，且有提供免費轉短網址服務。不過，免費帳號每個月只有1000個連結轉址的額度。如果有機會每個月使用超過1000個轉址額度，就可以使用本模組將多個帳號(包含付費與免費帳號)結合起來一併使用。  

[Bitly](https://bitly.com) is a service provider that is often used to convert long URLs into short, and also offers free service. However, the free account has only 1000 links for re-directing each month. If you need to use more than 1000 links quotas per month, you can use this module to combine multiple accounts(including paid and free accounts) as one.  

## 這個模組能做什麼事？ (What can it do ?)
* 將多個帳號的轉址額度合併使用，跟使用單一帳號一樣簡單。    
Combine multiple Bitly accounts to use as one account easy.

## 如何在您的專案使用？ (How to use it in your project ?)
* 直接於deno程式中，關鍵用**import**引用  
Use the moudle by **import** in deno's program
```javascript
import { init, shorten, getAccountsStatus } from 'https://deno.land/x/unlimited-bitly/mod.ts'
```  

* 接下來，用下面幾行程式就搞定了。值得注意的是，BITLY_KEYS陣列要放Bitly帳號的KEY，放幾個帳號都可以。(以下範例是4個帳號)  
Add programs below in your project. It should be mentioned that please put keys of Bitly accounts in BITLY_KEYS array.(example shows below by 4 Bitly accounts)
```javascript
const BITLY_KEYS = [
	Deno.env.get('TOSMM_BITLY_1_KEY'),
	Deno.env.get('TOSMM_BITLY_2_KEY'),
	Deno.env.get('TOSMM_BITLY_3_KEY'),
	Deno.env.get('TOSMM_BITLY_4_KEY')
];

init(BITLY_KEYS);

const longUrl = 'https://github.com/WayneChang65';
let shortUrl = await shorten(longUrl);
console.log(shortUrl);
```  

* shorten函式會傳回已縮完的短網址。  
The function "shorten" will return a shortened url.  

* 執行時，必須加上```--allow-net```將網路存取權限打開。  
When run the module, ```--allow-net``` has to be added in the running command to allow using the net.

## 如何跑範例程式？ (How to run the example ?)

* 從GitHub下載deno-unlimited-bitly專案程式  
Clone deno-unlimited-bitly from GitHub
```
git clone https://github.com/WayneChang65/deno-unlimited-bitly.git
```

* 將Bitly Key增加TOSMM_BITLY_1_KEY-TOSMM_BITLY_4_KEY的環境變數中。  
Add Bitly Key to env variables(TOSMM_BITLY_1_KEY~TOSMM_BITLY_4_KEY).

* 透過使用以下指令執行demo程式。(demo.js)  
Run it with command below. (demo.js)
```
deno run --allow-net --allow-env demo.js  
```  

![image](https://raw.githubusercontent.com/WayneChang65/deno-unlimited-bitly/master/img/001.png)  

## 基本函式 (Base Methods)
* init(BITLY_KEYS): 初始化物件(BITLY KEYs 陣列), initialize deno-unlimited-bitly object(BITLY KEYs Array)  
* shorten(longUrl, option): 進行取得短網址, get shortened url  
> longUrl: 欲縮成短網址的長網址。long url which wants to shorten  
> option: 可以設定custom domain以及group_guid。it can set option for custom domain and group_guid.

* getAccountsStatus(): 取得所有帳號的狀態, get all accounts status  
> return object {valid, total}:  
>> valid: 有效帳號個數, number of valid accounts  
>> total: 所有帳號個數, number of total accounts  

## 參考網站 (Reference)
* [Bitly](https://bitly.com)  

## 貢獻一己之力 (Contribution)
deno-unlimited-bitly 雖然是一個小模組，但本人還是希望這個專案能夠持續進步！若有發現臭蟲(bug)或問題，請幫忙在Issue留言告知詳細情形。  
歡迎共同開發。歡迎Fork / Pull Request，謝謝。:)  

Even though deno-unlimited-bitly is a small project, I hope it can be improving. If there is any issue, please comment and welcome to fork and send Pull Request. Thanks. :)
