// sample1
// $(function(){
// 	 $("#myTable").tablesorter(); 
// });

// sample2
// $(function(){
// 	$("#myTable").tablesorter({
// 		headers:{
// 			1:{ sorter:false },
// 			2:{ sorter:false }
// 		}
// 	});
// });

// sample3
// $(function(){
// 	$("#pref").selectable();
// });

// sample4
// $(function(){
// 	$("#pref").selectable({
// 		set:"slideDown",
// 		out:"slideUp",
// 		inDuration:"fast",
// 		outDuration:"fast",
// 		opacity:.9
// 	});
// });

//sample5
$(function(){
	$('#fisheye').Fisheye({
		maxWidth: 80,
		items: 'a',
		itemsText: 'span',
		container: '.fisheyeContainter',
		itemWidth: 80,
		proximity: 90,
		halign : 'center'
	});
});