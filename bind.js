/*!
 Copyright (c) 2015 Jed Watson.
 Licensed under the MIT License (MIT), see
 http://jedwatson.github.io/classnames
 */
/* global define */

var hasOwn = {}.hasOwnProperty;


classNames = function() {
	var classes = '';

	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		if (!arg) continue;

		var argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			classes += ' ' + (this && this[arg] || arg);
		} else if (Array.isArray(arg)) {
			classes += ' ' + classNames.apply(this, arg);
		} else if (argType === 'object') {
			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes += ' ' + (this && this[key] || key);
				}
			}
		}
	}

	return classes.substr(1);
};
