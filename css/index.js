const cheerio = require('cheerio');
const request = require('superagent');
const baseUrl = 'https://www.w3.org/TR/';

request.get(baseUrl).then((data) => {
    console.log('data', data);
});