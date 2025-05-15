import Hero from "@/sections/Hero"
import Categories from "@/sections/Categories"
import Devices from "@/sections/Devices"
import Questions from "@/sections/Questions"
import Plans from "@/sections/Plans"

export const metadata = {
  title: "Home",
  description:
    "Stream Vibe is a streaming platform for movies, TV shows, and more.",
  isHeaderFixed: true,
}
export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
      <Plans />
    </>
  )
}
