import { HeroSection } from "@/components/home/hero-section"
import { ActivitiesSection } from "@/components/home/activities-section"
import { SkillsSection } from "@/components/home/skills-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <ActivitiesSection />
        <SkillsSection />
      </main>
    </div>
  )
}
