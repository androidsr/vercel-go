package api

import (
	"net/http"
	"os"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

var (
	server *gin.Engine
)

func Handler(w http.ResponseWriter, r *http.Request) {
	server.ServeHTTP(w, r)
}

func init() {
	server = gin.Default()
	server.Use(static.Serve("/ui", static.LocalFile("/ui", false)))
	group := server.Group("/api")
	group.GET("/hello", HelloWord)
}

func HelloWord(c *gin.Context) {
	pwd, _ := os.Getwd()
	c.Writer.WriteString(pwd)
}
