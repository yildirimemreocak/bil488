var Interval;
$(document).ready(function()
{
	var searchBar;
	var tweetNumberBar;
	var refreshTimeBar;
	$('button').click(function()
	{
		clearInterval(Interval);
		time();
		Interval = setInterval(function()
		{ 
			time();
		},refreshTimeBar*1000);
	function time () 
	{
		refreshTimeBar =$("#refreshTimeBar").val();
		tweetNumberBar = $("#tweetNumberBar").val();
		searchBar = $("#searchBar").val();
			$("#results").empty();
			$.getJSON('http://search.twitter.com/search.json?callback=?&q='+searchBar+ '&rpp=' + tweetNumberBar + '&result_type=recent',function(json)
			{
				$(".load").hide();
				$.each(json.results,function(i,tweet)
					{
						$("#results").append('<p><img src="'+ tweet.profile_image_url+'"width="48" height="48"/><a href="https://twitter.com/' + tweet.from_user+ '" target = "_blank">' +tweet.from_user_name + '</a><b> @' + tweet.from_user + '</b><b> (</b><b>'+ tweet.created_at + '</b><b>)</br></b><b>' + tweet.text+ '</b></p></br>');			
					});
			});		
	}
	});
});