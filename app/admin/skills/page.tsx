import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { Plus } from "lucide-react"
import { SkillList } from "@/components/skill-list"
import { SkillDialog } from "@/components/skill-dialog"

export default async function AdminSkillsPage() {
  const supabase = await getSupabaseServerClient()

  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("category")
    .order("proficiency", { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">スキル管理</h1>
          <p className="text-muted-foreground">スキルの追加、編集、削除ができます</p>
        </div>
        <SkillDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            新規作成
          </Button>
        </SkillDialog>
      </div>

      {skills && skills.length > 0 ? (
        <SkillList skills={skills} />
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">まだスキルが登録されていません</p>
            <SkillDialog>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                最初のスキルを追加
              </Button>
            </SkillDialog>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
