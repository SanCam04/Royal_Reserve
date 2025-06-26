package models

import "time"

type Reserva struct {
	ID           uint   `gorm:"primaryKey" json:"id"`
	Nombre       string `json:"nombre"`
	Apellido     string `json:"apellido"`
	Correo       string `json:"correo"`
	Fecha        string `json:"fecha"`
	Hora         string `json:"hora"`
	Sala         string `json:"sala"`
	Asado        string `json:"asado"`
	InvitadosVip string `json:"invitadosVip"`

	CreadaEn time.Time `gorm:"autoCreateTime" json:"creada_en"`
}
