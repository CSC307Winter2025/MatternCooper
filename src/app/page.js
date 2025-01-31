import JobItem from '@/components/jobItem';
import { saveJob } from '@/actions';
import '../style/global.css';

export default async function Home() {
  const jobList = await prisma.job.findMany();

  let jobHtml = jobList.map((job) => <JobItem job={job} key={job.id}></JobItem>);

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
        <form action={saveJob} className="w-2/4 p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Name and Date on the same row */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" className="border rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Date</label>
              <input type="month" name="date" className="border rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          {/* Description taking up a larger space */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Description</label>
            <textarea name="description" rows="4" className="border rounded-md shadow-sm p-2 resize-none focus:ring-2 focus:ring-blue-500 overflow-auto"></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <input type="submit" value="Submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 cursor-pointer" />
          </div>
        </form>
    </div>
  );
}