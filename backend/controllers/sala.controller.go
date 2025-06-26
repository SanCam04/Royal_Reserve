package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Obtener todas las salas
func GetSalas(c *gin.Context) {
	var salas []models.Sala
	if err := config.DB.Find(&salas).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener las salas"})
		return
	}
	c.JSON(http.StatusOK, salas)
}

// Crear una sala
func CrearSala(c *gin.Context) {
	var nuevaSala models.Sala
	if err := c.ShouldBindJSON(&nuevaSala); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Datos inválidos"})
		return
	}
	if err := config.DB.Create(&nuevaSala).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "No se pudo crear la sala"})
		return
	}
	c.JSON(http.StatusCreated, nuevaSala)
}

// Obtener una sala por ID
func GetSalaPorID(c *gin.Context) {
	id := c.Param("id")
	var sala models.Sala
	if err := config.DB.First(&sala, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Sala no encontrada"})
		return
	}
	c.JSON(http.StatusOK, sala)
}

// Actualizar una sala
func ActualizarSala(c *gin.Context) {
	id := c.Param("id")
	var sala models.Sala
	if err := config.DB.First(&sala, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Sala no encontrada"})
		return
	}
	if err := c.ShouldBindJSON(&sala); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Datos inválidos"})
		return
	}
	config.DB.Save(&sala)
	c.JSON(http.StatusOK, sala)
}

// Eliminar una sala
func EliminarSala(c *gin.Context) {
	id := c.Param("id")
	if err := config.DB.Delete(&models.Sala{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al eliminar la sala"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"mensaje": "Sala eliminada correctamente"})
}
