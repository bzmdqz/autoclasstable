const ipcRenderer = require('electron').ipcRenderer;
/*ipcRenderer.on('class', function(event, arg) {
  document.getElementById("picture").setAttribute("src","http://127.0.0.1:8080/getTimetable?class="+arg)
  console.log(arg); // prints "我是主进程的test1"
});*/
const ipc = require('electron').ipcRenderer;
const fs = require("fs");
const process = require("process")
const newFile_path = "./config.json"



fs.exists(newFile_path, function(exists) {
//console.log(exists);
if (!exists) {
  fs.writeFile(newFile_path,"{\n\"classNum\": 2213,\n \"host\":\"127.0.0.1\"\n}",(e)=> {})
  //$(".errroInformation").show();
  //$(".errroInformation").text("文件不存在");
  ipc.on("exit",function(event,data){ //如果没有数据需要传，可以不写参数
  console.log(data);
  })
  ipc.send("exit",data);
  //后面跟着的data就是自己想传的数据，不想传不写就可以了
  process.exit()
  return;
} else {
    result1 = JSON.parse(fs.readFileSync(newFile_path));   //读取本地json
  console.log(result1.class)
  classNum = result1.classnum
  document.getElementById("picture").setAttribute("src","http://"+result1.host+"/getTimetable/today?class="+result1.classNum)
  ipc.send("hereyoua","data");  //后面跟着的data就是自己想传的数据，不想传不写就可以了
  updateAnn(result1)
  }
}
)
function updateAnn(hostj){
    const annURI = "http://"+hostj.host+"/announcement/get"
    $.ajax({url:annURI,success:function(result){
        let annJSON = JSON.parse(result)
    }});
    jArray = annJSON.data
    console.log(data)
    jArray.array.forEach(element => {
      $("#ann").append("<h3>"+element+"</h3>")
    });
  }
  //updateAnn(hostj)