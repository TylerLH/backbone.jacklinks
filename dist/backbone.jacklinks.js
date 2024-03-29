// Generated by CoffeeScript 1.4.0

/*
Backbone.JackLinks
Link hijacker & route helper for Backbone routers
v0.1 - Tyler Hughes
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.Backbone.JackLinks = (function() {

    function JackLinks(opts) {
      this.routers = opts.routers || {};
      this.routes = [];
      this.vent = {};
      _.extend(this.vent, Backbone.Events);
      this.init();
    }

    JackLinks.prototype.init = function() {
      var _this = this;
      this.getRoutes();
      return $(document).on('click', 'a', function(e) {
        var route;
        route = $(e.target).attr('href');
        if ($(e.target).attr('nohijack') == null) {
          e.preventDefault();
          if (__indexOf.call(_this.routes, route) >= 0) {
            return Backbone.history.navigate(route, true);
          }
        }
      });
    };

    JackLinks.prototype.getRoutes = function() {
      var _this = this;
      return _.each(this.routers, function(router) {
        var route, _i, _len, _ref, _results;
        _ref = _.keys(router.routes);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          route = _ref[_i];
          _results.push((function() {
            return _this.routes.push(route);
          })());
        }
        return _results;
      });
    };

    return JackLinks;

  })();

}).call(this);
