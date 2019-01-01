const path = require('path');
const {Tray, Menu} = require('electron');

module.exports = (window, app) => {
  app.ytmusic.tray = new Tray(
    path.join(__dirname, '../assets/public/image/yt_2dE_icon.ico')
  );
  app.ytmusic.tray.setToolTip(app.getName());

  const contextMenu = Menu.buildFromTemplate([
    {
      label: app.getName()
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      }
    }
  ]);

  app.ytmusic.tray.setContextMenu(contextMenu);

  app.ytmusic.tray.on('double-click', () => {
    if (window.isMinimized()) {
      window.restore();
    } else {
      window.minimize();
    }
  });

  app.ytmusic.tray.setImage(
    path.join(__dirname, '../assets/public/image/yt_2dE_icon.ico')
  );
};
