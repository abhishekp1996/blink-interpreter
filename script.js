var btn = document.getElementById('run');
btn.addEventListener('click', main);

function main() {
  var input = document.getElementById('input').value,
      output = document.getElementById('output');
  
  //Flushing the output
  output.value = '';
  
  var inputLines = input.split(';');

  var keywords = ['end', 'if', 'print', 'set', 'use'];
  var condition = true;
  
  inputLines.forEach(function(line) { 
    line = line.trim();
    var inputLine = line.split(' ');
    if(keywords.includes(inputLine[0])) {
      if(inputLine[0] == 'if') condition = (inputLine[1] == 'true');
      if(inputLine[0] == 'end') condition = true;
      if(condition) process(inputLine);
      else return;
    } else {
      output.value = 'Error!';
      return;
    }
  });
  
}

function process(line) {
  var keyword = line[0];
  
  if(keyword == 'use') {
    declareVar(line[1]);
  }
  else if(keyword == 'set') {
    setVar(line[1], line[2]);
  }
  else if(keyword == 'print') {
    print(line[1]);
  }
  
  else if(keyword == 'if') {
    
  }  
  return;
}

function declareVar(name) {
  name = String(name);
  window[name] = 0;
}

function setVar(name, value) {
  name = String(name);
  if(Number(value)) window[name] = Number(value);
}

function print(name) {
  output.value += window[name] + '\r\n';
}

function decision(condition, index) {
  if(!condition) {
    
  }
    
}