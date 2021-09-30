import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src="/showcase.jpg" width={128} height={77} />
                <h1>Programming Heros</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/heroes"><a>Heroes Listing</a></Link>
        </nav>
    );
}
 
export default Navbar;