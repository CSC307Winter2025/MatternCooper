/*
  Warnings:

  - You are about to drop the column `date` on the `Job` table. All the data in the column will be lost.
  - Added the required column `month` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "date",
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
