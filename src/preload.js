/* global document */
const {ipcRenderer} = require('electron');

ipcRenderer.on('media:playpause', () => {
  document.getElementById('play-pause-button').click();
});

ipcRenderer.on('media:stop', () => {
  // TODO Will need to check if is not stopped already
  return false;
});

ipcRenderer.on('media:next', () => {
  document.getElementsByClassName('next-button')[0].click();
});

ipcRenderer.on('media:prev', () => {
  document.getElementsByClassName('previous-button')[0].click();
});

ipcRenderer.on('media:volume_up', () => {
  const element = document.getElementById('volume-slider');
  const current = parseInt(element.value, 10);

  if (Number.isInteger(current) && current <= 95) {
    element.value = current + 5;
  }
});

ipcRenderer.on('media:volume_down', () => {
  const element = document.getElementById('volume-slider');
  const current = parseInt(element.value, 10);

  if (Number.isInteger(current) && current >= 5) {
    element.value = current - 5;
  }
});

ipcRenderer.on('media:volume_mute', () => {
  document.getElementsByClassName('volume')[0].click();
});
