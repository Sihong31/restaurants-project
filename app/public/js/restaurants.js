$(function() {
	$.getJSON('api', updateFeedback);

	$(".restaurantForm").submit(function(e) {
		e.preventDefault();
		$.post('api', {
			name: $("#form-name").val(),
			location: $("#form-location").val(),
			category: $("#form-category").val(),
			favorite: $("#form-favorite").val(),
			description: $("#form-description").val(),
		}, updateFeedback);
	});

	$("body").on("click", ".restaurant-block", function(e) {
		console.log("hello");
		if (e.target.className == 'glyphicon glyphicon-remove') {
			console.log(e)
			console.log(`*******************************`);
			console.log(e.target)
			console.log(`*******************************`);
			console.log(e.target.className)
			console.log(e.target.id);
			$.ajax({
				url: `api/${e.target.id}`,
				type: 'DELETE',
				success: updateFeedback
			});
		}
	});


	function updateFeedback(data) {
		let output = '';
		$.each(data, function(key,item) {
			console.log(item.name);
			output += `
				<div class="restaurant-block">
					<button class="feedback-delete btn btn-xs btn-danger"><span id="${key}" class="glyphicon glyphicon-remove"></span></button>
					<h2>${item.name} </h2>
					<h3>${item.location}</h3>
					<p><strong>Category:</strong>${item.category}</p>
					<p><strong>Your favorite:</strong>${item.favorite}</p>
					<p><strong>Your description:</strong>${item.description}</p>
				</div>		
			`
		});
		$(".restaurant-output").html(output);
	}
});