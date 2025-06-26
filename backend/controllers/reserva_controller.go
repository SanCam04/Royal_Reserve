package controllers

import (
	"backend/config"
	"backend/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CrearReserva(c *gin.Context) {
	var reserva models.Reserva

	if err := c.ShouldBindJSON(&reserva); err != nil {
		fmt.Println("❌ Error de binding JSON:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Datos inválidos"})
		return
	}

	fmt.Println("✅ Reserva recibida:", reserva)

	if err := config.DB.Create(&reserva).Error; err != nil {
		fmt.Println("❌ Error al guardar en DB:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "No se pudo guardar la reserva"})
		return
	}

	c.JSON(http.StatusCreated, reserva)
}

func ObtenerReservas(c *gin.Context) {
	var reservas []models.Reserva

	if err := config.DB.Order("creada_en desc").Find(&reservas).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "No se pudieron obtener las reservas"})
		return
	}

	c.JSON(http.StatusOK, reservas)
}
