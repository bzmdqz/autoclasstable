const { app,BrowserWindow } = require('electron')
const fs = require("fs");

const createWindow = () =>{
  const win = new BrowserWindow({ 
  width: 800, 
  height: 600, 
  frame: false,
  transparent: true,
  
//  webPreferences: {
//    /*preload: path.join(__dirname, 'preload.js')*/
//    nodeIntegration: true,
//   }
  
  })
  win.loadFile('index.html')
}
  app.whenReady().then(() => {
    createWindow()
  })

 // win.loadFile('index.html')

function readFilePath(classname) {
  
  const newFile_path = path.join(__dirname, 'class.json').replace(/\\/g, "\/");

  fs.exists(newFile_path, function(exists) {
    console.log(exists? "文件存在" : "文件不存在");
    if (!exists) {
      $(".errroInformation").show();
      $(".errroInformation").text("文件不存在");
      return;
    } else {
      let result = JSON.parse(fs.readFileSync(newFile_path));   //读取本地json
    }
  }
)}

class action {
  constructor() {
    winControl(action); {
      const browserWindow = remote.getCurrentWindow();
      switch (action) {
        case 'minimize':
          browserWindow.minimize();
          break;
        case 'maximize':
          if (this.isMaximized) {
            // if (browserWindow.isMaximized()) {
            browserWindow.unmaximize();
          } else {
            browserWindow.maximize();
          }
          // this.isMaximized = browserWindow.isMaximized()
          this.isMaximized = !this.isMaximized;
          break;
        case 'close':
          browserWindow.close();
          break;
        default:
          break;
      }
    }
  }
}
