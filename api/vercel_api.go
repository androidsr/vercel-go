package api

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	openai "github.com/sashabaranov/go-openai"
)

var (
	Server *gin.Engine
	client *openai.Client
)

func Handler(w http.ResponseWriter, r *http.Request) {
	Server.ServeHTTP(w, r)
}

func init() {
	Server = gin.Default()
	group := Server.Group("/api")
	group.POST("/http/open-ai", HttpOpenAI)
}

func HttpOpenAI(c *gin.Context) {
	in := make(map[string]string, 0)
	c.BindJSON(&in)
	message := in["message"]
	key := in["key"]
	if key == "" {
		c.Writer.WriteString("无效请求")
		return
	}
	if client == nil {
		client = openai.NewClient(key)
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
		c.Writer.WriteString(err.Error())
		return
	}
	c.Writer.WriteString(resp.Choices[0].Message.Content)
}
