const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
      })
    
      win.loadFile('index.html')
    }

    app.whenReady().then(() => {
      createWindow()
   })


const { BrowserWindow } = require('electron')
const win = new BrowserWindow({ width: 800, height: 600, frame: false })
win.loadFile('index.html')

  const { app,BrowserWindow } = require('electron')
  const createWindow = () =>{
    const win = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    frame: false })
    win.loadFile('index.html')
  }
    app.whenReady().then(() => {
      createWindow()
    })

    //这里存代码的不用管