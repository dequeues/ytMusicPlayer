const {ipcRenderer, remote} = require('electron');

/* global document */
require('electron-titlebar'); // eslint-disable-line import/no-unassigned-import

const webview = document.getElementById('webview');

ipcRenderer.on('log', (event, message) => {
  console.log(message);
});

ipcRenderer.on('debug:console', () => {
  remote.BrowserWindow.getFocusedWindow().webContents.openDevTools();
});

webview.addEventListener('dom-ready', () => {
  //webview.openDevTools();
  ipcRenderer.on('media:playpause', () => {
    webview.send('media:playpause');
  });

  ipcRenderer.on('media:stop', () => {
    webview.send('media:stop');
  });

  ipcRenderer.on('media:next', () => {
    webview.send('media:next');
  });

  ipcRenderer.on('media:prev', () => {
    webview.send('media:prev');
  });

  ipcRenderer.on('media:volume_up', () => {
    webview.send('media:volume_up');
  });

  ipcRenderer.on('media:volume_down', () => {
    webview.send('media:volume_down');
  });

  ipcRenderer.on('media:volume_mute', () => {
    webview.send('media:volume_mute');
  });
});
