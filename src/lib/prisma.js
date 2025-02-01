import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const globalForPrisma = global;

if (process.env.NODE_ENV !== 'production') {
    /* Fix to prevent too many clients from connecting to databse*/
    if (!globalForPrisma.prisma){
        globalForPrisma.prisma = prisma
    }
}

export default prisma