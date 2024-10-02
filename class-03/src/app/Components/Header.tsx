import Link from "next/link"
export default function header(){
    return(
        <div className= "header">
            <ul className= "header-button">
                <Link href={"/"}><li>Home</li>
                </Link>
                <Link href={"/about-us"}>
                <li>About us</li>
                </Link>
                <Link href={"/contact-us"}><li>Contact us</li></Link>
                
            </ul>
        </div>
    )
}