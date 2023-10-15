const { app, BrowserWindow } = require('electron')
const config = require(process.resourcesPath + '/config.json')
const { GlobalKeyboardListener } = require('node-global-key-listener')

// const config = require('C:\\Git\\electron-forge-overlay/config.json')

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
  const listener = new GlobalKeyboardListener()
  listener.addListener((event, down) => {
    if (down['LEFT CTRL'] && event.state === 'UP' && (event.name === 'R' || event.name === 'F5')) {
      console.log('refreshing overlay')
      win.reload()
    }
  })
}
app.commandLine.appendSwitch('high-dpi-support', 1)
app.commandLine.appendSwitch('force-device-scale-factor', 1)
app.whenReady().then(() => {
  createWindow()
})
