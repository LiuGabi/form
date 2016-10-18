(function($) {

	// $.fn.uiForm.defaults = {};

	$.fn.uiForm = function(options) {


		var opts = $.extend({}, $.fn.uiForm.defaults, options || {});

		var parent = $(this);

		var init = function() {

			parent.on('click touchstart', function(e) {

				e.stopPropagation();

				$(this).addClass(opts.activeClass);
				$(this).addClass(opts.labelUpClass);


				$(this).parent().siblings().children('.' + opts.activeClass).removeClass(opts.activeClass);

				
				var arr = $(this).parent().siblings().children('.' + opts.formClass);
				arr.each(function() {

					var value = $(this).children('.' + opts.fieldClass).val();
					if(value == 0) {
						$(this).removeClass(opts.labelUpClass);
					}

				});

			});

			$('html').not(parent.is('.' + opts.activeClass)).on('click touchstart', function(e) {

				e.stopPropagation();
				parent.removeClass(opts.activeClass);

				var arr = parent;
				arr.each(function() {

					var value = $(this).children('.' + opts.fieldClass).val();
					if(value == 0) {
						$(this).removeClass(opts.labelUpClass);
					}

				});
				

			});

		};

		var event = {

			click: function() {

			},

			submit: function() {

			},

			success: function() {

			}

		}

		

		init();

	};

})(jQuery);