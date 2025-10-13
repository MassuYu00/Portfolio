import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { MessageActions } from "@/components/message-actions"

export default async function AdminMessagesPage() {
  const supabase = await getSupabaseServerClient()

  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">お問い合わせ管理</h1>
        <p className="text-muted-foreground">受信したお問い合わせメッセージの一覧です</p>
      </div>

      {messages && messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((message) => (
            <Card key={message.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{message.subject}</CardTitle>
                      <Badge variant={message.is_read ? "secondary" : "default"}>
                        {message.is_read ? "既読" : "未読"}
                      </Badge>
                    </div>
                    <CardDescription>
                      {message.name} ({message.email}) • {new Date(message.created_at).toLocaleString("ja-JP")}
                    </CardDescription>
                  </div>
                  <MessageActions messageId={message.id} isRead={message.is_read} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-wrap">{message.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">まだお問い合わせメッセージがありません</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
