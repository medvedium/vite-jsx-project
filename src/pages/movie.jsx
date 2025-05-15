import MovieBanner from "@/sections/MovieBanner"
import MovieDetails from "@/sections/MovieDetails"

export const metadata = {
  title: "Movie - Kantara",
  description:
    "Stream Vibe is a streaming platform for movies, TV shows, and more.",
}
export default () => {
  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}
