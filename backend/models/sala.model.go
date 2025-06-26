package models

import "gorm.io/gorm"

type Sala struct {
	gorm.Model
	Nombre      string  `json:"nombre"`
	Capacidad   int     `json:"capacidad"`
	Precio      float64 `json:"precio"`
	Consumibles float64 `json:"consumibles"`
	ZonaAsado   bool    `json:"zona_asado"`
}
