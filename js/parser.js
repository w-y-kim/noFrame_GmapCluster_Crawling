var uri = 'https://part.shufu-job.jp/tokyo/st-J002007shinjuku_shinookubo_yoyogi_takadanobaba_harajuku_mejiro_shibuya_ikebukuro_ebisu_ootsuka_meguro_sugamo_gotanda_komagome_kanda_oosaki_tabata_toukyou_akihabara-J002021shinjuku_yoyogi_ookubo_higashinakano_sendagaya_nakano_yotsuya_shinanomachi_kouenji_asagaya_ichigaya_ochanomizu_ogikubo_iidabashi_nishiogikubo_suidoubashi_kichijouji_akihabara-J002044shinjuku_shibuya_ikebukuro_ebisu_itabashi_juujou_oosaki_akabane-J002079shinjuku_nakano_yotsuya_kouenji_asagaya_ochanomizu_ogikubo_nishiogikubo_kanda_toukyou_kichijouji-J002080shinjuku_toukyou';

$.ajax({ url: 'https://part.shufu-job.jp/tokyo/st-J002007shinjuku_shinookubo_yoyogi_takadanobaba_harajuku_mejiro_shibuya_ikebukuro_ebisu_ootsuka_meguro_sugamo_gotanda_komagome_kanda_oosaki_tabata_toukyou_akihabara-J002021shinjuku_yoyogi_ookubo_higashinakano_sendagaya_nakano_yotsuya_shinanomachi_kouenji_asagaya_ichigaya_ochanomizu_ogikubo_iidabashi_nishiogikubo_suidoubashi_kichijouji_akihabara-J002044shinjuku_shibuya_ikebukuro_ebisu_itabashi_juujou_oosaki_akabane-J002079shinjuku_nakano_yotsuya_kouenji_asagaya_ochanomizu_ogikubo_nishiogikubo_kanda_toukyou_kichijouji-J002080shinjuku_toukyou', success: function(data) {
  alert(1);
  this.document.write(data); } });

// function makeHttpObject() {
//   try {return new XMLHttpRequest();}
//   catch (error) {}
//   try {return new ActiveXObject("Msxml2.XMLHTTP");}
//   catch (error) {}
//   try {return new ActiveXObject("Microsoft.XMLHTTP");}
//   catch (error) {}
//
//   throw new Error("Could not create HTTP request object.");
// }
// var request = makeHttpObject();
// request.open("GET", "uri", true);
// request.send(null);
// alert(request.responseText);
// request.onreadystatechange = function() {
//   if (request.readyState == 4)
//     //alert(request.responseText);
//     this.document.write(request.responseText);
// };
