const path = require('path');
const {app, BrowserWindow} = require('electron');

const windowParams = {
  width: 1200,
  height: 800
};

app.on('ready', () => {
  app.ytmusic = {};
  app.setName('ytMusicPlayer');
  const window = new BrowserWindow({
    width: windowParams.width,
    height: windowParams.height,
    frame: false,
    icon: path.join(__dirname, '/assets/public/image/yt_2dE_icon.ico'),
    color: '#ffffff'
  });

  window.loadURL(path.join(`${__dirname}/assets/public/index.html`));

  window.webContents.once('dom-ready', () => {
    require('./src/shortcuts')(window);
    require('./src/tray')(window, app);
  });
});

/* ipcMain.on('close', event => {
  BrowserWindow.fromWebContents(event.sender).close();
}); */
