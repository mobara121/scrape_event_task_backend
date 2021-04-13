const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('https://www.visitindy.com/indianapolis-things-to-do-events', (error, response, html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        const allItems = $('.row').children();
        const items =[];
        allItems.each((index)=>{

            const event_name = $('.row').children().eq(index).find('.list-title.blue-dark').text();
            const link = `http://www.visitindy.com${$('.row').children().eq(index).find('.list-title.blue-dark').find('a').attr('href')}`;
            // const date = $('row').children().eq(index).find('.list-info').slice(1).text().replace(/Date:/, '')
            const date = $('.row').children().eq(index).find('.list-info').text().slice(5).replace(/Time:/, '');
            const location = $('.row').children().eq(index).find('.styled').first().text();
            const tel = $('.row').children().eq(index).find('.styled').slice(1).text();
            if(location.length>12 && date && link && event_name !== ''){
                items.push({event_name, link, date, location, tel});
            } 
        });
        
        fs.writeFile('output.json', JSON.stringify(items, null, 4), function(err){
            if(err){
                console.log(err);
            }else{
                console.log('Data added to a file');
            }
        })

    }
})