###
Backbone.JackLinks
Link hijacker & route helper for Backbone routers
v0.1 - Tyler Hughes
###

class @Backbone.JackLinks
	constructor: (opts) ->
		@routers = opts.routers || {} # a hash of Backbone.Router objects
		@routes = [] # stores all the route matchers
		@vent = {}
		_.extend @vent, Backbone.Events
		do @init


	## Start up JackLinks
	init: ->
		do @getRoutes

		$(document).on 'click', 'a', (e) =>
			route = $(e.target).attr('href')

			## Check to see if the link should be hijacked
			unless $(e.target).attr('nohijack')?
				e.preventDefault()
				if route in @routes then Backbone.history.navigate route, true



	## Get the routes from each router object
	getRoutes: ->
		_.each @routers, (router) =>
			for route in _.keys router.routes
				do =>
					@routes.push route


