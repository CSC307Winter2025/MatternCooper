'use server';

import prisma from '@/lib/prisma';
import {redirect} from 'next/navigation';

export async function saveJob(formData) {
    const [year, month] = formData.get('date').split('-').map(Number);

    const job = {
        name: formData.get('name'),
        description: formData.get('description'),
        month: month,
        year: year
    }
    await prisma.job.create({data: job});
    redirect('/');
}

export async function updateJob(formData) {
    const [year, month] = formData.get('date').split('-').map(Number);

    const job = {
        name: formData.get('name'),
        description: formData.get('description'),
        month: month,
        year: year
    }

    await prisma.job.update({where: {id: Number(formData.get('id')),},
        data: job
    });

    const id = String(formData.get('id'));
    redirect('/job/'+id);
}