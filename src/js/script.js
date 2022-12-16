$(function () {
	// @ts-ignore
	$(
		(tab = () => {
			$('a[data-toggle = "tab"]').on('shown.bs.tab', function (e) {
				// Get the name of active tab
				let activeTab = $(e.target).text();

				// Get the name of previous tab
				let previousTab = $(e.relatedTarget).text();

				$('.active-tab span').html(activeTab);
				$('.previous-tab span').html(previousTab);
			});
		}),
	);

	// @ts-ignore
	$(
		(popover = () => {
			$('.popover-dismiss').popover({
				trigger: 'focus',
			});
		}),
	);

	// @ts-ignore
	$(
		(carousel = () => {
			$('.carousel').carousel({
				interval: 3000,
				keyboard: true,
				touch: true,
				pause: 'hover',
			});
		}),
	);
});
