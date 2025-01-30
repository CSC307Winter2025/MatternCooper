import Link from 'next/link';

export default function Home() {

  let jobList = [{
    id: 1,
    name: "Raytheon",
    date: 2004
  }, {
    id: 2,
    name: "Revolution Prep",
    date: 2007,
    description: "test"
  }, {
    id: 3,
    name: "Revolution Prep 2.0",
    date: 2007,
    description: "test"
  }];

  let jobHtml = jobList.map((job) => {
    //logic here
    return (<li key={job.id}>
      <span><Link href={`/job/${job.id}`}>{job.name}</Link></span>
      <span>{job.date}</span>
    </li>);
  });

  return (
    <div>
      Hello world;
      Job List
      <ul>
        {jobHtml}
      </ul>
    </div>
  );
}
