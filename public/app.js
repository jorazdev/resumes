import entry from './build/entrypoints.json' assert {type: 'json'};

const appjs = entry.entrypoints.app.js
const appcss = entry.entrypoints.app.css

appjs.forEach(app => {
    const tag = document.createElement('script')
    tag.src = app
    tag.defer = true
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});


appcss.forEach(app => {
    const tag = document.createElement('link')
    tag.href = app
    tag.rel = 'stylesheet'
    const firstScriptTag = document.getElementsByTagName('link')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
