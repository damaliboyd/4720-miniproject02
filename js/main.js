const data = [
  {
      action: "shopping",
      time: 3,
      prod: false
  },
  {
      action: "email",
      time: 13,
      prod: true
  },
  {
      action: "set up workspace",
      time: 83.5,
      prod: true
  },
  {
      action: "youtube",
      time: 33,
      prod: false
  },
  {
      action: "vscode",
      time: 100.5,
      prod: true
  },
  {
      action: "debug",
      time: 3,
      prod: true
  },
  {
      action: "mysql workbench",
      time: 35,
      prod: true
  },
  {
      action: "canvas",
      time: 6,
      prod: true
  },
  {
      action: "github",
      time: 2,
      prod: true
  },
  {
      action: "google",
      time: 5,
      prod: true
  },
  {
      action: "slack",
      time: 1,
      prod: true
  },
  {
      action: "notion",
      time: 3,
      prod: true
  },
  {
      action: "zoom",
      time: 12,
      prod: true
  },
  
]

function getAction(){
  var temp = [];
  for ( var i = 0; i < data.length; i++){
    temp.push(data[i].action);
  }
  return temp;
}

function getTime(){
  var temp = [];
  for ( var i = 0; i < data.length; i++){
    temp.push(data[i].time);
  }
  return temp;
}
function getProd(){
  var temp = [];
  for ( var i = 0; i < data.length; i++){
    temp.push(data[i].prod);
  }
  return temp;
}

function sortData (sortby) {
  var sData = data;
  if (sortby == 'time'){
    return sData = data.sort(function(a, b){return a.time < b.time});
  }
  else if (sortby == 'prod'){
    return sData = data.sort(function(a){return a.prod == true});
  }
  else{
    return sData = data.sort(function (a, b) {return ('' + a.action).localeCompare(b.action); });
  }
  
}

var ctx = document.getElementById('chart01').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: getAction(),
    datasets: [{
      label: 'Time',
      data: getTime(),
      backgroundColor: "rgba(153,255,51,0.4)"
    }]
  }
});

function piechart(){
  
  var  pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: getAction(),
        datasets: [{
          backgroundColor: [
            "#094074",
            "#3c6997",
            "#5adbff",
            "#ffdd4a",
            "#fe9000",
            "#020887",
            "#95b2b0",
            "#c6ebbe",
            "#ffffff",
            "#363732",
            "#f1a40a",
            "#e74c3b",
            "#34495f",
          ],
          data: getTime()
        }]
      }
    });
  }
  function barchart(){
  
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: getAction(),
          datasets: [{
            label: 'Time',
            data: getTime(),
            backgroundColor: "rgba(153,255,51,0.4)"
          }]
        }
      });
    
  }

document.getElementById("chartBtnP").addEventListener("click", piechart()); 
document.getElementById("chartBtnB").addEventListener("click", barchart()); 


function getTotal(){
  var temp = 0;
  for ( var i = 0; i < data.length; i++){
    temp += data[i].time;
  }
  return temp;
}

function getTotalProd(){
  var temp = 0;
  for ( var i = 0; i < data.length; i++){
    if (data[i].prod == true){
      temp += data[i].time;
    }
    
  }
  return temp;
}

function getTotalNProd(){
  var temp = 0;
  for ( var i = 0; i < data.length; i++){
    if (data[i].prod != true){
      temp += data[i].time;
    }
  }
  return temp;
}

var addtotal = document.getElementById('total');
addtotal.innerHTML = getTotal() + " min";

var addProd = document.getElementById('prod');
addProd.innerHTML = getTotalProd()+ " min";

var addnProd = document.getElementById('nprod');

addnProd.innerHTML = getTotalNProd() + " min";

var addTable = document.getElementById('data-table');


sortedData = sortData('time');
var leastprod = document.getElementById('lprod');
leastprod.innerHTML = sortedData[sortedData.length - 1].action;

var mostprod = document.getElementById('mprod');
mostprod.innerHTML = sortedData[0].action;




function createtable(sortby){
  tData = sortData(sortby);
  var html = `
  <table class="striped">
  <thead>
    <tr>
      <th>Activity</th>
      <th>Time Spent</th>
      <th>Productive</th>
    </tr>
  </thead>
  </tbody>
  `
  for(var i = 0; i < tData.length; i++){
    html += "<tr>"; 
    html +=    "<td>"+tData[i].action+"</td>"
    html +=    "<td>"+tData[i].time+" min </td>"
    html +=    "<td>"+tData[i].prod+"</td>"
    html +=    "</tr>";
        
  }
  
  html += "</tbody></table>"
  
  addTable.innerHTML = html;
}

document.getElementById("nameBtn").addEventListener("click", createtable());
document.getElementById("timeBtn").addEventListener("click", createtable('time'));
document.getElementById("prodBtn").addEventListener("click", createtable('prod'));

createtable('time');

