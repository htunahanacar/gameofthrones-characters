import { Metadata } from 'next' // id:0001 - Sayfa ismini değiştirmek için eklendi.
import Link from 'next/link' // id:0002 - Linkleri eklemek için eklendi.
import { useRouter } from 'next/navigation'

// id:0001 - Sayfa ismini değiştirmek için eklendi.
export const metadata: Metadata = {
    title: 'Game of Thrones - Characters',
  }

// id:0000 - Sayfada gösterilen içerikler
export default function Home() {
  return (<main>
    <div>
      <h1>Hello, This is Index Page!</h1>
      <p>Click to reach <b><Link href="/characters">Character Cards</Link></b> Page</p>
    </div>
    </main>
  )
}