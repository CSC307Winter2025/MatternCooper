import JobItem from '@/components/jobItem';
import ProjectsList from '@/components/projectsList';
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
      <div className="flex-row pl-5 pr-5 pb-5">
        <div className ="flex-1 flex bg-gray-400 border-2 border-black">
          <div className="flex-1 justifiy-start border-black border-r-2">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold pl-5 pt-5">Job List</h2>
              <span className="p-4">
                <Link
                  href="/new-job-form"
                  className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add a New Job
                </Link>
              </span>
            </div>
            <div className='pl-5'>{ jobHtml }</div>
          </div>
          
          
          <div className="flex-1 justify-end pb-5">
            <div className='pl-2 pb-2 border-b-2 border-black'>
              <h2 className="text-xl font-bold">Skills</h2>
              <div>{SkillsList()}</div>
            </div>

            <div className='pl-2 pb-2'>
              <h2 className="text-xl font-bold">Projects</h2>
              <div>{ProjectsList()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}