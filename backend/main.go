package main

import (
	"backend/config"
	"backend/routes"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Conexión a la base de datos
	config.ConectarDB()

	// Inicializar Gin
	router := gin.Default()

	// Activar middleware de CORS antes de registrar rutas
	router.Use(cors.Default())

	// Ruta base de prueba
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"mensaje": "API de Royal Reserve funcionando 🎉",
		})
	})

	// Registrar rutas de salas
	routes.SalaRoutes(router)
	routes.ReservaRoutes(router)

	// Ejecutar servidor
	router.Run(":8080")
}
