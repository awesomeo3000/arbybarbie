var scrape = require('scrape');
var _ = require('underscore');

exports.findbets2types = function (req, res) {
	scrape.request('http://www.oddschecker.com/football/football-coupons/major-leagues-cups', function (err, $) {
		if (err) return console.error(err);
		var item = 0;
		$('.match-on').each(function (matchItems) {

			var oddsItems = matchItems.find('.odds');
			var namesItems = matchItems.find('.fixtures-bet-name');
			var matchOdds = [];
			var matchNames = [];

			namesItems.each(function (namesItem) {
				matchNames.push(namesItem.text);
			});

			oddsItems.each(function (oddsItem) {
				var oddsArray = oddsItem.text.slice(1, -1).split('/');
				var theStart = parseInt(oddsArray[0]);
				var theEnd = parseInt(oddsArray[1]);

				if (!theEnd) {
					theEnd = 1;
				}

				var theOdds = 1 / ((theEnd * 1.0) / (theStart + theEnd));

				theOdds = Math.round(theOdds * 100.0) / 100;

				matchOdds.push(theOdds);
			});

			var bet1 = (100.0) / ((matchOdds[0] / matchOdds[1]) + 1);
			var bet2 = (100.0) / ((matchOdds[1] / matchOdds[0]) + 1);
			var total1 = (bet1 * matchOdds[0]) - 100;
			var total2 = (bet2 * matchOdds[1]) - 100;

			if (total1 > 0) {
				console.log('arbitrage found!!!');
				console.log('----');
				console.log('Match is between ', matchNames[0], ' and ', matchNames[1]);
				console.log('with odds ', matchOdds[0], ' and ', matchOdds[1]);
				console.log('the bets would be places as ', bet1, ' and ', bet2);
				console.log('with profit/loss of ', total1, '%');
				console.log('----');
			}
		});

		console.log('all done!!!');
		return;

	});
};


exports.findbets3types = function (req, res) {
	scrape.request('http://www.oddschecker.com/football/football-coupons/major-leagues-cups', function (err, $) {
		if (err) return console.error(err);
		var item = 0;
		$('.match-on').each(function (matchItems) {

			var oddsItems = matchItems.find('.odds');
			var namesItems = matchItems.find('.fixtures-bet-name');
			var matchOdds = [];
			var matchNames = [];

			namesItems.each(function (namesItem) {
				matchNames.push(namesItem.text);
			});

			oddsItems.each(function (oddsItem) {
				var oddsArray = oddsItem.text.slice(1, -1).split('/');
				var theStart = parseInt(oddsArray[0]);
				var theEnd = parseInt(oddsArray[1]);

				if (!theEnd) {
					theEnd = 1;
				}

				var theOdds = 1 / ((theEnd * 1.0) / (theStart + theEnd));

				theOdds = Math.round(theOdds * 100.0) / 100;

				matchOdds.push(theOdds);
			});

			var bet1 = (100.0) / ((matchOdds[0] / matchOdds[1]) + (matchOdds[0] / matchOdds[2]) + 1);
			var bet2 = (100.0) / ((matchOdds[1] / matchOdds[0]) + (matchOdds[1] / matchOdds[2]) + 1);
			var bet3 = (100.0) / ((matchOdds[2] / matchOdds[0]) + (matchOdds[2] / matchOdds[1]) + 1);
			var total1 = (bet1 * matchOdds[0]) - 100;
			var total2 = (bet2 * matchOdds[1]) - 100;
			var total3 = (bet3 * matchOdds[2]) - 100;

			if (total1 > 0) {
				console.log('arbitrage found!!!');
				console.log('----');
				console.log('Match is between', matchNames[0], 'and', matchNames[1], 'and', matchNames[2]);
				console.log('with odds', matchOdds[0], 'and', matchOdds[1], 'and', matchOdds[2]);
				console.log('the bets would be places as', bet1, 'and', bet2, 'and', bet3);
				console.log('with profit/loss of ', total1, '%');
				console.log('----');
			}
		});

		console.log('all done!!!');
		return;

	});
};