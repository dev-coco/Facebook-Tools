var get_html = document.documentElement.outerHTML;
var token = get_html.match(/(?<=accessToken\\":\\").*?(?=\\",\\"useLocal)/g)[0];
document.write(token);
