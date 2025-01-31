import Link from 'next/link';
import UpdateJobForm from '@/components/updateJobForm';
import prisma from '@/lib/prisma';
import '@/style/global.css';

export default async function Job(props) {
  const params = await props.params;
  const id = +params?.id;

  const job = await prisma.job.findUnique({
    where: {id}
    });

  return (
    <div>
      This is more information about my job number: {params?.id}
      <br/>
      <Link href="/">Home</Link>
      <UpdateJobForm job={job} />
    </div>
  );
}