import { notFound } from "next/navigation";

export default function movies({ params, searchParams}) {
    
    if(searchParams.test) {
        notFound();
    }
    return (
        <main>
            <div className="container">
                Movies page content
            </div>

        </main>
    );
}