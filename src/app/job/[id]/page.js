import Link from 'next/link';

export default async function Job(props) {
  const params = await props.params;
  return (
    <div>
      This is more information about my job number: {params?.id}
      <br/>
      <Link href="/">Home</Link>
    </div>
  );
}