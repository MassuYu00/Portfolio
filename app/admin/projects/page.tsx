import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { Plus, Pencil } from "lucide-react"
import { DeleteProjectButton } from "@/components/delete-project-button"

export default async function AdminProjectsPage() {
  const supabase = await getSupabaseServerClient()

  const { data: projects } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">制作実績管理</h1>
          <p className="text-muted-foreground">制作実績の追加、編集、削除ができます</p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            新規作成
          </Link>
        </Button>
      </div>

      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              {project.image_url && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
                  </div>
                  <Badge variant={project.is_published ? "default" : "secondary"}>
                    {project.is_published ? "公開" : "非公開"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={`/admin/projects/${project.id}/edit`}>
                      <Pencil className="mr-2 h-4 w-4" />
                      編集
                    </Link>
                  </Button>
                  <DeleteProjectButton projectId={project.id} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">まだ制作実績が登録されていません</p>
            <Button asChild>
              <Link href="/admin/projects/new">
                <Plus className="mr-2 h-4 w-4" />
                最初の実績を追加
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
