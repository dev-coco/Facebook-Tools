var getdata = document.documentElement.outerHTML;
var username = getdata.match(/(?<=name":").*?(?=")/g);
var userid = getdata.match(/(?<=id":").*?(?=")/g);
for (var i = 0; i < userid.length; i++) {
    var result = eval('`' + username[i] + '`');
    document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + userid[i] + '/picture?width=100&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640" style="width:100;height:100px;"></td><td style="font-size:0px;">=IMAGE("https://graph.facebook.com/' + userid[i] + '/picture?width=100&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640")</td><td>' + [i + 1] + '</td><td>' + result + '</td><td>' + userid[i] + '</td><td><a href="https://www.facebook.com/' + userid[i] + '" target="_blank;">https://www.facebook.com/' + userid[i] + '</a></td></tr></tbody></table>');
}
