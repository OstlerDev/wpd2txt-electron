const electron = require('electron');

const {app} = electron

let window

const createWindow = () => {
	// window = new electron.BrowserWindow(electron.screen.getPrimaryDisplay().workAreaSize)
	window = new electron.BrowserWindow({ width: 600, height: 300 })
	// window.openDevTools();

	window.loadURL(`file://${__dirname}/index.html`)
	// window.webContents.openDevTools()

	window.on('closed', () => { window = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', app.quit)

app.on('activate', () => {
	createWindow()
})