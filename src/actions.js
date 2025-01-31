'use server';

import prisma from '@/lib/prisma';
import {redirect} from 'next/navigation';



export async function saveJob(formData) {
    const [year, month] = formData.date.split('-').map(Number);

    const job = {
        name: formData.get('name'),
        description: formData.get('description'),
        month: month,
        year: year
    }
    await prisma.job.create({data: job});
    redirect('/');
}