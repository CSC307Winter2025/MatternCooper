import HomeButton from '@/components/homeButton';
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
      <div className='pl-5 pr-5 pb-5 '>
        <div className='bg-gray-400 flex justify-between items-center border-2 border-black'>
          <div className='flex-1 pl-5 pt-5 justify-start border-r-2 border-black pb-5'>
            <p className="text-xl font-bold">Job Information</p>
            <div className="p-5 bg-white shadow-md max-w-lg rounded-xl">
              {[
                { label: "ID:", value: job.id },
                { label: "Name:", value: job.name },
                { label: "Date:", value: `${GetMonthName(job.month)}, ${job.year}` },
                { label: "Description:", value: job.description },
              ].map((item, index) => (
                <div key={index} className="flex mb-2">
                  <div className="w-1/3 font-semibold text-gray-700">{item.label}</div>
                  <div className="w-2/3">
                    {item.label === "Description:" ? (
                      <textarea
                        readOnly
                        value={item.value}
                        className="w-full h-32 p-2 border border-gray-300 rounded-md bg-gray-50 resize-none focus:outline-none"
                      />
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 pr-5 pl-5'>
            <p className="text-xl font-bold">Edit Job</p>
            <UpdateJobForm job={job} />
          </div>
        </div>
      </div>
    </div>
  );
}