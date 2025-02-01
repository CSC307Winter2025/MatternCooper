'use client'

import Link from 'next/link';
import GetMonthName from '@/components/util';

export default function JobItem({ job }) {
  let link = "/job/"+job.id;

  return (
    <li key={job.id} className="mb-2">
        <span>
            <Link  href={`/job/${job.id}`}>
            <span className={`
                underline
                text-blue-600
                hover:text-blue-800`
            }>{job.name}</span>
            </Link>
        </span>
        <span className="ml-2">{GetMonthName(job.month)} {job.year}</span>
    </li>
  )
}