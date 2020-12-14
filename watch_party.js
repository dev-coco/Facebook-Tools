var check_url = location.href;
var watch_party = check_url.match(/\/wp\/|watchparty/g);
if (watch_party == "watchparty" || watch_party == "/wp/") {
    $(document).ready(function() {
        new_button = `
                        <head>
                        <meta charset="utf-8">
                        <link rel="stylesheet" type="text/css" href="https://dev-coco.github.io/css/Facebook-Tools.css">
                        <script>
                          // 邀请在线好友1-3s
                          function invite_online_fast() {
                        try {
                              var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                        } catch {
                        var iframeDocument = document;
                        }
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
                              var ramdom_number = getRandom(1000, 3000)
                              alert("在线用户：" + online.length);
                              for (var i = 0; i < online.length; i++) {
                                  (function (i) {
                                      setTimeout(function () {
                                          inputs[i].click();
                                          document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                      }, ramdom_number * i);
                                  })(i);
                              }
                          }
                          // 邀请在线好友5-8s
                          function invite_online_normal() {
                        try {
                              var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                        } catch {
                        var iframeDocument = document;
                        }
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
                              var ramdom_number = getRandom(5000, 8000)
                              alert("在线用户：" + online.length);
                              for (var i = 0; i < online.length; i++) {
                                  (function (i) {
                                      setTimeout(function () {
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
                              var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                        } catch {
                        var iframeDocument = document;
                        }
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
                                  (function (i) {
                                      setTimeout(function () {
                                          inputs[i].click();
                                          document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                      }, ramdom_number * i);
                                  })(i);
                              }
                          }
                          // 邀请成员1-3s
                          function invite_fast(e) {
                              clearTimeout(timeOut);
                              timeOut = setTimeout(function () {
                                                   try {
                                  var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                                                   } catch {
                                                   var iframeDocument = document;
                                                   }
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
                                  var ramdom_number = getRandom(1000, 3000)
                                  for (var i = 0; i < inputs.length; i++) {
                                      (function (i) {
                                          setTimeout(function () {
                                              inputs[i].click();
                                              document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                          }, ramdom_number * i);
                                      })(i);
                                  }
                              }, time)
                          }
                          // 邀请成员5-8s
                          function invite_normal() {
                        try {
                              var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                        } catch {
                        var iframeDocument = document;
                        }
                              try {
                                  var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                              } catch {
                                  var inputs = document.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
                              }

                              function getRandom(n, m) {
                                  var num = Math.floor(Math.random() * (m - n + 1) + n)
                                  return num
                              }
                              var ramdom_number = getRandom(5000, 8000)
                              for (var i = 0; i < inputs.length; i++) {
                                  (function (i) {
                                      setTimeout(function () {
                                          inputs[i].click();
                                          document.getElementById("invite_count").innerHTML = "已邀请：" + [i + 1];
                                      }, ramdom_number * i);
                                  })(i);
                              }
                          }
                          // 开包厢节省CPU
                          function CPU_save() {
                        try {
                              var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
                        } catch {
                        var iframeDocument = document;
                        }
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
                              var auto_count_comment = setInterval(function () {
                                  
                                  try {
                                      var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
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
} else {

}
