import { updateJob } from '@/actions';

export default function UpdateJobForm({job}){

    let date = String(job.year).padStart(4,'0')+'-'+String(job.month).padStart(2, '0');
    console.log(date);

    return (
        <form action={updateJob}>
          <input type='hidden' name='id' value={job.id} />
          <div className="grid grid-cols-2 gap-4">
            {/* Name and Date on the same row */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Name</label>
              <input 
                required 
                type="text" 
                name="name"
                defaultValue={job.name}
                className={`
                  border 
                  rounded-md 
                  shadow-sm 
                  p-2 
                  focus:ring-2 
                  focus:ring-blue-500
                `}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Date</label>
              <input 
                required 
                type="month" 
                name="date"
                defaultValue={date}
                className={`
                  border 
                  rounded-md 
                  shadow-sm 
                  p-2 
                  focus:ring-2 
                  focus:ring-blue-500
                `}
              />
            </div>
          </div>

          {/* Description taking up a larger space */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Description</label>
            <textarea 
              name="description" 
              rows="4" 
              defaultValue={job.description}
              className={`
                border 
                rounded-md 
                shadow-sm 
                p-2 
                resize-none 
                focus:ring-2 
                focus:ring-blue-500 
                overflow-auto
              `}>
              </textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <input 
              type="submit" 
              value="Update Job" 
              className={`
              bg-blue-500 
              text-white px-4 py-2 rounded-md shadow 
              hover:bg-blue-600 cursor-pointer
              `}
            />
          </div>
        </form>
    );
}
