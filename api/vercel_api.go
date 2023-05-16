package api

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/androidsr/paas-go/model"
	"github.com/androidsr/paas-go/wsocket"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	openai "github.com/sashabaranov/go-openai"
)

var (
	Server  *gin.Engine
	clients = make(map[string]*openai.Client, 0)
)

func Handler(w http.ResponseWriter, r *http.Request) {
	Server.ServeHTTP(w, r)
}

func init() {
	Server = gin.New()
	group := Server.Group("/api")
	group.POST("/open-ai", HttpOpenAI)
	socket := wsocket.New(websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}, time.Second*60, 3, func(w http.ResponseWriter, r *http.Request) string {
		return "sirui"
	})
	group.GET("/ws", func(c *gin.Context) {
		err := socket.Register(c.Writer, c.Request)
		if err != nil {
			c.JSON(http.StatusOK, model.NewFail(5000, err.Error()))
		}
	})
}

func HttpOpenAI(c *gin.Context) {
	in := make(map[string]string, 0)
	c.BindJSON(&in)
	message := in["message"]
	key := in["key"]
	if key == "" {
		c.Writer.WriteString("无效请求")
		c.Writer.Flush()
		return
	}

	client := clients[key]
	if client == nil {
		client = openai.NewClient(key)
		clients[key] = client
	}

	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: message,
				},
			},
		},
	)
	if err != nil {
		c.Writer.WriteString("GPT异常：" + err.Error())
		return
	}
	c.Writer.WriteString("响应结果：")
	text := resp.Choices[0].Message.Content
	fmt.Println(text)
	c.Writer.WriteString(text)
}
