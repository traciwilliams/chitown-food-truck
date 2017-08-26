$(document).ready(function() {
	$(".button").click(function(){
		var value = $(this).attr("data-filter");
		if (value == "all")
		{
			$(".filter").show();
		}
		else 
		{
			$(".filter").not("." + value).hide()
			$(".filter").filter("." + value).show()
		}
	})

});