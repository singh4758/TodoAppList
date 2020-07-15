localStorage.storage;
var input_text = document.getElementById('input-text');


function show(){
	if(localStorage.storage!=undefined){
		var arr = JSON.parse(localStorage.storage);
		var list_container = document.getElementById('list-container');
		for(var i =0;i<arr.length;i++){
			if (arr[i]['checked']) {
				var str = '<div class="list"><span class="check-box color" id='+i+' onClick="select(this.id)"><input type="checkbox"></span><span class="texttodo">'
				+arr[i]['input_text']+'</span><span class="delete" id='+i+' onClick="deleted(this.id)"><i class="far fa-times-circle"></i></span></div>'
			}
			else{
				var str = '<div class="list"><span class="check-box" id='+i+' onClick="select(this.id)"><input type="checkbox"></span><span class="texttodo">'
				+arr[i]['input_text']+'</span><span class="delete" id='+i+' onClick="deleted(this.id)"><i class="far fa-times-circle"></i></span></div>'
			}
			var li = document.createElement('li');
			li.innerHTML = str;
			list_container.append(li);
		}
	}
}

show();

input_text.addEventListener('keyup',function(event){

	if(event.keyCode===13){

		if (input_text.value=="") {
			window.alert("Please input valid String");
			return;
		}

		if (input_text.value.length>23) {
			input_text.value ="";
			window.alert("Please input less than 23 word");
			return;
		}

		if ((localStorage.storage==undefined)) {
			localStorage.storage = JSON.stringify([]);
		}
		var store = {};
		var arr = JSON.parse(localStorage.storage);
		var list_container = document.getElementById('list-container');
		store["input_text"] = input_text.value;
		store["checked"] = false;
		arr.push(store);
		var str = '<div class="list"><span class="check-box" id='+ (arr.length-1) +' onClick="select(this.id)"><input type="checkbox"></span><span class="texttodo">'
			+arr[arr.length-1]["input_text"]+'</span><span class="delete" id='+(arr.length-1)+' onClick="deleted(this.id)"><i class="far fa-times-circle"></i></span></div>'
		var li = document.createElement('li');
		li.innerHTML = str;
		list_container.append(li);
		input_text.value="";
		localStorage.storage = JSON.stringify(arr);
		taskleftcount();
	}
});

var completeAllTask = document.getElementById('complete');
completeAllTask.addEventListener('click',function(){
	var arr = JSON.parse(localStorage.storage);
	var check = document.getElementsByClassName('check-box');
	for(var i =0;i<arr.length;i++){
		arr[i]['checked']=true;
		check[i].className = "check-box color";
	}

	localStorage.storage = JSON.stringify(arr);
	taskleftcount();

});

function select(id){
	var arr = JSON.parse(localStorage.storage);
	var selected = document.getElementById(id);
	arr[id]["checked"] = true;
	if (selected.className=="check-box") {
		selected.className="check-box color";
		arr[id]["checked"] = true;
	}
	else{
		selected.className="check-box";
		arr[id]["checked"] = false;
	}
	localStorage.storage = JSON.stringify(arr);
	taskleftcount();
}

var clear = document.getElementById('clear');
clear.addEventListener('click',function(){
	var arr = JSON.parse(localStorage.storage);
	for(var i =0;i<arr.length;i++){
		if (arr[i]["checked"]) {
			arr.splice(i,1);
			i--;
		}
	}
	localStorage.storage = JSON.stringify(arr);

	var list_container = document.getElementsByTagName('li');
	for (var i = 0; i < list_container.length; i++) {
		list_container[i].remove();
		i--;
	}
	show();
	taskleftcount();

});

function deleted(id){
	var arr = JSON.parse(localStorage.storage);
	arr.splice(id,1);
	localStorage.storage = JSON.stringify(arr);
	var list_container = document.getElementsByTagName('li');
	for (var i = 0; i < list_container.length; i++) {
		list_container[i].remove();
		i--;
	}
	show();
	taskleftcount();
}

function taskleftcount(){
	var task_left = document.getElementById('task-left');
	var arr = JSON.parse(localStorage.storage);
	var count =0;
	for (var i = 0; i < arr.length; i++) {
		if(!arr[i]["checked"]){
			count++;
		}
	}
	var str = count+' '+'task left';
	task_left.innerHTML = str;
}


var all = document.getElementById('all');
all.addEventListener('click',function(){
	var list_container = document.getElementsByTagName('li');
	for (var i = 0; i < list_container.length; i++) {
		list_container[i].remove();
		i--;
	}
	show();
});



var uncompleted = document.getElementById('uncompleted');
uncompleted.addEventListener('click',function(){
	var list_container = document.getElementsByTagName('li');
	for (var i = 0; i < list_container.length; i++) {
		list_container[i].remove();
		i--;
	}
	showuncompleted();
});

function showuncompleted(){
	if(localStorage.storage!=undefined){
		var arr = JSON.parse(localStorage.storage);
		var list_container = document.getElementById('list-container');
		for(var i =0;i<arr.length;i++){
			if (!arr[i]['checked']) {
				var str = '<div class="list"><span class="check-box" id='+i+' onClick="select(this.id)"><input type="checkbox"></span><span class="texttodo">'
				+arr[i]['input_text']+'</span><span class="delete" id='+i+' onClick="deleted(this.id)"><i class="far fa-times-circle"></i></span></div>'
				var li = document.createElement('li');
				li.innerHTML = str;
				list_container.append(li);
			}
		}
	}
}

var completed = document.getElementById('completed');
completed.addEventListener('click',function(){
	var list_container = document.getElementsByTagName('li');
	for (var i = 0; i < list_container.length; i++) {
		list_container[i].remove();
		i--;
	}
	showcompleted();
});

function showcompleted(){
	if(localStorage.storage!=undefined){
		var arr = JSON.parse(localStorage.storage);
		var list_container = document.getElementById('list-container');
		for(var i =0;i<arr.length;i++){
			if (arr[i]['checked']) {
				var str = '<div class="list"><span class="check-box color" id='+i+' onClick="select(this.id)"><input type="checkbox"></span><span class="texttodo">'
				+arr[i]['input_text']+'</span><span class="delete" id='+i+' onClick="deleted(this.id)"><i class="far fa-times-circle"></i></span></div>'
				var li = document.createElement('li');
				li.innerHTML = str;
				list_container.append(li);
			}
		}
	}
}