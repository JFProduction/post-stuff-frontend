package main

import (
	"log"
	"net/http"
)

func main() {
	router := NewRouter()
	log.Println("server started on port 3000")
	log.Fatal(http.ListenAndServe(":3000", router))
}
