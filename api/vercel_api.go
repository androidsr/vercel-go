package api

import (
	"embed"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

var (
	server *gin.Engine
)

//go:embed ui/* ui/*/*
var fs embed.FS

func Handler(w http.ResponseWriter, r *http.Request) {
	server.ServeHTTP(w, r)
}

func init() {
	server = gin.Default()
	server.StaticFS("/", http.FS(fs))
	group := server.Group("/api")
	group.GET("/hello", HelloWord)
}

func HelloWord(c *gin.Context) {
	pwd, _ := os.Getwd()
	fileInfoList, err := ioutil.ReadDir(pwd)
	if err != nil {
		log.Fatal(err)
	}
	list := make([]string, 0)
	for i := range fileInfoList {
		list = append(list, fileInfoList[i].Name())
	}
	c.Writer.WriteString(strings.Join(list, ","))
}
