-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT NOT NULL,
    "adress" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
