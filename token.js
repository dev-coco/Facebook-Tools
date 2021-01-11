var get_html = document.documentElement.outerHTML;
var token = get_html.match(/(?<=accessToken\\":\\").*?(?=\\",\\"useLocal)/g);
document.write(token);
