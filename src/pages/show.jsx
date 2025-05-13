import ShowBanner from "@/sections/ShowBanner"
import MovieDetails from "@/sections/MovieDetails"
import Seasons from "@/components/Seasons"

export const metadata = {
  title: "Show - Stranger Things",
  description:
    "Stream Vibe is a streaming platform for movies, TV shows, and more.",
}
export default function () {
  return (
    <>
      <ShowBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
