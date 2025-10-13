import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { FolderKanban, Wrench, Mail, Eye } from "lucide-react"

export default async function AdminDashboardPage() {
  const supabase = await getSupabaseServerClient()

  // Fetch statistics
  const [{ count: projectsCount }, { count: skillsCount }, { count: messagesCount }, { count: unreadMessagesCount }] =
    await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("skills").select("*", { count: "exact", head: true }),
      supabase.from("contact_messages").select("*", { count: "exact", head: true }),
      supabase.from("contact_messages").select("*", { count: "exact", head: true }).eq("is_read", false),
    ])

  const stats = [
    {
      title: "制作実績",
      value: projectsCount || 0,
      icon: FolderKanban,
      description: "登録されている実績数",
    },
    {
      title: "スキル",
      value: skillsCount || 0,
      icon: Wrench,
      description: "登録されているスキル数",
    },
    {
      title: "お問い合わせ",
      value: messagesCount || 0,
      icon: Mail,
      description: "受信したメッセージ数",
    },
    {
      title: "未読メッセージ",
      value: unreadMessagesCount || 0,
      icon: Eye,
      description: "未読のメッセージ数",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">ダッシュボード</h1>
        <p className="text-muted-foreground">ポートフォリオサイトの管理画面へようこそ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
