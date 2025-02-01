import JobItem from '@/components/jobItem';
import SkillsList from '@/components/skillsList';
import prisma from '@/lib/prisma'

import '@/style/global.css';
import Link from 'next/link';


export default async function Home() {
  const jobList = await prisma.job.findMany();

  let jobHtml = jobList
    .sort((jobA,jobB) => (jobA.year + jobA.month/10) - (jobB.year + jobB.month/10) )
    .map((job) => <JobItem job={job} key={job.id}></JobItem>);

  return (
    <div>
      <div className="flex justify-center w-full bg-gray-500 p-4">
        <span className="text-2xl font-bold">Cooper Mattern</span>
      </div>

      <div className="flex bg-gray-100 p-2">
        <div className="flex-1 flex justify-start">cnamatten@gmail.com</div>
        <div className="flex-1 flex justify-center">github.com/bobjoe400</div>
        <div className="flex-1 flex justify-end">425-419-6866</div>
      </div>

      <div className="flex-row pl-5 pr-5">
        <div className ="flex-1 flex bg-gray-400">
          <div className="flex-1 justifiy-start border-black border-r-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold pl-2">Job List</span>
              <span className="p-4">
                <Link
                  href="/new-job-form"
                  className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add a New Job
                </Link>
              </span>
            </div>
            <div className='pl-3'>{ jobHtml }</div>
          </div>
          
          
          <div className="flex-1 justify-end pl-2 pb-5">
            <h2 className="text-xl font-bold">Skills</h2>
            <div>{SkillsList()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}