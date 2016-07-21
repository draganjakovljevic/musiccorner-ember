/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const pickFiles = require('broccoli-funnel');
  const mergeTrees = require('broccoli-merge-trees');

  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: ['app'],
    },
  });

  const chosenImages = pickFiles('bower_components/chosen', {
    include: ['**/*.png'],
    destDir: '/assets',
  });
  const bootstrapFonts = pickFiles('bower_components/bootstrap/fonts', {
    destDir: '/fonts',
  });
  const fontAwesome = pickFiles('bower_components/font-awesome/fonts', {
    destDir: '/fonts',
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // css
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets',
  });
  app.import('bower_components/chosen/chosen.min.css');
  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('bower_components/tablesorter/dist/css/theme.ice.min.css');

  // js
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/moment/min/moment.min.js');
  app.import('bower_components/chosen/chosen.jquery.min.js');
  app.import('bower_components/tablesorter/dist/js/jquery.tablesorter.min.js');

  const outputTree = mergeTrees([
    fontAwesome,
    bootstrapFonts,
    chosenImages,
    app.toTree(),
  ]);

  return outputTree;
};
