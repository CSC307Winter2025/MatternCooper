import HomeButton from '@/components/backButton';
import UpdateJobForm from '@/components/updateJobForm';
import prisma from '@/lib/prisma';
import '@/style/global.css';
import GetMonthName from '@/components/util';
import { redirect } from "next/dist/server/api-utils";

export default async function Job(props) {
  const params = await props.params;
  const id = +params?.id;

  const job = await prisma.job.findUnique({
    where: {id}
    });

  const handleBack = () => {
    redirect('/');
  }

  return (
    <div>
      <HomeButton />
      <div className='pl-5 pr-5'>
        <div className='bg-gray-400 flex justify-between items-center pb-5'>
          <div className='flex-1 pl-5 pt-5 justify-start'>
            <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-md max-w-md rounded-xl">
              <div className="font-semibold text-gray-700">Id:</div>
              <div>{job.id}</div>
              <div className="font-semibold text-gray-700">Name:</div>
              <div>{job.name}</div>
              <div className="font-semibold text-gray-700">Date:</div>
              <div>{GetMonthName(job.month)}, {job.year}</div>
              <div className="font-semibold text-gray-700">Description:</div>
                <div>
                  <textarea
                    readOnly
                    value={job.description}
                    className="w-full h-32 p-2 border border-gray-300 rounded-md bg-gray-50 resize-none focus:outline-none"
                  />
              </div>
            </div>
          </div>
          <div className='flex-1 pr-5'>
            <p className="text-xl font-bold pb-0 pt-5">Edit Job</p>
            <UpdateJobForm job={job} />
          </div>
        </div>
      </div>
    </div>
  );
}