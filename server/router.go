package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

// NewRouter - create the new router
func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)

	for _, route := range routes {
		var handler http.Handler

		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	router.PathPrefix("/").Handler(Logger(http.FileServer(http.Dir("dist/web")), "STATIC"))

	return router
}
