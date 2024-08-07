import Image from 'next/image';
import { searchMovies } from '@/services/api';
import Link from 'next/link';
import { notFound } from "next/navigation";

export default async function searchPage({params}) {
    const keyword = params.keyword;

    const data = await searchMovies(keyword);
    
    if (!data.length) {
        return (
            <main className="main">
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-white">No results found for "{decodeURIComponent(keyword)}"</h1>
                </div>
            </main>
        )
    }

    return (
        <main className="main pt-5 pb-10">
            <h1 className='text-white px-4'>Showing results for "{decodeURIComponent(keyword)}"</h1>
            <div className="grid gap-1 grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 lg:gap-y-8 lg:gap-x-10 px-4 overflow-hidden text-white">
            
                {data.map(movie => (
                    <Link href={`/movie/${movie.id}`} key={movie.id} className="flex flex-col gap-y-4">
                        <div className='flex items-center justify-center h-full'>
                            {movie.poster_path ?  
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={250} height={376} className="w-full hover:scale-110 py-4 duration-300" alt={movie.title}></Image>
                            :<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-4xl text-zinc-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>}                          
                        </div>
                        <h2>{movie.title}</h2>
                    </Link>
                ))}
                
            </div>

        </main>
    )
}