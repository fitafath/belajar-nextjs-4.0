import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="header">
        <nav>
            <div className="Logo"><Link href="/"><Image src="https://fitalogue.wordpress.com/wp-content/uploads/2025/07/fita-with-f-photo.jpg?w=1440" width={30} height={30} alt="Logo" /></Link></div>
            <div className="nav-link">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header