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
    var count_add_friends = check_url.match(/category_key=friends/g);
    var story = check_url.match(/stories\/archive/g);
    var pokes = check_url.match(/pokes/g);
    var group = check_url.match(/groups/g);
    var watch_party = check_url.match(/\/wp\/|watchparty/g);
    var all_group = check_url.match(/groups_browse/g);
    var hiden_mark = check_url.match(/\?add|%3Fadd/g);
    var hide_all_mark = check_url.match(/\?hidemark|%3Fhidemark/g);
    var find_mark = check_url.match(/\?findmark|%3Ffindmark/g);
    var conversion_num_id = check_url.match(/\?cnumid|%3Fcnumid/g);
    var conversion_real_id = check_url.match(/\?crealid|%3Fcrealid/g);
    var online = check_url.match(/online/g);
    var check_inactive = check_url.match(/\?inactive/g);
    var block_user = check_url.match(/\?block/g);
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
    // 列印在线好友
    else if (online == "online") {
        var online_list = document.querySelectorAll("div > div > div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 > div > div> div > div.cxgpxx05.sj5x9vvc > div > ul")[0]
        var online_name = online_list.outerHTML.match(/(?<=zawbc8m" dir="auto").*?(?=<\/span>)/g);
        new_page = window.open('');
        for (var i = 0; i < online_name.length; i++) {
            var str = online_name[i].replace(/>/g, "@");
            new_page.document.write(`<table><tbody><tr><td>` + [i + 1] + `</td><td>` + str + `</td></tr></tbody></table>`);
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
        var getdata = get_html.match(/<a class="_4kk6".*?<div class="_6kl0">/g);
        var account_name = get_html.match(/(?<=<div class="overflowText">).*?(?=<\/div><\/a>)/g);
        var username = prompt("请输入名字", "");
        var date = new Date();
        var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        for (var i = 0; i < getdata.length; i++) {
            var picture = getdata[i].match(/(?<=img src=").*?(?=")/g);
            var url = getdata[i].match(/(?<=<a class="_4kk6" href=").*?(?=">)/g);
            var name = getdata[i].match(/(?<=profile picture">).*?(?=<div class="_6kl0">)/g);
            document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + username + "</td><td>" + account_name + "</td><td></td><td></td><td>=IMAGE(\"" + picture + "\")</td><td>" + [i + 1] + "</td><td>" + name + "</td><td>https://www.facebook.com" + url + "</td><td>快拍</td></tr></tbody></table>");
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
            var get_group_user = document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"]')
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
            for (var i = 0; i < get_user.length; i++) {
                var Mark = get_user[i].getElementsByClassName('simplemarker-mark')[0];
                try {
                    var Mark_Date = Mark.outerHTML.match(/..\/.*?\/..(?=<)|..\/.*?\/.(?=<)/g);
                } catch {}
                var reg = RegExp(/😀|💚|💛|🧡|💙|💧|🌳|🐠|🆇|🆆|☸️|☪️️|🕉️|🦖|🈲|👿|🐌|🦐|👤|👶|☸️|☪️️|🕉️|🎈|◾️|◼️|🔴/);
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
                    get_user[i].setAttribute("style", "display:none;");
                } else {}
            }
            var get_group_user = document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"]')
            for (var i = 0; i < get_group_user.length; i++) {
                var Mark = get_group_user[i].getElementsByClassName('simplemarker-mark')[0];
                try {
                    var Mark_Date = Mark.outerHTML.match(/..\/.*?\/..(?=<)|..\/.*?\/.(?=<)/g);
                } catch {}
                var reg = RegExp(/😀|💚|💛|🧡|💙|💧|🌳|🐠|🆇|🆆|☸️|☪️️|🕉️|🦖|🈲|👿|🐌|🦐|👤|👶|☸️|☪️️|🕉️|🎈|◾️|◼️|🔴/);
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
                    var Mark_Date = Mark.outerHTML.match(/..\/.*?\/..(?=<)|..\/.*?\/.(?=<)/g);
                } catch {}
                var reg = RegExp(/😀|💚|💛|🧡|💙|💧|🌳|🐠|🆇|🆆|☸️|☪️️|🕉️|🦖|🈲|👿|🐌|🦐|👤|👶|☸️|☪️️|🕉️|🎈|◾️|◼️|🔴/);
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
        for (var i = 0; i < get_user.length; i++) {
            var Mark = get_user[i].getElementsByClassName('simplemarker-mark')[0];
            var reg = RegExp(/💚|🐠|💧|🌳/);
            try {
                if (Mark.outerHTML.match(reg)) {
                    var aa = "TRUE";
                }
            } catch {
                var aa = "FALSE";
            }
            if (aa != "TRUE") {
                get_user[i].setAttribute("style", "display:none;");
            } else {}
        }
        var get_group_user = document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"]');
        for (var i = 0; i < get_group_user.length; i++) {
            var Mark = get_group_user[i].getElementsByClassName('simplemarker-mark')[0];
            var reg = RegExp(/💚|🐠|💧|🌳/);
            try {
                if (Mark.outerHTML.match(reg)) {
                    var aa = "TRUE";
                }
            } catch {
                var aa = "FALSE";
            }
            if (aa != "TRUE") {
                get_group_user[i].setAttribute("style", "display:none;");
            } else {}
        }
        var get_search_user = document.querySelectorAll(".d2edcug0.glvd648r.o7dlgrpb > div > div");
        for (var i = 0; i < get_search_user.length; i++) {
            var Mark = get_search_user[i].getElementsByClassName('simplemarker-mark')[0];
            var reg = RegExp(/💚|🐠|💧|🌳/);
            try {
                if (Mark.outerHTML.match(reg)) {
                    var aa = "TRUE";
                }
            } catch {
                var aa = "FALSE";
            }
            if (aa != "TRUE") {
                get_search_user[i].setAttribute("style", "display:none;");
            } else {}
        }
    }
    // 检测不活跃账户
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
        new_page.document.write("不活跃账号检测完成。");
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
                                       let facebookID = text.match(/(?<="userID":")([0-9]+)/g)[0]
                                       window.open("https://m.facebook.com/privacy/touch/block/confirm/?back_uri&bid=" + facebookID + "&source=privacy_settings_page", "_blank")
                                   } catch {
                                       document.getElementById("error").innerHTML += "出错: " + url[k] + "<br>";
                                   }
                               }, 100 * k);
                           })(k);
                       }
                   }
               </script>
               </head>
            <div id="facebook_block_user" style="position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);border:1px solid;padding:3px 12px;border-radius:10px;color:#fff;background-color:#99CCFF;z-index:9999;font-size:16px;width:300px;height:200px;">
            <textarea id="block_url" style="display: block;margin-left: auto;margin-right: auto; margin-top:10px;width:280px;height:145px;resize:none;font-size:16px;" placeholder="请输入链接, 一行一个"></textarea>
            <button style="float:right;margin-top:4px;border: 1px solid;padding: .3rem .75rem;font-size: .9rem;line-height: 1.5;border-radius: .75rem;color: #fff;background-color: #336699;border-color: #007bff;" onclick="confirm_block()"><b>确认</b></button>
            <div id="error" style="float:left;background-color:red;"></div>
 `;
            if ($("#facebook_block_user").length == 0)
                $("body").prepend(facebook_block_user);
        });

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
                document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + g + "</td><td>" + account + "</td><td>" + [i] + "</td><td>" + k + "</td><td>" + url + "</td></tr></tbody></table>");
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
                var url = c[i].match(/http.+(?=" role="link")/g);
                var k = c[i].match(/(?<=dir="auto">).+/g);
                (function(i) {
                    document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + g + "</td><td>" + f[0] + "</td><td>" + i + "</td><td>" + k + "</td><td>" + url + "</td></tr></tbody></table>");
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
                                 var num = Math.floor(Math.random() * (m - n + 1) + n)
                                 return num
                             }
                             var ramdom_number = getRandom(1000, 2500)
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
                                 var num = Math.floor(Math.random() * (m - n + 1) + n)
                                 return num
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
                             }, 1000);
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
                      </div>
        `;
            if ($("#facebook_tools").length == 0)
                $("body").prepend(new_button);
        });
    }
    // 列印所有小组
    else if (all_group == "groups_browse") {
        var get_data = get_html.match(/(?<=<div class="_7hkf _3qn7 _61-3 _2fyi _3qng">).*?(?=<\/div>)/g);
        for (var i = 0; i < get_data.length; i++) {

            var group_name = get_data[i].match(/(?<=<div class="h3z9dlai ld7irhx5 pbevjfx6 igjjae4c">).*/g);
            // var group_name = get_data[i].match(/(?<=<div class=" _52je _52jb _52jh">).*/g);
            var group_url = get_data[i].match(/(?<=<a class="_7hkg" href=").*?(?=\/\?ref=group_browse">)/g);
            document.write("<table><tbody><tr><td>" + group_name + "</td><td>https://www.facebook.com" + group_url + "</td></tr></tbody></table>");
        }
        //        var d = document.documentElement.outerHTML;
        //        var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
        //        document.open();
        //        document.clear();
        //        document.close();
        //        for (var i = 0; i < e.length; i++) {
        //            document.write(e[i]);
        //        }
    }
    // 小组信息
    else if (group == "groups") {
        var f = prompt("请输入点赞类型，留空则列印小组信息。", "");
        if (f != null && f != "") {
            var b = get_html.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g);
            for (var i = 0; i < b.length; i++) {
                document.write(b[i]);
            }
            var c = document.documentElement.outerHTML;
            var rt = c.match(/<div class="ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j">.*?<div class="q9uorilb">.*?<\/a><\/div>/g);
            document.open();
            document.clear();
            document.close();
            for (var k = 0; k < rt.length; k++) {
                var v = rt[k].match(/(?<=xlink:href=").*?(?=")/g);
                var e = rt[k].match(/(?<=class=""><a aria-label=").*?(?=")/g)
                var d = "https://www.facebook.com/" + rt[k].match(/(?<=lrazzd5p" href="\/groups\/.*?\/user\/).*?(?=\/.__cf|.amp)/g);
                document.write("<table><tbody><tr><td>=IMAGE(\"" + v + "\")</td><td>" + f + "</td><td><a href=\"" + d + "\">" + e + "</a></td><td>" + d + "</td></tr></tbody></table>");
            }
            var g = document.documentElement.outerHTML;
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
        } else {
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
    // 转换数字ID
    else if (conversion_num_id == "?cnumid" || conversion_num_id == "%3Fcnumid") {
        var person = prompt("请输入", "");
        var url = person.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
        for (var k = 0; k < url.length; k++) {
            (function(k) {
                setTimeout(async function() {
                    let response = await fetch(url[k])
                    let text = await response.text()
                    try {
                        let facebookID = text.match(/(?<="userID":")([0-9]+)/g)[0]
                        document.write("" + facebookID + "<br>");
                    } catch {
                        document.write("<br>");
                    }
                }, 1500 * k);
            })(k);
        }
    }
    // 转换字母ID
    else if (conversion_real_id == "?crealid" || conversion_real_id == "%3Fcrealid") {
        var person = prompt("请输入", "");
        var url = person.match(/[0-9].+/g);
        for (var k = 0; k < url.length; k++) {
            (function(k) {
                setTimeout(async function() {
                    let response = await fetch(url[k])
                    let text = await response.text()
                    try {
                        let facebookID = text.match(/(?<="userVanity":").*?(?=")/g)[0]
                        if (facebookID.length == 0) {
                            facebookID = url[k].replace(/.+com\//g, "");
                            document.write("<a href=\"https://www.facebook.com/profile.php?id=" + facebookID + "\">https://www.facebook.com/profile.php?id=" + facebookID + "</a><br>");
                        } else {
                            document.write("<a href=\"https://www.facebook.com/" + facebookID + "\">https://www.facebook.com/" + facebookID + "</a><br>");
                        }
                    } catch {
                        document.write("<br>");
                    }
                }, 1500 * k);
            })(k);
        }
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
