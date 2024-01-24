/*
  Warnings:

  - You are about to drop the column `price` on the `AirLine` table. All the data in the column will be lost.
  - You are about to drop the column `seatNum` on the `AirLine` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `AirLine` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Bus` table. All the data in the column will be lost.
  - You are about to drop the column `seatNum` on the `Bus` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Bus` table. All the data in the column will be lost.
  - Added the required column `address` to the `AirLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber1` to the `AirLine` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `to` on the `AirLine` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `address` to the `Bus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber1` to the `Bus` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `to` on the `Bus` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `phoneNumber` to the `TouristGuide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AirLine" DROP COLUMN "price",
DROP COLUMN "seatNum",
DROP COLUMN "time",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "phoneNumber1" TEXT NOT NULL,
ADD COLUMN     "phoneNumber2" TEXT,
DROP COLUMN "to",
ADD COLUMN     "to" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Bus" DROP COLUMN "price",
DROP COLUMN "seatNum",
DROP COLUMN "time",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "phoneNumber1" TEXT NOT NULL,
ADD COLUMN     "phoneNumber2" TEXT,
DROP COLUMN "to",
ADD COLUMN     "to" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TouristGuide" ADD COLUMN     "phoneNumber" TEXT NOT NULL;
