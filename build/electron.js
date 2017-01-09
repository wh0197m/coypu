const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let window

function createWindow () {
  window = new BrowserWindow({ width: 450, height: 830 })

  window.loadURL(url.format({
    pathname: path.join(__dirname, '..', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})