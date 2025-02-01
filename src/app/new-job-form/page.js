import HomeButton from "@/components/homeButton";
import NewJobForm from "@/components/newJobForm";

export default async function NewJobPage(){
	return(
		<div>
			<div className='flex-row pl-5 pr-5'>
				<div className='bg-gray-400 border-2 border-black pt-5' >
					<h2 className="text-xl font-bold pl-5">Add a Job</h2>
					<NewJobForm/>
				</div>		
			</div>
		</div>
	);
}