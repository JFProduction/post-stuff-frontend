package main

import "net/http"

// Route the route structure
type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

// Routes the list of routes for the api
type Routes []Route

var routes = Routes{
	Route{
		"test",
		"GET",
		"/test",
		test,
	},
}
