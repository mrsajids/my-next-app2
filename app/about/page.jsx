"use client";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter()
    let arrayofobj = [{
        id: 11,
        name: 'John'
    },
    {
        id: 12,
        name: 'Moon'
    }, {
        id: 13,
        name: 'Rock'
    }];
    const navigate = (link) => {
        // console.log(link);
        router.push("/about/" + link)
    }

    return (
        <div>
            About component
            <ol>{
                arrayofobj.map(item =>
                    <li key={item.id} className="text-underline c-pointer" onClick={() => navigate(item.id)}>{item.name}</li>
                )}
            </ol>
        </div>
    )
}

export default About
