const { app, BrowserWindow } = require('electron')
const fs = require("fs");

const createWindow = () => {

  const win = new BrowserWindow({
    width: 730,
    height: 250,
    //frame : false,
    //transparent: true,

    webPreferences: {
      /*preload: path.join(__dirname, 'preload.js')*/
      nodeIntegration: true,
      contextIsolation: false
     }
  })
  win.setPosition(1200,0)
  win.loadFile('index.html')
  //win.setSkipTaskbar(true)
  win.webContents.send("class",getClass().classNum)
  console.log(getClass().classNum )
 
}

const ipcMain = require('electron').ipcMain;
  
function getClass() {
  
  const newFile_path = "config.json"

  fs.exists(newFile_path, function(exists) {
    //console.log(exists);
    if (!exists) {
      $(".errroInformation").show();
      $(".errroInformation").text("文件不存在");
      return;
    } else {
      let result = JSON.parse(fs.readFileSync(newFile_path));   //读取本地json
      //console.log(result.class)
      classNum = result.classnum
      return result;
    }
  }
)}

ipcMain.on('class', function(event, arg) {
  //console.log(arg);  // prints "我是渲染进程的test2"
  event.sender.send('class', getClass());

});




app.whenReady().then(() => {

  createWindow()

})