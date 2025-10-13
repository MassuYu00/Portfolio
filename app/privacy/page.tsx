import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">プライバシーポリシー</h1>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">個人情報の取り扱いについて</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当サイトでは、お問い合わせフォームを通じて取得した個人情報を、
                    お問い合わせへの対応のみに使用し、第三者に提供することはありません。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">収集する情報</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    お問い合わせフォームでは、以下の情報を収集します:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>お名前</li>
                    <li>メールアドレス</li>
                    <li>お問い合わせ内容</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">情報の利用目的</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    収集した個人情報は、お問い合わせへの回答、 およびそれに関連する連絡のためにのみ使用します。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">情報の管理</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    個人情報は適切に管理し、不正アクセス、紛失、破壊、
                    改ざん、漏洩などを防止するため、必要な措置を講じます。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    プライバシーポリシーに関するご質問は、 お問い合わせフォームよりご連絡ください。
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground">最終更新日: {new Date().toLocaleDateString("ja-JP")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
