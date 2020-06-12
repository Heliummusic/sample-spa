// eslint-disable-next-line react/react-in-jsx-scope
import Link from "next/link";

 export default () => (
     <div>
         <h1>Welcome</h1>

            <Link href="/about">
                <a>About</a>
             </Link>

         <Link href="/">
             <a>Home</a>
         </Link>

         <Link href="/post">
             <a>Post</a>
         </Link>

         <Link href="/contact">
             <a>Contact</a>
         </Link>
    </div>

 );