package config

import (
	"fmt"
	"log"
	"os"

	"backend/models"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConectarDB() {
	var err error

	// Cargar variables desde .env
	err = godotenv.Load()
	if err != nil {
		log.Fatal("❌ Error cargando el archivo .env")
	}

	host := os.Getenv("PGHOST")
	port := os.Getenv("PGPORT")
	user := os.Getenv("PGUSER")
	password := os.Getenv("PGPASSWORD")
	dbname := os.Getenv("PGDATABASE")

	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname,
	)

	fmt.Println("🧪 DSN:", dsn)

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("❌ Error al conectar a la base de datos:", err)
	}

	fmt.Println("✅ Conexión a PostgreSQL establecida correctamente")

	// AutoMigrar modelos
	err = DB.AutoMigrate(&models.Sala{}, &models.Reserva{})
	if err != nil {
		log.Fatal("❌ Error al migrar los modelos:", err)
	}
	fmt.Println("✅ Migraciones ejecutadas correctamente")

}
