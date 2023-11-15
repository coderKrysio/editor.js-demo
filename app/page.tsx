import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      navigate to
      <Link href={'/editor'} className='underline text-blue-500'>Editor</Link>
    </main>
  )
}
