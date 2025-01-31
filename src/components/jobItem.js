import Link from 'next/link';

export default function JobItem({ job }) {
  let link = "/job/"+job.id;

  return (
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
  )
}