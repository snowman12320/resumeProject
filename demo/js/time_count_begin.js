console.warn = () => {};

var type = window.location.href.match(/angular|react|vue|wieldy-javascript/)[0];
var colors = {'react': 'Cyan', 'angular': 'Lime', 'vue': 'Crimson', 'wieldy-javascript': 'SkyBlue'};

var text_color = colors[type];
var message_box = document.createElement('div');
var time01, time02;

time01 = performance.now();
