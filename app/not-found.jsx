"use client";
import { useRouter } from "next/navigation"

const NotFoundPage = () => {
    const router = useRouter();
    const navigate = (link) => {
        router.push(link);
    }

    return (
        <div>
            <h2>Page not found 404</h2>
            <p>Please click <span className="fw-bold text-underline c-pointer" onClick={() => navigate("/")}>here</span></p>
        </div>
    )
}

export default NotFoundPage
