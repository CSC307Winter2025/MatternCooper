import JobItem from '@/components/jobItem';
import NewJobForm from '@/components/newJobForm'
import '@/style/global.css';


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

      <h2 className="text-xl font-bold">Job List</h2>

      { jobHtml }      

      <br/>
      <NewJobForm/>
    </div>
  );
}