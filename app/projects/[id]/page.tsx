import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await getSupabaseServerClient()

  const { data: project } = await supabase.from("projects").select("*").eq("id", id).eq("is_published", true).single()

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                制作実績一覧に戻る
              </Link>
            </Button>

            <div className="space-y-8">
              {project.image_url && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.demo_url && (
                    <Button asChild>
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        デモを見る
                      </a>
                    </Button>
                  )}
                  {project.github_url && (
                    <Button asChild variant="outline">
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHubで見る
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">プロジェクト概要</h2>
                  <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{project.description}</p>

                  {(project.start_date || project.end_date) && (
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-semibold mb-2">開発期間</h3>
                      <p className="text-muted-foreground">
                        {project.start_date && new Date(project.start_date).toLocaleDateString("ja-JP")}
                        {project.start_date && project.end_date && " 〜 "}
                        {project.end_date && new Date(project.end_date).toLocaleDateString("ja-JP")}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
