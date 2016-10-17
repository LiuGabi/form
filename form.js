(function($) {

	// $.fn.uiForm.defaults = {};

	$.fn.uiForm = function(options) {


		var opts = $.extend({}, $.fn.uiForm.defaults, options || {});

		var parent = $(this);

		var form = {

			isEmpty: function(els) {

				if (!els) {
					return;
				}

				var empty = $(els).val();

				if (empty.length == 0) {

					$(els).removeClass(opts.filledClass)
					return true;

				} else {

					$(els).addClass(opts.filledClass)
					return false;

				}

			},

			isActive: function(els) {

				if (!els) {
					return;
				}

				var active= $(els).is(opts.activeClass);

				if (!active) {

					return false;

				} else {

					return true;

				}

			}

		};

		var init = function() {

			parent.on('click touchstart', function(e) {

				e.stopPropagation();

				$(this).parent().siblings().children('.' + opts.activeClass).removeClass(opts.activeClass);

				if(form.isEmpty(this)) {
					console.log("gg");
				}

				$(this).addClass(opts.activeClass);

			});

			$('html').not(parent.is('.' + opts.activeClass)).on('click touchstart', function(e) {

				e.stopPropagation();
				parent.removeClass(opts.activeClass);

			});

		};

		init();

	};

})(jQuery);