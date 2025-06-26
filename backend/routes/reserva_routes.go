package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func ReservaRoutes(router *gin.Engine) {
	reservas := router.Group("/reservas")
	{
		reservas.POST("/", controllers.CrearReserva)
		reservas.GET("/", controllers.ObtenerReservas) // 👈 NUEVA RUTA
	}
}
