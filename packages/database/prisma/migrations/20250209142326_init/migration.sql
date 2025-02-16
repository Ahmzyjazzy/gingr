-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `fbId` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerifiedAt` DATETIME(3) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `phoneVerifiedAt` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `countryCode` VARCHAR(191) NULL,
    `countryDialCode` VARCHAR(191) NULL,
    `txnPin` VARCHAR(191) NULL,
    `use2fa` BOOLEAN NOT NULL DEFAULT true,
    `referralLink` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_fbId_key`(`fbId`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phoneNumber_key`(`phoneNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `state` DATETIME(3) NULL,
    `region` VARCHAR(191) NULL,
    `city` DATETIME(3) NULL,
    `addressPrimary` VARCHAR(191) NULL,
    `addressSecondary` VARCHAR(191) NULL,
    `bvnStatus` VARCHAR(191) NULL,
    `ninStatus` VARCHAR(191) NULL,
    `cacDocument` VARCHAR(191) NULL,
    `utilityBillDocument` VARCHAR(191) NULL,
    `govtIdDocument` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    UNIQUE INDEX `Profile_region_key`(`region`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `accountName` VARCHAR(191) NULL,
    `accountNumber` VARCHAR(191) NULL,
    `accountType` ENUM('PERSONAL', 'BUSINESS') NOT NULL DEFAULT 'PERSONAL',
    `currentBalance` DECIMAL(18, 2) NOT NULL DEFAULT 0,
    `balanceBefore` DECIMAL(18, 2) NOT NULL DEFAULT 0,
    `balanceAfter` DECIMAL(18, 2) NOT NULL DEFAULT 0,
    `ledgerBalance` DECIMAL(18, 2) NOT NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `pndStatus` BOOLEAN NOT NULL DEFAULT false,
    `pndReason` VARCHAR(191) NULL,
    `provider` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeviceToken` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeviceToken` ADD CONSTRAINT `DeviceToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
