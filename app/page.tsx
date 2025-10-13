import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

export default async function HomePage() {
  const supabase = await getSupabaseServerClient()

  // Fetch published projects
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .limit(3)

  // Fetch skills grouped by category
  const { data: skills } = await supabase.from("skills").select("*").order("proficiency", { ascending: false }).limit(6)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative container py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/10%),transparent)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block mb-4">
                  <Badge variant="secondary" className="px-4 py-1.5">
                    Web Developer & Designer
                  </Badge>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 text-balance">
                  こんにちは、
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    クリエイター
                  </span>
                  です
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed max-w-xl">
                  美しいデザインと機能的なコードで、アイデアを形にします。
                  ユーザーの心に残る体験を創造することが私の情熱です。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="group">
                    <Link href="/projects">
                      作品を見る
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      お問い合わせ
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-4 mt-8 justify-center md:justify-start">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-3xl animate-pulse" />
                <div className="relative w-full h-full rounded-full border-2 border-primary/20 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary/30">P</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-balance">できること</h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
              フロントエンドからバックエンドまで、モダンな技術スタックを使って
              <br />
              アイデアを実現します
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">💻</span>
                  </div>
                  <CardTitle className="text-xl">開発</CardTitle>
                  <CardDescription className="text-base">
                    React、Next.jsを使った
                    <br />
                    モダンなWeb開発
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <CardTitle className="text-xl">デザイン</CardTitle>
                  <CardDescription className="text-base">
                    ユーザー体験を重視した
                    <br />
                    UI/UXデザイン
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-xl">最適化</CardTitle>
                  <CardDescription className="text-base">
                    パフォーマンスと
                    <br />
                    アクセシビリティ
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {projects && projects.length > 0 && (
          <section className="container py-16 md:py-24 bg-muted/30">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">最近の作品</h2>
                  <p className="text-muted-foreground">私が手がけたプロジェクトの一部です</p>
                </div>
                <Button asChild variant="ghost" className="group">
                  <Link href="/projects">
                    すべて見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`} className="group">
                    <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                      {project.image_url && (
                        <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                          <img
                            src={project.image_url || "/placeholder.svg"}
                            alt={project.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
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
            </div>
          </section>
        )}

        {skills && skills.length > 0 && (
          <section className="container py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">スキル</h2>
                <p className="text-muted-foreground">日々学び、成長し続けています</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <Card key={skill.id} className="border-2 hover:border-primary/50 transition-colors group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {skill.name}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-all ${
                              i < skill.proficiency ? "bg-primary group-hover:bg-accent" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="container py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-balance">一緒に何か作りませんか?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              新しいプロジェクトのアイデアや、ご相談がありましたら
              <br />
              お気軽にお問い合わせください
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
