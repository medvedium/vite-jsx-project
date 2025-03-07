import MoviesBanner from "@/sections/MoviesBanner"
import Collections from "@/sections/Collections"

export const metadata = {
  title: "Movies & Shows",
  description:
    "Stream Vibe is a streaming platform for movies, TV shows, and more.",
}
export default function () {
  return (
    <>
      <MoviesBanner />
      <Collections />
    </>
  )
}
