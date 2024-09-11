package main

import (
	"log"
	"os"

	"stock_blog/api/graphql"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
    // .envファイルの読み込み
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    // Ginのルーターを設定
    router := gin.Default()

    // GraphQLのエンドポイント
    router.POST("/graphql", graphqlHandler())
    router.GET("/playground", playgroundHandler())

    // サーバーの起動
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }
    log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
    log.Fatal(router.Run(":" + port))
}

func graphqlHandler() gin.HandlerFunc {
    h := handler.NewDefaultServer(graphql.NewExecutableSchema(graphql.Config{Resolvers: &graphql.Resolver{}}))
    return func(c *gin.Context) {
        h.ServeHTTP(c.Writer, c.Request)
    }
}

func playgroundHandler() gin.HandlerFunc {
    h := playground.Handler("GraphQL", "/graphql")
    return func(c *gin.Context) {
        h.ServeHTTP(c.Writer, c.Request)
    }
}
