Package.describe({
	name: 'tuul:classnames',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Meteor package of JedWatson/classnames',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/tuulbox/classnames',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2');
	api.use('ecmascript');
	api.addFiles('bind.js', 'client');
	api.export('classNames', 'client');
});

