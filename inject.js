(function() {
 var check_url = location.href;
 var url_type = check_url.match(/friends/g);
 var check_excel = check_url.match(/spreadsheets/g);
 var cancel_request = check_url.match(/friends\/center\/requests/g);
 var remove_suggest = check_url.match(/friends\/center\/suggestions/g);
 var get_html = document.documentElement.outerHTML;
 var check_version = get_html.match(/ios:url/g);
 var search = check_url.match(/com\/search\//g);
 if (cancel_request == "friends/center/requests") {
 for(var inputs=document.getElementsByClassName("_54k8 _52jg _56bs _26vk _2b4n _8yzq _3cqr _8yo0 _56bt"),i=inputs.length-1;i>=inputs.length-20;i--)inputs[i].click(),setTimeout(function(){location.reload()},2700);
 }
 else if (remove_suggest == "friends\/center\/suggestions") {
 var inputs = document.getElementsByClassName('_54k8 _56bs _26vk _56b_ _54k7 _8yzn _8yo0 _56bt _52jg'); for(var i=0; i<10;i++) { inputs[i].click();setTimeout(function() { location.reload(); }, 2000);}
 }
 else if (url_type == "friends") {
 if (check_version == "ios:url") {
 for(var html=document.documentElement.outerHTML,c=html.match(/(?<=<div class="fsl fwb fcb"><a href=").*?(?=<\/a><\/div>)/g),account=html.match(/(?<=<span class="_1vp5">).*?(?=<\/span>)/g),g=prompt("请输入名字",""),date=new Date,nowDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate(),i=0;i<c.length;i++){var url=c[i].match(/https:\/\/www\.facebook.*?(?=.fref|&amp)/g),k=c[i].match(/(?<=data-hovercard-prefer-more-content.*?>).+/g);document.write("<table><tbody><tr><td>"+nowDate+"</td><td>"+g+"</td><td>"+account+"</td><td></td><td>"+[i]+"</td><td>"+k+"</td><td></td><td></td><td>"+url+"</td></tr></tbody></table>")}var d=document.documentElement.outerHTML,e=d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g,"");document.open(),document.clear(),document.close();for(i=0;i<e.length;i++)document.write(e[i]);
 }
 else {
 for(var a=document.documentElement.outerHTML,c=a.match(/(?<=gpro0wi8" href=").*?(?=" role="link").*?(?=<\/span>)/g),f=a.match(/(?<=\<a aria-current="page" aria-label=").*?(?=" class="oajrlxb2 oo1teu6h.*?" href="\/me)|(?<=<span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g),g=prompt("请输入名字",""),date=new Date,nowDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate(),i=0;i<c.length;i++){var friends=c[i].match(/http.+(?=" role="link")/g),k=c[i].match(/(?<=dir="auto">).+/g);!function(t){document.write("<table><tbody><tr><td>"+nowDate+"</td><td>"+g+"</td><td>"+f[0]+"</td><td></td><td>"+t+"</td><td>"+k+"</td><td></td><td></td><td>"+friends+"</td></tr></tbody></table>")}(i)}var d=document.documentElement.outerHTML,e=d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g,"");document.open(),document.clear(),document.close();for(i=0;i<e.length;i++)document.write(e[i]);
 }
 }
 else if (check_excel == "spreadsheets") {
 var person=prompt("请输入名字和链接",""),url=person.match(/https:\/\/[A-Za-z0-9&\/?=.]+[A-Za-z0-9\/]/g),name=person.replace(/https:\/\/[A-Za-z0-9&\/?=.]+[A-Za-z0-9\/]/g,"\n"),nameb=name.match(/.+/g);document.open(),document.clear(),document.close();for(var k=0,j=0;url.length,j<nameb.length;k++,j++)document.write('<a href="'+url[k]+'">'+nameb[j]+"</a><br>");
 }
 else if (search == "com/search/") {
  var search_keyword = prompt("请输入关键词","");
  var search_id = check_url.match(/(?<=filters=).+/g);
 window.location.href="https://www.facebook.com/search/groups?q="+search_keyword+"&filters="+search_id;
 }
 else {
 if (check_version == "ios:url") {
 var a=document.documentElement.outerHTML,b=a.match(/<div class="_5i_p" id="u_.*?_.*?">.*?"><\/span><\/div><\/div>/g);document.write(b[0]);var c=document.documentElement.outerHTML,v=c.match(/(?<=<a class="_5i_s _8o _8r lfloat _ohe" title=").*?\?id=.*?(?=&amp;extragetparams)/g);document.open(),document.clear(),document.close();for(var f=prompt("请输入点赞类型",""),k=0;k<v.length;k++){var userid=v[k].match(/(?<=user\.php\?id=)[0-9].+/g),username=v[k].match(/.*?(?=")/g)[0],userurl=v[k].match(/http.+(?=(\?|&amp;)fref)/g);document.write('<table><tbody><tr><td>=IMAGE("http://graph.facebook.com/'+userid+'/picture?width=1080")</td><td>'+f+'</td><td><a href="'+userurl+'">'+username+"</a></td><td>"+userurl+"</td></tr></tbody></table>")}
 }
 else {
var a=document.documentElement.outerHTML;var b=a.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g);for(var i=0;i<b.length;i++){document.write(b[i])}var c=document.documentElement.outerHTML;var v=c.match(/(?<=xlink:href=").*?(?=")/g);var e=c.match(/(?<=class=""><a aria-label=").*?(?=")/g);var d=c.match(/(?<=lrazzd5p" href=").*?(?=.__cf|.amp)/g);document.open();document.clear();document.close();var f=prompt("请输入点赞类型","");for(var k=0,j=0,h=0;k<d.length,j<e.length,h<v.length;k++,j++,h++){document.write('<table><tbody><tr><td>=IMAGE("'+v[h]+'")</td><td>'+f+'</td><td><a href="'+d[k]+'">'+e[j]+"</a></td><td>"+d[k]+"</td></tr></tbody></table>")}var g=document.documentElement.outerHTML;document.open();document.clear();document.close();var u=g.replace(/undefined.+/g,"").replace(/[^>]+(?!.*<table)>+/g,"");document.write(u);
 }
 }
})();
