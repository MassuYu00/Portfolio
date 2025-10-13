import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getSupabaseServerClient } from "@/lib/supabase/server"

export default async function ProjectsPage() {
  const supabase = await getSupabaseServerClient()

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">制作実績</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                これまでに手がけたプロジェクトの一覧です。 各プロジェクトの詳細をご覧いただけます。
              </p>
            </div>

            {projects && projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`}>
                    <Card className="h-full hover:border-primary transition-colors">
                      {project.image_url && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={project.image_url || "/placeholder.svg"}
                            alt={project.title}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">現在、公開中の制作実績はありません。</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
