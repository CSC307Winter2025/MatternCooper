import Link from 'next/link';

export default function Job({params}) {
  return (
    <div>
      This is more information about my job number: {params?.id}
      <br/>
      <Link href="/">Home</Link>
    </div>
  );
}