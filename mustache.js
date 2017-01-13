var mustache = require("mustache");

result = mustache.render("Hello {{first_name}} {{last_name}}",
		{
			"first_name": "Divya",
			"last_name": "K"
		}
)

console.log(result);