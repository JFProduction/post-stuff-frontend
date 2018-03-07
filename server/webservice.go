package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func test(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json; charset=UTF-8")
	resp, err := json.MarshalIndent("Hello, World", "", " ")

	if err != nil {
		panic(err)
	}

	fmt.Fprintf(w, string(resp))
}
