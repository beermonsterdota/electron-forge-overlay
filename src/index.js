const { app, BrowserWindow } = require('electron')
const config = require(process.resourcesPath + '/config.json')
// require('./../config.json')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    transparent: true,
    frame: false,
    resizable: false,
    zoomFactor: 1,
    alwaysOnTop: true,
    // fullscreen & kiosk - позволяют скрыть таскбар
    fullscreen: true,
    kiosk: true,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  win.setIgnoreMouseEvents(true)
  win.setAlwaysOnTop(true, 'screen-saver')
  win.setVisibleOnAllWorkspaces(true)
  win.setMenuBarVisibility(false)

  win.loadURL(config.url)
}
app.commandLine.appendSwitch('high-dpi-support', 1)
app.commandLine.appendSwitch('force-device-scale-factor', 1)
app.whenReady().then(() => {
  createWindow()
})
