function demo(){
	var aLi = $('#about_me_demobox > li');	
	var oLeft = $('#about_me_demobox_left');
	var oRight = $('#about_me_demobox_right');
	
	var arr=[];
	
	aLi.each(function(index, ele){
		arr.push(ele.className);	
	})
	
	oRight.on('click', function (){
		arr.unshift(arr.pop());
		aLi.each(function(index, ele){
			$(ele).attr('class', arr[index]);
		})
	});
	
	oLeft.on('click', function (){
		arr.push(arr.shift());
		aLi.each(function(index, ele){
			$(ele).attr('class', arr[index]);
		})
	});
}