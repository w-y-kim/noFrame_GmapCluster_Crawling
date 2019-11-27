// server
const http = require('http');
const hostname = '127.0.0.1';
const port = '1337';

// read index
var fs = require('fs');
// crawing module
var Crawler = require("crawler");
var html;

// make view from node
//var popupS = require('popups');



var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            html = res.$.html();
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            //console.log(html);
            fs.writeFile("./copy.html", html, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
        }
        done();
    }
});

c.queue('https://part.shufu-job.jp/tokyo/st-J002007shinjuku_shinookubo_yoyogi_takadanobaba_harajuku_mejiro_shibuya_ikebukuro_ebisu_ootsuka_meguro_sugamo_gotanda_komagome_kanda_oosaki_tabata_toukyou_akihabara-J002021shinjuku_yoyogi_ookubo_higashinakano_sendagaya_nakano_yotsuya_shinanomachi_kouenji_asagaya_ichigaya_ochanomizu_ogikubo_iidabashi_nishiogikubo_suidoubashi_kichijouji_akihabara-J002044shinjuku_shibuya_ikebukuro_ebisu_itabashi_juujou_oosaki_akabane-J002079shinjuku_nakano_yotsuya_kouenji_asagaya_ochanomizu_ogikubo_nishiogikubo_kanda_toukyou_kichijouji-J002080shinjuku_toukyou');


http.createServer(function (req, res) {
  fs.readFile('./index.html',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data, 'utf-8');
  });

}).listen(port, hostname,
() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
