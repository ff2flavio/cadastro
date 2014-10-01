'use strict';

describe('myApp.serverRepo module', function() {
  beforeEach(module('myApp.serverRepo'));

  describe('interpolate filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('serverRepo', 'TEST_VER');
    }));
    
  });
});
