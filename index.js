const { app, BrowserWindow } = require('electron')
const fs = require("fs");
const ipc = require('electron').ipcRenderer;

const createWindow = () => {

  const win = new BrowserWindow({
    width: 730,
    height: 250,
    frame : false,
    transparent: true,

    webPreferences: {
      /*preload: path.join(__dirname, 'preload.js')*/
      nodeIntegration: true,
      contextIsolation: false
     }
  })
  win.setPosition(1000,0)
  win.loadFile('index.html')
  win.setSkipTaskbar(true)
  //win.webContents.send("class",getClass().classNum)
  //console.log(getClass().classNum )
 
}

const ipcMain = require('electron').ipcMain;
  

ipcMain.on('exit', function(event, arg) {
  //console.log(arg);  // prints "我是渲染进程的test2"
  event.sender.send('class', getClass());
  process.exit()
});




app.whenReady().then(() => {

  createWindow()

})


const schedule = require('node-schedule');
 
const  scheduleCronstyle = ()=>{
    schedule.scheduleJob('30 * * * * *',()=>{
        console.log('11111');
        console.log('scheduleCronstyle:' + new Date());
        app.relaunch()
        app.exit()
    }); 
}
 
scheduleCronstyle();