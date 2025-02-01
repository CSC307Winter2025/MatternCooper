import HomeButton from "@/components/backButton";
import NewJobForm from "@/components/newJobForm";

export default async function NewJobPage(){
	return(
		<div>
			<HomeButton/>
			<div className='flex-row pt-2 pl-5 pr-5'>
				<div className='bg-gray-400'>
					<h2 className="text-xl font-bold pl-3">Add a Job</h2>
					<NewJobForm/>
				</div>		
			</div>
		</div>
	);
}