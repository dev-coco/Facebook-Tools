$(document).ready(function() {
    new_button = `
    <button style="border:1px solid;padding:3px 12px;font-size:18px;line-height:1.5;border-radius:10px;color:#fff;margin:9px;background-color:#007bff;border-color:#007bff;bottom:auto;left:auto;right:240px;z-index:9999;position:fixed;" onclick="start()">开始</button>
    <script>
    function start() {
        var autoscroll = setInterval(function() {
            window.scrollTo(0, document.body.scrollHeight)
        }, 1500);
    }
    </script>
    `;
    $("body").prepend(new_button);
});
