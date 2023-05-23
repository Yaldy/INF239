-- CreateTable
CREATE TABLE "Personajes" (
    "id" SERIAL NOT NULL,
    "fuerza" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "objeto" TEXT,

    CONSTRAINT "Personajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Karts" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "velocidad_maxima" INTEGER,
    "id_personaje" INTEGER,

    CONSTRAINT "Karts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reinos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicaion" TEXT NOT NULL,
    "suoerficie" TEXT NOT NULL,

    CONSTRAINT "Reinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trabajos" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT,
    "sueldo" INTEGER NOT NULL,

    CONSTRAINT "Trabajos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personaje_tiene_trabajo" (
    "id_trabajo" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_termino" TIMESTAMP(3),

    CONSTRAINT "Personaje_tiene_trabajo_pkey" PRIMARY KEY ("id_trabajo","id_personaje")
);

-- AddForeignKey
ALTER TABLE "Karts" ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personaje_tiene_trabajo" ADD CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY ("id_trabajo") REFERENCES "Trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personaje_tiene_trabajo" ADD CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
