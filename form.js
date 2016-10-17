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

				if (!$(els).val()) {

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

				var activeClass = $(els).is(opts.activeClass);

				if (!activeClass) {

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