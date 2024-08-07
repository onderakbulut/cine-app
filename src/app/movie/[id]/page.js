import Image from 'next/image';
import { fetchSingleMovie,fetchSimilarMovies } from '@/services/api';
import { notFound } from "next/navigation";
import FeaturedMovies from '@/components/featured-movies';

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.id;
    const data = await fetchSingleMovie(id);
   
    return {
      title: data.title,
      description: data.overview.slice(0, 120)
    }
}

export default async function MoviePage({params, searchParams }){
    const id = params.id;
    const movie = await fetchSingleMovie(id);
   
    if (movie.success === false) {
        notFound();
    }


    if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
    }

    const data = await fetchSimilarMovies(id);

    const bg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

    return (
        <main>
            <div className="movie-detail text-white py-10 lg:py-20" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container">
                    <div className="grid grid-cols-12 lg:gap-x-20 gap-y-8">
                        <div className="col-span-12 lg:col-span-4">
                            {movie.poster_path ?  <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={250} height={376} className="movie-poster w-full py-4" alt={movie.title}></Image>:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" class="text-4xl text-zinc-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>}                          
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <h6 className='text-3xl lg:text-[48px] lg:leading-[50px] font-semibold mb-6'>{movie.title}</h6>
                            <p className='text-lg lg:text-2xl font-light'>{movie.overview}</p>
                        </div>
                    </div>
                </div>

            </div>
            {data.length ? <FeaturedMovies data={data} heading="Similar Movies"/>:null}
        </main>
    );
}
