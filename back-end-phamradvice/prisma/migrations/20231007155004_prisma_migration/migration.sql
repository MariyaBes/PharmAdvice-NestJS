-- CreateTable
CREATE TABLE "Chat" (
    "chat_id" SERIAL NOT NULL,
    "data_start" TIME(6) NOT NULL,
    "data_send" TIME[],
    "text" VARCHAR(128) NOT NULL,
    "status" VARCHAR(15) NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("chat_id")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "consultation_id" SERIAL NOT NULL,
    "date_time" TIMESTAMPTZ(6) NOT NULL,
    "amount" INTEGER,
    "meeting_link" JSON,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("consultation_id")
);

-- CreateTable
CREATE TABLE "Image" (
    "image_id" SERIAL NOT NULL,
    "profile_picture" VARCHAR(400),
    "profile_pharm " VARCHAR(400) NOT NULL,
    "image_med" VARCHAR(400),

    CONSTRAINT "Image_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "ListRecipe" (
    "listrecipe_id" INTEGER NOT NULL,
    "assigment" VARCHAR(200) NOT NULL,
    "data" DATE NOT NULL,

    CONSTRAINT "ListRecipe_pkey" PRIMARY KEY ("listrecipe_id")
);

-- CreateTable
CREATE TABLE "Marking" (
    "marking_id" SERIAL NOT NULL,
    "dose " VARCHAR(45) NOT NULL,
    "side_effects " VARCHAR(45) NOT NULL,
    "contraindications " VARCHAR(200) NOT NULL,

    CONSTRAINT "Marking_pkey" PRIMARY KEY ("marking_id")
);

-- CreateTable
CREATE TABLE "Medication" (
    "medication_id " SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "data_storage " DATE NOT NULL,
    "composition" VARCHAR(500) NOT NULL,
    "application " VARCHAR(500) NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "Medication_pkey" PRIMARY KEY ("medication_id ")
);

-- CreateTable
CREATE TABLE "Pharmacist" (
    "рharmacist_id" SERIAL NOT NULL,
    "full_name" VARBIT(100) NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "qualification" VARCHAR(200) NOT NULL,
    "email" VARCHAR(125) NOT NULL,
    "password" INTEGER NOT NULL,
    "contact" VARCHAR(50) NOT NULL,
    "raiting" INTEGER,

    CONSTRAINT "Pharmacist_pkey" PRIMARY KEY ("рharmacist_id")
);

-- CreateTable
CREATE TABLE "Pharmacy" (
    "pharmacy_id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "address" VARCHAR(150) NOT NULL,

    CONSTRAINT "Pharmacy_pkey" PRIMARY KEY ("pharmacy_id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "recipe_id" SERIAL NOT NULL,
    "date_discharge" DATE NOT NULL,
    "dose" VARCHAR(50) NOT NULL,
    "suitability " DATE NOT NULL,
    "status" VARCHAR(25) NOT NULL,
    "entity" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("recipe_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "gender" VARCHAR(10),
    "email" VARCHAR(125) NOT NULL,
    "password" TEXT NOT NULL,
    "address" VARCHAR(125),
    "phone_num" VARCHAR(12) NOT NULL,
    "age" DATE,
    "name" VARCHAR(100) NOT NULL,
    "avatarPath" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
