function amountBracket(event) {
	if (event.amount < 1000) {
		return "<10";
	}

	if (event.amount < 5000) {
		return "10-50";
	}

	if (event.amount < 10000) {
		return "50-100";
	}

	if (event.amount < 50000) {
		return "100-500";
	}

	return ">500";

}

function addAggregate(aggregates, report) {
	for (let key in report) {
		let datapoint = report[key];
		aggregates[datapoint] = aggregates[datapoint] === undefined ? 1 : aggregates[datapoint] + 1;
	}
}

function aggregate(events) {
	const aggregates = {};

	for (let i = 0; i < events.length; i++) {
		let item = prepareReportItem(events[i]);
		addAggregate(aggregates, item);
	}

	return formatAggregates(aggregates);
}

function formatAggregates(aggregates){
	const result = [];

	for (let key in aggregates) {
		result[result.length] = ({datapoint: key, events: aggregates[key]});
	}

	return result;
}

function prepareReportItem(event) {
	const template = {
		'timeByHourAmount': `:timeByHour|:amount`,
		'timeByHourAmountPayment': `:timeByHour|:amount|:payment`,
		'amountPayment': `:amount|:payment`,
		'timeByDayMerchant': `:timeByDay|:merchant`,
		'merchantPayment': `:merchant|:payment`
	};

	let mapObject = {
		':timeByHour': event.date.replace(/^(.+)T(\d+):.+$/, '$1:$2'),
		':timeByDay': event.date.replace(/T.+$/, ''),
		':amount': amountBracket(event),
		':payment': event.paymentMethod,
		':merchant': event.merchantId
	};

	for (let key in template) {
		template[key] = template[key].replace(/:timeByHour|:timeByDay|:amount|:payment|:merchant/gi, function (matched) {
			return mapObject[matched];
		});
	}

	return template;
}

const sampleEvent = {
	date: '2011-12-03T10:15:30Z',
	amount: 4285,
	paymentMethod: 'SLICE_IT',
	merchantId: '1bb53ed1-787b-4543-9def-ea18eef7902e'
}


console.log(aggregate([sampleEvent, sampleEvent]))
// aggregate([sampleEvent, sampleEvent])


function ingredients(order) {
	const menu = {
		'Classic': 'strawberry,banana,pineapple,mango,peach,honey,ice,yogurt',
		'Forest Berry': 'strawberry,raspberry,blueberry,honey,ice,yogurt',
		'Freezie': 'blackberry,blueberry,black currant,grape juice,frozen yogurt',
		'Greenie': 'green apple,kiwi, lime,avocado,spinach,ice,apple juice',
		'Vegan Delite': 'strawberry,passion fruit,pineapple,mango,peach,ice,soy milk',
		'Just Desserts': 'banana,ice cream,chocolate,peanut,cherry'
	};

	return removeAllergicIngredients(extractIngredients(menu, order));
}

function extractIngredients(menu, order) {
	const orderItems = order.split(',');

	return {
		'allIngredients': sortIngredientsByAlphabetical(menu[orderItems[0]]),
		'allergicIngredients': orderItems.slice(1)
	};
}

function removeAllergicIngredients(array) {
	return array['allIngredients'].filter(item => !array['allergicIngredients'].includes('-' + item)).join(',');
}

function sortIngredientsByAlphabetical(string) {
	return string.split(',').sort(
		(x, y) => {
			return x === y ? 0 : x > y ? 1 : -1;
		}
	);
}

ingredients('Classic,-strawberry');
