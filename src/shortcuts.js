/* eslint-disable capitalized-comments */
const {globalShortcut} = require('electron');

module.exports = window => {
  const shortcuts = [
    {
      accelerator: 'MediaPlayPause',
      sendEvent: 'media:playpause'
    },
    {
      accelerator: 'MediaStop',
      sendEvent: 'media:stop'
    },
    {
      accelerator: 'MediaNextTrack',
      sendEvent: 'media:next'
    },
    {
      accelerator: 'MediaPreviousTrack',
      sendEvent: 'media:prev'
    },
    {
      accelerator: 'VolumeUp',
      sendEvent: 'media:volume_up'
    },
    {
      accelerator: 'VolumeDown',
      sendEvent: 'media:volume_down'
    },
    {
      accelerator: 'VolumeMute',
      sendEvent: 'media:volume_mute'
    },
    {
      accelerator: 'CommandOrControl+Shift+K',
      sendEvent: 'debug:console'
    }
  ];

  shortcuts.forEach(v => {
    globalShortcut.register(v.accelerator, () => {
      window.webContents.send(v.sendEvent);
    });

    if (globalShortcut.isRegistered(v.accelerator)) {
      const msg = `Registered ${v.accelerator}`;
      window.webContents.send('log', msg);
      console.log(msg);
    } else {
      const msg = `Unable to register ${v.accelerator}`;
      window.webContents.send('log', msg);
      console.log(msg);
    }
  });

  window.on('beforeunload', () => {
    globalShortcut.unregisterAll();
  });
};
