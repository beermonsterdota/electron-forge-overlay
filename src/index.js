const { app, BrowserWindow } = require('electron')
const config = require(process.resourcesPath + '/config.json')

// const config = require('F:\\git\\electron-forge-overlay\\config.json')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    transparent: true,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: false,
    autoHideMenuBar: true,
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
