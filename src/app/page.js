import FeaturedSlider from "@/components/featured-slider";
import FeaturedMovies from "@/components/featured-movies";
import { fetchPopularMovies, fetchGenres, fetchTopRatedMovies, fetchUpcomingMovies } from "@/services/api";


export default async function Home() {

    const pagePromises = [
        fetchGenres(),
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchUpcomingMovies(),
    ];
    
    const [genres, popular, topRated, upComing] =
    await Promise.all(pagePromises);

    return (
        <main>
            <FeaturedSlider data={upComing} />
            <FeaturedMovies heading="The most popular" data={popular} />
            <FeaturedMovies heading="Top rated" data={topRated} />
        </main>
    );
}
