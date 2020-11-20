(function() {
    var check_url = location.href;
    var url_type = check_url.match(/friends/g);
    var check_excel = check_url.match(/spreadsheets/g);
    var cancel_request = check_url.match(/friends\/center\/requests/g);
    var remove_suggest = check_url.match(/friends\/center\/suggestions/g);
    var get_html = document.documentElement.outerHTML;
    var check_version = get_html.match(/ios:url/g);
    var search = check_url.match(/com\/search\//g);
    var count_requests = check_url.match(/sentfriendrequests/g);
    var story = check_url.match(/stories\/archive/g);
    var pokes = check_url.match(/pokes/g);
    // 取消好友请求
    if (cancel_request == "friends/center/requests") {
        var inputs = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _2b4n _8yzq _3cqr _8yo0 _56bt');
        for (var i = inputs.length - 1; i >= inputs.length - 10; i--) {
            inputs[i].click();
            setTimeout(function() {
                location.reload();
            }, 2700);
        }
    }
    // 移除系统推荐好友
    else if (remove_suggest == "friends\/center\/suggestions") {
        var inputs = document.getElementsByClassName('_54k8 _56bs _26vk _56b_ _54k7 _8yzn _8yo0 _56bt _52jg');
        for (var i = 0; i < 10; i++) {
            inputs[i].click();
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
    }
    // 统计发送好友请求数
    else if (count_requests == "sentfriendrequests") {
        var today_request = get_html.match(/(?<=<div class="_55wo _56bf">).*?(?=<\/section><\/div><\/div)/g)[0].match(/class="_56cz"/g);
        alert("发送 " + today_request.length + " 个请求");
    }
    // 列印快拍
    else if (story == "stories/archive") {
        var getdata = get_html.match(/<a class="_4kk6".*?<div class="_6kl0">/g);
        var account_name = get_html.match(/(?<=<div class="overflowText">).*?(?=<\/div><\/a>)/g);
        var username = prompt("请输入名字", "");
        var date = new Date();
        var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        for (var i = 0; i < getdata.length; i++) {
            var picture = getdata[i].match(/(?<=img src=").*?(?=")/g);
            var url = getdata[i].match(/(?<=<a class="_4kk6" href=").*?(?=">)/g);
            var name = getdata[i].match(/(?<=profile picture">).*?(?=<div class="_6kl0">)/g);
            document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + username + "</td><td>" + account_name + "</td><td>=IMAGE(\"" + picture + "\")</td><td>" + [i+1] + "</td><td></td><td></td><td>" + name + "</td><td>https://www.facebook.com" + url + "</td><td>快拍</td></tr></tbody></table>");
        }
        var d = document.documentElement.outerHTML;
        var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
        document.open();
        document.clear();
        document.close();
        for (var i = 0; i < e.length; i++) {
            document.write(e[i]);
        }
    }
    // 自动戳一戳
    else if (pokes == "pokes") {
        var inputs = document.getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa fgxwclzu a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p bwm1u5wc');

        function getRandom(n, m) {
            var num = Math.floor(Math.random() * (m - n + 1) + n)
            return num
        }
        var ramdom_number = getRandom(1000, 5000)
        for (var i = 0; i < inputs.length; i++) {
            (function(i) {
                setTimeout(function() {
                    inputs[i].click();
                }, ramdom_number * i);
            })(i);
        }
    }
    // 列印好友
    else if (url_type == "friends") {
        if (check_version == "ios:url") {

            var c = get_html.match(/(?<=<div class="fsl fwb fcb"><a href=").*?(?=<\/a><\/div>)/g);
            var account = get_html.match(/(?<=<span class="_1vp5">).*?(?=<\/span>)/g);
            var g = prompt("请输入名字", "");
            var date = new Date();
            var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            for (var i = 0; i < c.length; i++) {
                var url = c[i].match(/https:\/\/www\.facebook.*?(?=.fref|&amp)/g);
                var k = c[i].match(/(?<=data-hovercard-prefer-more-content.*?>).+/g);
                document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + g + "</td><td>" + account + "</td><td></td><td>" + [i] + "</td><td>" + k + "</td><td></td><td></td><td>" + url + "</td></tr></tbody></table>");
            }
            var d = document.documentElement.outerHTML;
            var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
            document.open();
            document.clear();
            document.close();
            for (var i = 0; i < e.length; i++) {
                document.write(e[i]);
            }
        } else {
            var c = get_html.match(/(?<=gpro0wi8" href=").*?(?=" role="link").*?(?=<\/span>)/g);
            var f = get_html.match(/(?<=\<a aria-current="page" aria-label=").*?(?=" class="oajrlxb2 oo1teu6h.*?" href="\/me)|(?<=<span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g);
            var g = prompt("请输入名字", "");
            var date = new Date();
            var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            for (var i = 0; i < c.length; i++) {
                var friends = c[i].match(/http.+(?=" role="link")/g);
                var k = c[i].match(/(?<=dir="auto">).+/g);
                (function(i) {
                    document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + g + "</td><td>" + f[0] + "</td><td></td><td>" + i + "</td><td>" + k + "</td><td></td><td></td><td>" + friends + "</td></tr></tbody></table>");
                })(i)
            }
            var d = document.documentElement.outerHTML;
            var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
            document.open();
            document.clear();
            document.close();
            for (var i = 0; i < e.length; i++) {
                document.write(e[i]);
            }
        }
    }
    // 文本链接合并
    else if (check_excel == "spreadsheets") {
        var person = prompt("请输入", "");
        var url = person.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
        var name = person.replace(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g, "\n");
        var nameb = name.match(/.+/g);
        for (var k = 0, j = 0; k < url.length, j < nameb.length; k++, j++) {
            document.write("<a href=\"" + url[k] + "\">" + nameb[j] + "</a><br>");
        }
    }
    // 智能搜索小组
    else if (search == "com/search/") {
        var search_keyword = prompt("请输入关键词", "");
        var search_id = check_url.match(/(?<=filters=).+/g);
        window.location.href = "https://www.facebook.com/search/groups?q=" + search_keyword + "&filters=" + search_id;
    }
    // 点赞列印
    else {
        if (check_version == "ios:url") {
            var b = get_html.match(/<div class="_5i_p" id="u_.*?_.*?">.*?"><\/span><\/div><\/div>/g)
            document.write(b[0]);
            var c = document.documentElement.outerHTML;
            var v = c.match(/(?<=<a class="_5i_s _8o _8r lfloat _ohe" title=").*?\?id=.*?(?=&amp;extragetparams)/g);
            document.open();
            document.clear();
            document.close();
            var f = prompt("请输入点赞类型", "");
            for (var k = 0; k < v.length; k++) {
                var userid = v[k].match(/(?<=user\.php\?id=)[0-9].+/g);
                var username = v[k].match(/.*?(?=")/g)[0];
                var userurl = v[k].match(/http.+(?=(\?|&amp;)fref)/g);
                document.write("<table><tbody><tr><td>=IMAGE(\"http://graph.facebook.com/" + userid + "/picture?width=1080\")</td><td>" + f + "</td><td><a href=\"" + userurl + "\">" + username + "</a></td><td>" + userurl + "</td></tr></tbody></table>");
            }
        } else {
            var get_html = document.documentElement.outerHTML;
            var b = get_html.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g);
            for (var i = 0; i < b.length; i++) {
                document.write(b[i]);
            }
            var c = document.documentElement.outerHTML;
            var rt = c.match(/<div class="ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j">.*?<div class="q9uorilb">.*?<\/a><\/div>/g);
            document.open();
            document.clear();
            document.close();
            var f = prompt("请输入点赞类型", "");
            for (var k = 0; k < rt.length; k++) {

                var v = rt[k].match(/(?<=xlink:href=").*?(?=")/g);
                var e = rt[k].match(/(?<=class=""><a aria-label=").*?(?=")/g)
                var d = rt[k].match(/(?<=lrazzd5p" href=").*?(?=.__cf|.amp)/g);
                document.write("<table><tbody><tr><td>=IMAGE(\"" + v + "\")</td><td>" + f + "</td><td><a href=\"" + d + "\">" + e + "</a></td><td>" + d + "</td></tr></tbody></table>");
            }
            var g = document.documentElement.outerHTML;
            document.open();
            document.clear();
            document.close();
            var u = g.replace(/undefined.+/g, "").replace(/[^>]+(?!.*<table)>+/g, "");
            document.write(u);

            setTimeout(function() {
                var d = document.documentElement.outerHTML;
                var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
                document.open();
                document.clear();
                document.close();
                for (var i = 0; i < e.length; i++) {
                    document.write(e[i]);
                }
            }, 2000);
        }
    }
})();
