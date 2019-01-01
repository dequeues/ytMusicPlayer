/* eslint-disable capitalized-comments */
const {globalShortcut} = require('electron');

module.exports = window => {
  globalShortcut.register('MediaPlayPause', () => {
    window.webContents.send('media:playpause');
  });

  globalShortcut.register('MediaStop', () => {
    window.webContents.send('media:stop');
  });

  globalShortcut.register('MediaNextTrack', () => {
    window.webContents.send('media:next');
  });

  globalShortcut.register('MediaPreviousTrack', () => {
    window.webContents.send('media:prev');
  });

  globalShortcut.register('VolumeUp', () => {
    window.webContents.send('media:volume_up');
  });

  globalShortcut.register('VolumeDown', () => {
    window.webContents.send('media:volume_down');
  });

  globalShortcut.register('VolumeMute', () => {
    window.webContents.send('media:volume_mute');
  });
};
