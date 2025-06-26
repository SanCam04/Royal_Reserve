package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func SalaRoutes(router *gin.Engine) {
	salas := router.Group("/salas")
	{
		salas.GET("/", controllers.GetSalas)
		salas.GET("/:id", controllers.GetSalaPorID)
		salas.POST("/", controllers.CrearSala)
		salas.PUT("/:id", controllers.ActualizarSala)
		salas.DELETE("/:id", controllers.EliminarSala)
	}
}
