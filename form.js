$.fn.uiForm = function(options) {

	var opts = $.extends({}, $.fn.uiForm.defaults, options);

	var form = {

		init: function() {

			console.log('aa');

		},

		activeForm: function() {

			console.log('message');

		}

	};

	form.init();

	return this;

};

$.fn.uiForm.defaults = {



};