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


	function updateFeedback(data) {
		let output = '';
		$.each(data, function(key,item) {
			console.log(item.name);
			output += `
				<h2>${item.name} </h2>
				<h3>${item.location}</h3>
				<p><strong>Category:</strong>${item.category}</p>
				<p><strong>Your favorite:</strong>${item.favorite}</p>
				<p><strong>Your description:</strong>${item.description}</p>
			`
		});
		$(".restaurant-output").html(output);
	}
});