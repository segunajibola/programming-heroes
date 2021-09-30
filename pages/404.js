import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [router]);

    const [count, setCount] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);
       return () => clearInterval(interval);
    }, []);

    return ( 
        <div className="not-found">
            <h1>Ooops, sorry....</h1>
            <h2>This page cannot be found.</h2>
            <p>Redirecting to Homepage in { count } seconds...</p>
            <p>Click <Link href="/"><a>here</a></Link> to go back to Homepage if redirects fails</p>
        </div>
     );
}
 
export default NotFound;