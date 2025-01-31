import fs from 'fs/promises';
import Link from 'next/link';
import '../style/global.css';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/jobList.json', 'utf8');
  
  const jobList = JSON.parse(file);

  return (
    <div>    
      <div className="flex justify-center w-full bg-gray-500 p-4">
        <span className="text-2xl font-bold">Cooper Mattern</span>
      </div>

      <div class="flex bg-gray-100 p-2">
        <div class="flex-1 flex justify-start">cnamatten@gmail.com</div>
        <div class="flex-1 flex justify-center">github.com/bobjoe400</div>
        <div class="flex-1 flex justify-end">425-419-6866</div>
      </div>

      <h2 className="text-xl font-bold">Job List</h2>

      <ul className="list-disc">
        {jobList.map((job) => (
          <li key={job.id} className="mb-2">
            <span>
              <Link  href={`/job/${job.id}`}>
                <span className={`
                  underline
                  text-blue-500
                  hover:text-blue-700`
                }>{job.name}</span>
              </Link>
            </span>
            <span className="ml-2">{job.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}