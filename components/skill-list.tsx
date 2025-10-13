"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { SkillDialog } from "@/components/skill-dialog"
import { DeleteSkillButton } from "@/components/delete-skill-button"
import type { Database } from "@/lib/supabase/types"

type Skill = Database["public"]["Tables"]["skills"]["Row"]

export function SkillList({ skills }: { skills: Skill[] }) {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <div className="space-y-6">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category}>
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorySkills.map((skill) => (
              <Card key={skill.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-full rounded ${i < skill.proficiency ? "bg-primary" : "bg-muted"}`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <SkillDialog skill={skill}>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Pencil className="mr-2 h-4 w-4" />
                        編集
                      </Button>
                    </SkillDialog>
                    <DeleteSkillButton skillId={skill.id} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
