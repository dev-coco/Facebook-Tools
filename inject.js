(function() {
    var check_url = location.href;
    var get_html = document.documentElement.outerHTML;
    var url_type = check_url.match(/friends/g);
    var check_excel = check_url.match(/spreadsheets/g);
    var cancel_request = check_url.match(/friends\/center\/requests/g);
    var remove_suggest = check_url.match(/friends\/center\/suggestions/g);
    var check_version = get_html.match(/ios:url/g);
    var search = check_url.match(/com\/search\//g);
    var count_requests = check_url.match(/sentfriendrequests/g);
    var count_add_friends = check_url.match(/category_key=friends/g);
    var story = check_url.match(/stories\/archive/g);
    var pokes = check_url.match(/pokes/g);
    var group = check_url.match(/groups/g);
    var watch_party = check_url.match(/\/wp\/|watchparty/g);
    var all_group = check_url.match(/groups_browse/g);
    var hiden_mark = check_url.match(/\?add|%3Fadd/g);
    var hide_all_mark = check_url.match(/\?hidemark|%3Fhidemark/g);
    var find_mark = check_url.match(/\?findmark|%3Ffindmark/g);
    var conversion_tool = check_url.match(/\?ctool|%3Fctool/g);
    var online = check_url.match(/online/g);
    var check_inactive = check_url.match(/\?inactive/g);
    var block_user = check_url.match(/\?block|%3Fblock/g);
    var auto_like = check_url.match(/\?autolike/g);
    // 取消好友请求
    if (cancel_request == "friends/center/requests") {
        $(document).ready(function() {
            cancel_request = `
                          <head>
                             <script>
                                function add_num() {
                                    var get_cancel_num = document.getElementById("cancel_num").value;
                                    var set_cancel_num = document.getElementById("cancel_num").value = Number(get_cancel_num) + 10;
                                }

                                function start_cancel() {
                                    var get_cancel_num = document.getElementById("cancel_num").value;
                                    var get_user_info = document.getElementsByClassName("_55wp _7om2 _5pxa _8yo0");
                                    var inputs = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _2b4n _8yzq _3cqr _8yo0 _56bt');
                                    for (var i = inputs.length - 1; i >= inputs.length - get_cancel_num; i--) {
                                        inputs[i].click();
                                        get_user_info[i].setAttribute("style","display:none");
                                    }
                                }

                                function printf_user() {
                                    var get_user = document.getElementsByClassName("_55wp _7om2 _5pxa _8yo0");
                                    new_page = window.open('');
                                    for (var i = 0; i < get_user.length; i++) {
                                        try {
                                            var user_avatar = get_user[i].outerHTML.match(/(?<=url\\(').*?(?=')/g)[0].replace(/\\\\3a /g, ":").replace(/\\\\3d /g, "=").replace(/\\\\26 /g, "&");
                                            var user_url = get_user[i].outerHTML.match(/(?<=<a href=").*?(?=")/g)[0];
                                            var user_name = get_user[i].outerHTML.match(/(?<=<a href=".*?">).*?(?=<\\/a>)/g)[0].replace(/<div class.*?>|<\\/div>/g, "");
                                            new_page.document.write('<table><tbody><tr><td>' + [i + 1] + '</td><td style="font-size:0px;">=IMAGE("' + user_avatar + '")</td><td>' + user_name + '</td><td>https://www.facebook.com' + user_url + '</td></tr></tbody></table>');
                                        } catch {
                                            new_page.document.write('<table><tbody><tr><td>' + [i + 1] + '</td></tr></tbody></table>');
                                        }
                                    }
                                }
                             </script>
                          </head>
                          <div id="cancel_request" style="padding:3px 12px;font-size:18px;line-height:2;border-radius:10px;color:#fff;margin:9px;background-color:#007bff;left:auto;right:240px;z-index:9999;position:fixed;">
                             <input id="cancel_num" style="width:30px;" value="10">
                             <button onclick="add_num()" style="margin-right:5px;">+</button>
                             <button onclick="start_cancel()" style="margin-right:5px;">开始</button>
                             <button onclick="printf_user()">列印</button>
                          </div>`;
            if ($("#cancel_request").length == 0)
                $("body").prepend(cancel_request);
        });
    }
    // 列印在线好友
    else if (online == "online") {
        var online_list = document.querySelectorAll("div > div > div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 > div > div> div > div.cxgpxx05.sj5x9vvc > div > ul")[0];
        var online_user = online_list.outerHTML.match(/(?<=zawbc8m" dir="auto").*?(?=<\/span>)/g);
        var online_id = online_list.outerHTML.match(/(?<=l82x9zwi" href=").*?(?=")/g);
        new_page = window.open('');
        for (var i = 0; i < online_user.length; i++) {
            var user_id = online_id[i].match(/[0-9].+[0-9]/g)[0];
            var user_name = online_user[i].replace(/<div class.*?div>/g, "").replace(/>/g, "@");
            var user_mark = online_user[i].replace(/><div class=".*?>|<\/div.+|>.+/g,"");
            new_page.document.write(`<table><tbody><tr><td>` + [i + 1] + `</td><td>`+user_id+`</td><td>`+user_mark+`</td><td>` + user_name + `</td></tr></tbody></table>`);
        }
    }
    // 移除系统推荐好友
    else if (remove_suggest == "friends\/center\/suggestions") {
        $(document).ready(function() {
            remove_suggest = `
                          <head>
                             <script>
                                function add_num() {
                                    var get_remove_num = document.getElementById("remove_num").value;
                                    var set_remove_num = document.getElementById("remove_num").value = Number(get_remove_num) + 10;
                                }

                                function start_remove() {
                                    var get_remove_num = document.getElementById("remove_num").value;
                                    var inputs = document.getElementsByClassName('_54k8 _56bs _26vk _56b_ _54k7 _8yzn _8yo0 _56bt _52jg');
                                    for (var i = 0; i < get_remove_num; i++) {
                                        inputs[i].click();
                                    }
                                }
                             </script>
                          </head>
                          <div id="remove_suggest" style="padding:3px 12px;font-size:18px;line-height:2;border-radius:10px;color:#fff;margin:9px;background-color:#007bff;left:auto;right:240px;z-index:9999;position:fixed;">
                             <input id="remove_num" style="width:30px;" value="10">
                             <button onclick="add_num()" style="margin-right:5px;">+</button>
                             <button onclick="start_remove()">开始</button>
                          </div>`;
            if ($("#remove_suggest").length == 0)
                $("body").prepend(remove_suggest);
        });
    }
    // 统计添加好友数
    else if (count_add_friends == "category_key=friends") {
        var get_data = document.getElementsByClassName("_56cx acw");
        new_page = window.open('');
        new_page.document.write(`<p>添加好友数</p>`);
        for (var i = 0; i < get_data.length; i++) {
            var date = get_data[i].outerHTML.match(/(?<=<section class="_56cz _56c.*?">).*?(?=<\/section>)/g)[0];
            var friend_count = get_data[i].getElementsByClassName("img darkTouch profpic").length;
            new_page.document.write(`<table><tbody><tr><td>` + date + `</td><td>` + friend_count + `</td></tr></tbody></table>`);
        }
    }
    // 统计发送好友请求数
    else if (count_requests == "sentfriendrequests") {
        var get_data = document.getElementsByClassName("_56cx acw");
        new_page = window.open('');
        new_page.document.write(`<p>发送好友请求数</p>`);
        for (var i = 0; i < get_data.length; i++) {
            var date = get_data[i].outerHTML.match(/(?<=<section class="_56cz _56c.*?">).*?(?=<\/section>)/g)[0];
            var friend_requests = get_data[i].getElementsByClassName("_56d3 _50wk").length;
            new_page.document.write(`<table><tbody><tr><td>` + date + `</td><td>` + friend_requests + `</td></tr></tbody></table>`);
        }
    }
    // 列印快拍
    else if (story == "stories/archive") {
        var get_data = get_html.match(/<a class="_4kk6".*?<div class="_6kl0">/g);
        var account_name = get_html.match(/(?<=<div class="overflowText">).*?(?=<\/div><\/a>)/g);
        var username = prompt("请输入名字", "");
        if (username == null) {} else {
            var date = new Date();
            var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            for (var i = 0; i < get_data.length; i++) {
                var picture = get_data[i].match(/(?<=img src=").*?(?=")/g)[0];
                var url = get_data[i].match(/(?<=<a class="_4kk6" href=").*?(?=">)/g)[0];
                var name = get_data[i].match(/(?<=profile picture">).*?(?=<div class="_6kl0">)/g)[0].replace(/<div class.*?>|<\/div>/g, "");
                document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + username + "</td><td>" + account_name + "</td><td></td><td></td><td style='font-size:0px;'>=IMAGE(\"" + picture + "\")</td><td>" + [i + 1] + "</td><td>" + name + "</td><td>https://www.facebook.com" + url + "</td><td>快拍</td></tr></tbody></table>");
            }
        }
    }
    // 自动戳一戳
    else if (pokes == "pokes") {
        var pokes_button = document.getElementsByClassName('oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');

        function getRandom(n, m) {
            var num = Math.floor(Math.random() * (m - n + 1) + n);
            return num;
        }
        var ramdom_number = getRandom(3000, 10000)
        for (var i = 0; i < 9999; i++) {
            (function(i) {
                setTimeout(function() {
                           try {
                           // 每次都点击第一个按钮
                           pokes_button[0].click();
                           } catch {
                           // 点不到按钮就向下滚动
                           window.scrollTo(0, document.body.scrollHeight);
                           }
                }, ramdom_number * i);
            })(i);
        }
    }
    // 隐藏所有标记
    else if (hide_all_mark == "?hidemark" || hide_all_mark == "%3Fhidemark") {
        setInterval(function() {
            var get_user = document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr');
            for (var i = 0; i < get_user.length; i++) {
                var Mark = get_user[i].getElementsByClassName('simplemarker-mark')[0];
                if (Mark != null) {
                    get_user[i].setAttribute("style", "display:none;");
                } else {}
            }

            var get_group_user = document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"]');
            for (var i = 0; i < get_group_user.length; i++) {
                var Mark = get_group_user[i].getElementsByClassName('simplemarker-mark')[0];
                if (Mark != null) {
                    get_group_user[i].setAttribute("style", "display:none;");
                } else {}
            }

            var get_search_user = document.querySelectorAll(".d2edcug0.glvd648r.o7dlgrpb > div > div");
            for (var i = 0; i < get_search_user.length; i++) {
                var Mark = get_search_user[i].getElementsByClassName('simplemarker-mark')[0];
                if (Mark != null) {
                    get_search_user[i].setAttribute("style", "display:none;");
                } else {}
            }
        }, 1500);
    }
    // 智能隐藏标记
    else if (hiden_mark == "?add" || hiden_mark == "%3Fadd") {
        setInterval(function() {
            var get_user = document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr');
            var reg = RegExp(/😀|😊|💚|💛|🧡|💙|💧|🌳|🦖|🈲|🎈|👿|♿️|😷|🏳️‍🌈|🔴|🅾️|⬛️|◾️|◼️|👹|😍|👤|⛵️|🚦|👶|👽|👩‍❤️‍👨|☸️|☪️️|🕉️|🐌|🦐|⚠️|🐠|❌/);
            for (var i = 0; i < get_user.length; i++) {
                var Mark = get_user[i].getElementsByClassName('simplemarker-mark')[0];
                try {
                    var Mark_Date = Mark.outerHTML.match(/..\/.*?\/..(?=<)|..\/.*?\/.(?=<)/g)[0];
                } catch {}
                try {
                    if (Mark.outerHTML.match(reg)) {
                        var aa = "TRUE";
                    }
                } catch {
                    var aa = "FALSE";
                }
                var date = new Date();
                // 30天之前
                var dateTime = new Date(date.setDate(date.getDate() - 30));
                // 这里的20代表世纪
                var date2 = new Date(20 + Mark_Date);
                if (Mark != null && dateTime.getTime() < date2.getTime() || aa == "TRUE") {
                    get_user[i].setAttribute("style", "display:none;");
                } else {}
            }
            
            var get_group_user = document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"]');
            for (var i = 0; i < get_group_user.length; i++) {
                var Mark = get_group_user[i].getElementsByClassName('simplemarker-mark')[0];
                try {
                    var Mark_Date = Mark.outerHTML.match(/..\/.*?\/..(?=<)|..\/.*?\/.(?=<)/g);
                } catch {}
                try {
                    if (Mark.outerHTML.match(reg)) {
                        var aa = "TRUE";
                    }
                } catch {
                    var aa = "FALSE";
                }
                var date = new Date();
                var dateTime = new Date(date.setDate(date.getDate() - 30));
                var date2 = new Date(20 + Mark_Date);
                if (Mark != null && dateTime.getTime() < date2.getTime() || aa == "TRUE") {
                    get_group_user[i].setAttribute("style", "display:none;");
                } else {}
            }

            var get_search_user = document.querySelectorAll(".d2edcug0.glvd648r.o7dlgrpb > div > div");
            for (var i = 0; i < get_search_user.length; i++) {
                var Mark = get_search_user[i].getElementsByClassName('simplemarker-mark')[0];
                try {
                    var Mark_Date = Mark.outerHTML.match(/..\/.*?\/..(?=<)|..\/.*?\/.(?=<)/g)[0];
                } catch {}
                try {
                    if (Mark.outerHTML.match(reg)) {
                        var aa = "TRUE";
                    }
                } catch {
                    var aa = "FALSE";
                }
                var date = new Date();
                var dateTime = new Date(date.setDate(date.getDate() - 30));
                var date2 = new Date(20 + Mark_Date);
                if (Mark != null && dateTime.getTime() < date2.getTime() || aa == "TRUE") {
                    get_search_user[i].setAttribute("style", "display:none;");
                } else {}
            }
        }, 1500);
    }
    // 找标记
    else if (find_mark == "?findmark" || find_mark == "%3Ffindmark") {
        var get_user = document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr');
        var reg = RegExp(/💚|🐠|💧|🌳/);
        for (var i = 0; i < get_user.length; i++) {
            var Mark = get_user[i].getElementsByClassName('simplemarker-mark')[0];
            try {
                if (Mark.outerHTML.match(reg)) {} else {
                    get_user[i].setAttribute("style", "display:none;");
                }
            } catch {
                get_user[i].setAttribute("style", "display:none;");
            }
        }
    
        var get_group_user = document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"]');
        for (var i = 0; i < get_group_user.length; i++) {
            var Mark = get_group_user[i].getElementsByClassName('simplemarker-mark')[0];
            try {
                if (Mark.outerHTML.match(reg)) {} else {
                    get_group_user[i].setAttribute("style", "display:none;");
                }
            } catch {
                get_group_user[i].setAttribute("style", "display:none;");
            }
        }

        var get_search_user = document.querySelectorAll(".d2edcug0.glvd648r.o7dlgrpb > div > div");
        for (var i = 0; i < get_search_user.length; i++) {
            var Mark = get_search_user[i].getElementsByClassName('simplemarker-mark')[0];
            try {
                if (Mark.outerHTML.match(reg)) {} else {
                    get_search_user[i].setAttribute("style", "display:none;");
                }
            } catch {
                get_search_user[i].setAttribute("style", "display:none;");
            }
        }
    }
    // 检测停用账户
    else if (check_inactive == "?inactive" || check_inactive == "%3Finactive") {
        var get_user = document.getElementsByClassName("bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr");
        new_page = window.open('');
        for (var i = 0; i < get_user.length; i++) {
            try {
                var check_url = get_user[i].outerHTML.match(/(?<=gpro0wi8" href=").*?(?=" role="link")/g)[0];
            } catch {
                try {
                    var in_active = get_user[i].outerHTML.match(/(?<=lrazzd5p oo9gr5id".*?>).*?(?=<\/span>)/g)[0];
                    new_page.document.write(in_active + "<br>");
                } catch {}
            }
        }
        new_page.document.write("停用帐户检测完成");
    }
    // 拉黑用户
    else if (block_user == "?block" || block_user == "%3Fblock") {
        $(document).ready(function() {
            facebook_block_user = `
                          <head>
                             <meta charset="utf-8">
                             <script>
                                function confirm_block() {
                                    var get_block_url = document.getElementById("block_url").value;
                                    var url = get_block_url.match(/https:\\/\\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
                                        for (var k = 0; k < url.length; k++) {
                                            (function(k) {
                                                setTimeout(async function() {
                                                    let response = await fetch(url[k])
                                                    let text = await response.text()
                                                    try {
                                                        let facebookID = text.match(/(?<="userID":")([0-9]+)/g)[0];
                                                        var Popup = window.open("https://m.facebook.com/privacy/touch/block/confirm/?back_uri&bid=" + facebookID + "&source=privacy_settings_page", "_blank");
                                                        if (!Popup) {
                                                           document.getElementById("introduction").innerHTML = "<a style='color:black;' href='https://dev-coco.github.io/blog/Facebook-Tools.html#%E6%96%B9%E6%B3%95%E4%BA%8C' target='_blank'>请先阅读使用说明</a>";
                                                        }
                                                    } catch {
                                                           document.getElementById("error").innerHTML += "出错: <a style='color:#fff;' href='" + url[k] + "' target='_blank'>" + url[k] + "</a><br>";
                                                    }
                                                }, 300 * k);
                                            })(k);
                                        }
                                    }
                                function data_clear() {
                                    document.getElementById("block_url").value = "";
                                    document.getElementById("error").innerHTML = "";
                                    document.getElementById("introduction").innerHTML = "";
                                }
                             </script>
                             <style>
                                .button {
                                outline:none;
                                float:right;
                                margin-top:4px;
                                border: 1px solid;
                                padding: .3rem .75rem;
                                font-size: .9rem;
                                line-height: 1.5;
                                border-radius: .75rem;
                                color: #fff;
                                background-color: #336699;
                                border-color: #007bff;
                                font-weight: blod;
                                }
                             </style>
                          </head>
                          <div id="facebook_block_user" style="position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);border:1px solid;padding:3px 12px;border-radius:10px;color:#fff;background-color:#99CCFF;z-index:9999;font-size:16px;width:300px;height:200px;">
                          <textarea id="block_url" style="display:block;margin-left:auto;margin-right:auto;margin-top:10px;width:280px;height:145px;resize:none;font-size:16px;" placeholder="请输入链接, 一行一个"></textarea>
                          <button class="button" onclick="confirm_block()">确认</button>
                          <button class="button" onclick="data_clear()">清空</button>
                          <div id="introduction" style="float:left;color:black;margin-top:8px;line-height:1.5;"></div>
                          <div id="error" style="float:left;background-color:red;"></div>`;
            if ($("#facebook_block_user").length == 0)
                $("body").prepend(facebook_block_user);
        });
        scroll(0, 0);
    }
    // 列印好友
    else if (url_type == "friends") {
        if (check_version == "ios:url") {
            // Old Facebook
            var get_user_data = get_html.match(/(?<=<div class="fsl fwb fcb"><a href=").*?(?=<\/a><\/div>)/g);
            var account = get_html.match(/(?<=<span class="_1vp5">).*?(?=<\/span>)/g)[0];
            var get_self_name = prompt("请输入名字", "");
            if (get_self_name == null) {} else {
                var date = new Date();
                var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                for (var i = 0; i < get_user_data.length; i++) {
                    var url = get_user_data[i].match(/https:\/\/www\.facebook.*?(?=.fref|&amp)/g)[0];
                    var uesr_name = get_user_data[i].match(/(?<=data-hovercard-prefer-more-content.*?>).+/g)[0].replace(/<div class.*?>|<\/div>/g, "");
                    document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + get_self_name + "</td><td>" + account + "</td><td>" + [i + 1] + "</td><td>" + uesr_name + "</td><td>" + url + "</td></tr></tbody></table>");
                }
            }
        } else {
            // New Facebook
            var get_user_data = get_html.match(/(?<=gpro0wi8" href=").*?(?=" role="link").*?(?=<\/span>)/g);
            var get_account_name = get_html.match(/(?<=\<a aria-current="page" aria-label=").*?(?=" class="oajrlxb2 oo1teu6h.*?" href="\/me)|(?<=<span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g)[0];
            var get_self_name = prompt("请输入名字", "");
            if (get_self_name == null) {} else {
                var date = new Date();
                var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                for (var i = 0; i < get_user_data.length; i++) {
                    var url = get_user_data[i].match(/http.+(?=" role="link")/g)[0];
                    var uesr_name = get_user_data[i].match(/(?<=dir="auto">).+/g)[0].replace(/<div class.*?div>/g, "");
                    try {
                        var user_mark = get_user_data[i].match(/(?<=dir="auto">).+/g)[0].match(/(?<=<div class=".*?>).*?(?=<\/div)/g, )[0];
                    } catch {
                        var user_mark = "";
                    }
                    document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + get_self_name + "</td><td>" + get_account_name + "</td><td>" + [i + 1] + "</td><td>" + uesr_name + "</td><td>" + url + "</td><td>" + user_mark + "</td></tr></tbody></table>");
                }
            }
        }
    }
    // 文本链接合并
    else if (check_excel == "spreadsheets") {
        var input_data = prompt("请输入", "");
        if (input_data == null) {} else {
            var url = input_data.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
            var name = input_data.replace(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g, "\n");
            new_page = window.open('');
            var nameb = name.match(/.+/g);
            for (var k = 0, j = 0; k < url.length, j < nameb.length; k++, j++) {
                new_page.document.write("<a href=\"" + url[k] + "\">" + nameb[j] + "</a><br>");
            }
        }
    }
    // 智能搜索
    else if (search == "com/search/") {
        var search_keyword = prompt("请输入关键词", "");
        if (search_keyword == null) {} else {
            var search_id = check_url.match(/(?<=filters=).+/g)[0];
            var orig_search_url = check_url.match(/.+\?q=/g)[0];
            window.location.href = orig_search_url + search_keyword + "&filters=" + search_id;
        }
    }
    // 开包厢辅助
    else if (watch_party == "watchparty" || watch_party == "/wp/") {
        $(document).ready(function() {
            new_button = `
                      <head>
                      <meta charset="utf-8">
                      <link rel="stylesheet" type="text/css" href="https://dev-coco.github.io/css/Facebook-Tools.css">
                      <script>
                         // 邀请在线好友1-2.5s
                         function invite_online_fast() {
                             try {
                                 if (document.querySelectorAll("#facebook_comment_show").length == 1) {
                                     var iframeDocument = document.getElementsByTagName("iframe")[1].contentDocument;
                                 } else {
                                     var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                 }
                             } catch {}
                             try {
                                 var online = iframeDocument.getElementsByClassName('_71ua');
                                 var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             } catch {
                                 var online = document.getElementsByClassName('_71ua');
                                 var inputs = document.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             }

                             function getRandom(n, m) {
                                 var num = Math.floor(Math.random() * (m - n + 1) + n);
                                 return num;
                             }
                             var ramdom_number = getRandom(1000, 2500);
                             alert("在线用户：" + online.length);
                             for (var i = 0; i < online.length; i++) {
                                 (function(i) {
                                     setTimeout(function() {
                                         inputs[i].click();
                                         document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                     }, ramdom_number * i);
                                 })(i);
                             }
                         }
                         // 邀请在线好友3-5s
                         function invite_online_normal() {
                             try {
                                 if (document.querySelectorAll("#facebook_comment_show").length == 1) {
                                     var iframeDocument = document.getElementsByTagName("iframe")[1].contentDocument;
                                 } else {
                                     var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                 }
                             } catch {}
                             try {
                                 var online = iframeDocument.getElementsByClassName('_71ua');
                                 var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             } catch {
                                 var online = document.getElementsByClassName('_71ua');
                                 var inputs = document.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             }

                             function getRandom(n, m) {
                                 var num = Math.floor(Math.random() * (m - n + 1) + n);
                                 return num;
                             }
                             var ramdom_number = getRandom(3000, 5000)
                             alert("在线用户：" + online.length);
                             for (var i = 0; i < online.length; i++) {
                                 (function(i) {
                                     setTimeout(function() {
                                         inputs[i].click();
                                         document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                     }, ramdom_number * i);
                                 })(i);
                             }
                         }
                         var time = 200;
                         var timeOut = null;
                         // 邀请成员超快
                         function invite_very_fast(e) {
                             clearTimeout(timeOut);
                             try {
                                 if (document.querySelectorAll("#facebook_comment_show").length == 1) {
                                     var iframeDocument = document.getElementsByTagName("iframe")[1].contentDocument;
                                 } else {
                                     var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                 }
                             } catch {}
                             try {
                                 var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             } catch {
                                 var inputs = document.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             }

                             function getRandom(n, m) {
                                 var num = Math.floor(Math.random() * (m - n + 1) + n)
                                 return num
                             }
                             document.getElementById("invite_speed").innerHTML = "自动邀请(极速)";
                             var ramdom_number = getRandom(500, 800)
                             for (var i = 0; i < inputs.length; i++) {
                                 (function(i) {
                                     setTimeout(function() {
                                         inputs[i].click();
                                         document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                     }, ramdom_number * i);
                                 })(i);
                             }
                         }
                         // 邀请成员1-2.5s
                         function invite_fast(e) {
                             clearTimeout(timeOut);
                             timeOut = setTimeout(function() {
                                 try {
                                     if (document.querySelectorAll("#facebook_comment_show").length == 1) {
                                         var iframeDocument = document.getElementsByTagName("iframe")[1].contentDocument;
                                     } else {
                                         var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                     }
                                 } catch {}
                                 try {
                                     var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                                 } catch {
                                     var inputs = document.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                                 }

                                 function getRandom(n, m) {
                                     var num = Math.floor(Math.random() * (m - n + 1) + n)
                                     return num
                                 }
                                 document.getElementById("invite_speed").innerHTML = "自动邀请(快)";
                                 var ramdom_number = getRandom(1000, 2500)
                                 for (var i = 0; i < inputs.length; i++) {
                                     (function(i) {
                                         setTimeout(function() {
                                             inputs[i].click();
                                             document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                         }, ramdom_number * i);
                                     })(i);
                                 }
                             }, time)
                         }
                         // 邀请成员3-5s
                         function invite_normal() {
                             try {
                                 if (document.querySelectorAll("#facebook_comment_show").length == 1) {
                                     var iframeDocument = document.getElementsByTagName("iframe")[1].contentDocument;
                                 } else {
                                     var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                 }
                             } catch {}
                             try {
                                 var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             } catch {
                                 var inputs = document.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                             }

                             function getRandom(n, m) {
                                 var num = Math.floor(Math.random() * (m - n + 1) + n)
                                 return num
                             }
                             var ramdom_number = getRandom(3000, 5000)
                             for (var i = 0; i < inputs.length; i++) {
                                 (function(i) {
                                     setTimeout(function() {
                                         inputs[i].click();
                                         document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                     }, ramdom_number * i);
                                 })(i);
                             }
                         }
                         // 开包厢节省CPU
                         function CPU_save() {
                             try {
                                 if (document.querySelectorAll("#facebook_comment_show").length == 1) {
                                     var iframeDocument = document.getElementsByTagName("iframe")[1].contentDocument;
                                 } else {
                                     var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                 }
                             } catch {}
                             try {
                                 var video_iframe = iframeDocument.getElementsByClassName("_1gm- _114e")[0];
                             } catch {
                                 var video_iframe = document.getElementsByClassName("_1gm- _114e")[0];
                             }
                             try {
                                 var status = video_iframe.style.display;
                             } catch {
                                 video_iframe.style.display = "none";
                             }
                             if (status == "none") {
                                 video_iframe.style.display = "block";
                                 document.getElementById("CPU_save").innerHTML = "性能优化(开启)";
                             } else {
                                 video_iframe.style.display = "none";
                                 document.getElementById("CPU_save").innerHTML = "性能优化(关闭)";
                             }
                         }
                         // 统计留言数1s
                         function comment_count() {
                             var auto_count_comment = setInterval(function() {
                                 try {
                                     if (document.querySelectorAll("#facebook_comment_show").length == 1) {
                                         var iframeDocument = document.getElementsByTagName("iframe")[1].contentDocument;
                                     } else {
                                         var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                     }
                                 } catch {}
                                 try {
                                     var comment = iframeDocument.getElementsByClassName("_3b-9");
                                     var comment_num = comment.length - 1;
                                 } catch {
                                     var comment = document.getElementsByClassName("_3b-9");
                                     var comment_num = comment.length / 2 - 1;
                                 }

                                 document.getElementById("comment_count").innerHTML = "当前评论：" + comment_num;
                             }, 2000);
                         }
                      </script>
                      </head>
                      <div id="facebook_tools" class="dropdown">
                        <img width="48px;" src="https://dev-coco.github.io/images/arrow_button.png" class="img" />
                        <div class="dropdown-content">
                            <div id="invite_count"></div>
                            <button class="button green" onclick="invite_online_fast()">邀请在线好友(快)</button>
                            <button class="button green" onclick="invite_online_normal()">邀请在线好友(正常)</button>
                            <button class="button blue" id="invite_speed" onclick="invite_fast(event)" ondblclick="invite_very_fast(event)">自动邀请(快)</button>
                            <button class="button blue" onclick="invite_normal()">自动邀请(正常)</button>
                            <button class="button red" id="CPU_save" onclick="CPU_save()">性能优化</button>
                            <button class="button red" id="comment_count" onclick="comment_count()">当前评论：</button>
                        </div>
                      </div>`;
            if ($("#facebook_tools").length == 0)
                $("body").prepend(new_button);
        });
    }
    // 列印所有小组
    else if (all_group == "groups_browse") {
        var get_data = get_html.match(/(?<=<div class="_7hkf _3qn7 _61-3 _2fyi _3qng">).*?(?=<\/a><\/div>)/g);
        for (var i = 0; i < get_data.length; i++) {
            var group_name = get_data[i].match(/(?<=igjjae4c">).*?(?=<\/div><\/div><div class)/g)[0].replace(/<div class.*?div>/g, "");
            var group_url = get_data[i].match(/(?<=<a class="_7hkg" href=").*?(?=\/\?ref=group_browse">)/g)[0];
            document.write("<table><tbody><tr><td>" + [i + 1] + "</td><td>" + group_name + "</td><td>https://www.facebook.com" + group_url + "</td></tr></tbody></table>");
        }
    }
    // 小组信息
    else if (group == "groups") {
        // Group Post Likes
        var like_type = prompt("请输入点赞类型，留空则列印小组信息。", "");
        if (like_type != null && like_type != "") {
            var get_page_data = get_html.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g);
            for (var i = 0; i < get_page_data.length; i++) {
                document.write(get_page_data[i]);
            }
            var get_new_html = document.documentElement.outerHTML;
            var new_page_data = get_new_html.match(/<div class="ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j">.*?<div class="q9uorilb">.*?<\/a><\/div>/g);
            document.open();
            document.clear();
            document.close();
            for (var k = 0; k < new_page_data.length; k++) {
                var user_avatar = new_page_data[k].match(/(?<=xlink:href=").*?(?=")/g);
                var user_name = new_page_data[k].match(/(?<=<div class="q9uorilb"><a class.*?>).*?(?=<\/a><\/div>)/g)[0].replace(/<div class.*?>|<\/div>/g, "");
                var user_link = "https://www.facebook.com/" + new_page_data[k].match(/(?<=lrazzd5p" href="\/groups\/.*?\/user\/).*?(?=\/.__cf|.amp)/g);
                document.write("<table><tbody><tr><td>" + [k + 1] + "</td><td style='font-size:0px;'>=IMAGE(\"" + user_avatar + "\")</td><td>" + like_type + "</td><td>" + user_name + "</td><td>" + user_link + "</td></tr></tbody></table>");
            }
        } else {
            // Group Info
            var group_location = get_html.match(/(?<=group_locations":\[{"id":".*?","name":").*?(?=","__typename")/g);
            if (group_location == null) {
                var group_location = "";
            } else {}
            try {
                var last_month_posts = get_html.match(/(?<=number_of_posts_in_last_month":).*?(?=,")/g)[0];
            } catch {
                var last_month_posts = "0";
            }
            try {
                var all_member = get_html.match(/(?<=group_member_profiles.*?count":).*?(?=\})/g)[0];
            } catch {
                var all_member = "0";
            }
            try {
                var new_member = get_html.match(/(?<=group_new_member_profiles":{"count":).*?(?=\})/g)[0];
            } catch {
                var new_member = "0";
            }
            try {
                var group_status = get_html.match(/(?<=privacy_info.*?text":").*?(?="\})/g)[0];
            } catch {
                var group_status = "";
            }
            try {
                var group_name = get_html.match(/(?<=isProfile":"Group","name":").*?(?=",")/g)[0];
            } catch {
                var group_name = "";
            }
            var url = (location.href + "/").match(/http.+oups\/.*?\//g)[0].replace(/\/$/g, "");
            var keyword = RegExp(/god|bible|church|fellowship|christ|baptist|presbyterian|gospel|catholic|holy|jesus|lord|ministry|kingdom|religion/);
            var check_keyword = keyword.test(group_name.toLowerCase());
            if (check_keyword == true) {
                var religion = "宗派";
            } else {
                var religion = "外邦";
            }
            var date = new Date();
            var today = (date.getMonth() + 1) + "/" + date.getDate();
            var str = "<table><tbody><tr><td>" + today + "</td><td></td><td></td><td>" + group_location + "</td><td>" + religion + "</td><td>" + group_name + "</td><td></td><td>" + url + "</td><td>" + all_member + "</td><td>" + last_month_posts + "</td><td>" + new_member + "</td><td>" + group_status + "</td></tr></tbody></table>"
            document.write(eval("`" + str + "`"));
        }
    }
    // 首页自动点赞
    else if (auto_like == "?autolike") {
        var para = document.createElement("div");
        var element = document.querySelector("body");
        element.appendChild(para);
        para.setAttribute("id", "show_info");
        para.setAttribute("style", "position:fixed;font-size:18px;top:5px;left:50%;transform:translate(-50%,0);background-color:#ffc108;z-index:9999;padding:.375rem .75rem;border-radius:5px;");
        var inputs = document.getElementsByClassName('_15ko _77li touchable');
        function getRandom(n, m) {
            var num = Math.floor(Math.random() * (m - n + 1) + n);
            return num;
        }
        var ramdom_number = getRandom(3000, 5000);
        // console.log("总数：" + inputs.length);
        for (var i = 0; i < 9999; i++) {
            (function(i) {
                setTimeout(function() {
                    var probability = getRandom(1, 100);
                    if (probability <= 30) {
                        //console.log("30%: "+probability);
                    } else {
                        //console.log(probability);
                        try {
                            try {
                                var get_like_count = document.getElementById("like_count").innerHTML;
                            } catch {
                                var get_like_count = "0";
                            }
                            try {
                                var get_already_like_count = document.getElementById("already_like_count").innerHTML;
                            } catch {
                                var get_already_like_count = "0";
                            }

                            inputs[i].outerHTML.match(/_77la/g)[0];
                            console.log("已赞过" + [i + 1]);
                            document.getElementById("show_info").innerHTML = "点赞：<span id='like_count'>" + get_like_count + "</span>/<span id='already_like_count'>" + [Number(get_already_like_count) + 1] + "</span>/" + inputs.length;
                        } catch {
                            try {
                                var get_like_count = document.getElementById("like_count").innerHTML;
                            } catch {
                                var get_like_count = "0";
                            }
                            try {
                                var get_already_like_count = document.getElementById("already_like_count").innerHTML;
                            } catch {
                                var get_already_like_count = "0";
                            }
                            console.log("已点赞：" + [i + 1]);
                            try {
                                inputs[i].click();
                                document.getElementById("show_info").innerHTML = "点赞：<span id='like_count'>" + [Number(get_like_count) + 1] + "</span>/<span id='already_like_count'>" + get_already_like_count + "</span>/" + inputs.length;
                            } catch {
                                console.log("滚动");
                                window.scrollTo(0, document.body.scrollHeight);
                            }
                        }
                    }
                }, ramdom_number * i);
            })(i);
        }
    }
    // 转换数字ID
    else if (conversion_tool == "?ctool" || conversion_tool == "%3Fctool") {
        $(document).ready(function() {
            remove_suggest = `
                          <head>
                             <style>
                                .button {
                                outline:none;
                                border: 1px solid;
                                padding: .3rem .75rem;
                                border-radius: .75rem;
                                color: #fff;
                                background-color: #336699;
                                border-color: #007bff;
                                width:98px;
                                }
                                .font-style {
                                font-size: .9rem;
                                line-height: 1.5;
                                font-weight:bold;
                                margin-top:15px;
                                }
                                .input-content {
                                width:320px;height:450px;resize:none;font-size:16px;
                                }
                             </style>
                          </head>
                          <div id="facebook_block_user" style="position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);border:1px solid;padding:3px 12px;border-radius:10px;color:#fff;background-color:#99CCFF;z-index:9999;font-size:16px;">
                             <table>
                                <tbody>
                                   <tr>
                                      <td><textarea id="input_data" class="input-content" placeholder="请输入内容, 一行一个"></textarea></td>
                                      <td>
                                         <div style="text-align:center;">
                                            <input checked="checked" id="output_id" type="checkbox"><span clas="font-style" style="color:black;">序号</span>
                                         </div>
                                         <input class="font-style" id="delay_time" style="width:94px;border:none;text-align:center;" value="1500" type="text" placeholder="设置延时">
                                         <button class="button font-style" onclick="url_to_id()">链接 &gt;&gt; ID</button>
                                         <button class="button font-style" onclick="id_to_url()">ID &gt;&gt; 链接</button>
                                         <button class="button font-style" onclick="copy_result()">复制结果</button>
                                         <button class="button font-style" onclick="data_clear()">清空</button>
                                         <p class="font-style" id="copy_status" style="text-align:center;color:black;height:21px;"></p>
                                      </td>
                                      <td><textarea id="output_data" class="input-content" placeholder="输出内容，不可编辑" readonly></textarea></td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                          <script>
                             function url_to_id() {
                                 var get_input_data = document.getElementById("input_data").value;
                                 if (get_input_data == "") {
                                     return;
                                 }
                                 var output_id_status = document.getElementById("output_id").checked;
                                 var get_delay_time = document.getElementById("delay_time").value;
                                 document.getElementById("output_data").value = "";
                                 var url = get_input_data.match(/https:[A-Za-z0-9/.]+[A-Za-z0-9/]/g);
                                 for (var k = 0; k < url.length; k++) {
                                     (function(k) {
                                         setTimeout(async function() {
                                             let response = await fetch(url[k])
                                             let text = await response.text()
                                             try {
                                                 let facebookID = text.match(/(?<="userID":")([0-9]+)/g)[0]
                                                 if (output_id_status == true) {
                                                     document.getElementById("output_data").value += [k] + "\\t" + facebookID + "\\n";
                                                 } else {
                                                     document.getElementById("output_data").value += facebookID + "\\n";
                                                 }
                                             } catch {
                                                 if (output_id_status == true) {
                                                     document.getElementById("output_data").value += [k] + "\\n";
                                                 } else {
                                                     document.getElementById("output_data").value += "\\n";
                                                 }
                                             }
                                         }, get_delay_time * k);
                                     })(k);
                                 }
                             }

                             function id_to_url() {
                                 var get_input_data = document.getElementById("input_data").value;
                                 if (get_input_data == "") {
                                     return;
                                 }
                                 var output_id_status = document.getElementById("output_id").checked;
                                 var get_delay_time = document.getElementById("delay_time").value;
                                 document.getElementById("output_data").value = "";
                                 var get_id = get_input_data.match(/[0-9].+/g);
                                 for (var k = 0; k < get_id.length; k++) {
                                     (function(k) {
                                         setTimeout(async function() {
                                             let response = await fetch("https://www.facebook.com/" + get_id[k])
                                             let real_url = response.url.replace(/\\/$ /g, "");
                                             try {
                                                 if (output_id_status == true) {
                                                     document.getElementById("output_data").value += [k] + "\\t" + real_url + "\\n";
                                                 } else {
                                                     document.getElementById("output_data").value += real_url + "\\n";
                                                 }
                                             } catch {

                                                 if (output_id_status == true) {
                                                     document.getElementById("output_data").value += [k] + "\\t识别不到\\n";
                                                 } else {
                                                     document.getElementById("output_data").value += "识别不到\\n";
                                                 }
                                             }
                                         }, get_delay_time * k);
                                     })(k);
                                 }
                             }

                             function data_clear() {
                                 document.getElementById("input_data").value="";
                                 document.getElementById("output_data").value="";
                             }

                             function copy_result() {
                                 var output = document.getElementById("output_data");
                                 output.select(); // 选中文本
                                 document.execCommand("copy"); // 执行浏览器复制命令
                                 document.getElementById("copy_status").innerHTML = "复制成功";
                                 setTimeout(function() {
                                     document.getElementById("copy_status").innerHTML = "";
                                 }, 4000);
                             }
                          </script>`;
            if ($("#remove_suggest").length == 0)
                $("body").prepend(remove_suggest);
        });
        scroll(0, 0);
    }
    // 点赞列印
    else {
        if (check_version == "ios:url") {
            // Old Facebook
            var get_page_data = get_html.match(/<div class="_5i_p" id="u_.*?_.*?">.*?"><\/span><\/div><\/div>/g)[0];
            document.write(get_page_data);
            var get_new_html = document.documentElement.outerHTML;
            var get_new_page_data = get_new_html.match(/(?<=<a class="_5i_s _8o _8r lfloat _ohe" title=").*?\?id=.*?(?=&amp;extragetparams)/g);
            document.open();
            document.clear();
            document.close();
            var like_type = prompt("请输入点赞类型", "");
            for (var k = 0; k < get_new_page_data.length; k++) {
                var user_id = get_new_page_data[k].match(/(?<=user\.php\?id=)[0-9].+/g)[0];
                var user_name = get_new_page_data[k].match(/.*?(?=")/g)[0];
                var user_url = get_new_page_data[k].match(/http.+(?=(\?|&amp;)fref)/g)[0];
                document.write("<table><tbody><tr><td>" + [k] + "</td><td>=IMAGE(\"http://graph.facebook.com/" + user_id + "/picture?width=1080\")</td><td>" + like_type + "</td><td><a href=\"" + user_url + "\">" + user_name + "</a></td><td>" + user_url + "</td></tr></tbody></table>");
            }
        } else {
            // New Facebook
            var get_page_data = get_html.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g);
            for (var i = 0; i < get_page_data.length; i++) {
                document.write(get_page_data[i]);
            }
            var get_new_html = document.documentElement.outerHTML;
            var new_page_data = get_new_html.match(/<div class="ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j">.*?<div class="q9uorilb">.*?<\/a><\/div>/g);
            document.open();
            document.clear();
            document.close();
            var like_type = prompt("请输入点赞类型", "");
            for (var k = 0; k < new_page_data.length; k++) {
                var user_avatar = new_page_data[k].match(/(?<=xlink:href=").*?(?=")/g)[0];
                var user_name = new_page_data[k].match(/(?<=<div class="q9uorilb"><a class.*?>).*?(?=<\/a><\/div>)/g)[0].replace(/<div class.*?>|<\/div>/g, "");
                var user_link = new_page_data[k].match(/(?<=lrazzd5p" href=").*?(?=.__cf|.amp)/g)[0];
                document.write("<table><tbody><tr><td>" + [k + 1] + "</td><td style='font-size:0px;'>=IMAGE(\"" + user_avatar + "\")</td><td>" + like_type + "</td><td>" + user_name + "</td><td>" + user_link + "</td></tr></tbody></table>");
            }
        }
    }
})();
