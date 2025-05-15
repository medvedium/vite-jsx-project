import Plans from "@/sections/Plans"
import PlansComparison from "@/sections/PlansComparison"

export const metadata = {
  title: "Subscriptions",
  description:
    "Stream Vibe is a streaming platform for movies, TV shows, and more.",
}
export default () => {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}
