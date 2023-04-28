package api

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	openai "github.com/sashabaranov/go-openai"
)

var (
	server *gin.Engine
	client = openai.NewClient("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")
)

func Handler(w http.ResponseWriter, r *http.Request) {
	server.ServeHTTP(w, r)
}

func init() {
	server = gin.Default()
	group := server.Group("/api")
	group.GET("/http/open-ai", HttpOpenAI)
}

func HttpOpenAI(c *gin.Context) {
	in := make(map[string]string, 0)
	c.BindJSON(&in)
	message := in["message"]
	key := in["key"]
	if key != "04F817D619C5A41F5D67CCACC4BB41F7" {
		c.Writer.WriteString("无效请求")
		return
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
