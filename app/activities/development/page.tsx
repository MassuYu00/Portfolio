import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function DevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ホームに戻る
              </Link>
            </Button>

            <div className="mb-12">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-4xl">💻</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">個人開発</h1>
              <p className="text-xl text-muted-foreground">
                AI駆動開発によるスピーディーな開発
              </p>
            </div>

            <div className="space-y-12">
              {/* 作品セクション */}
              <div>
                <h2 className="text-2xl font-bold mb-6">作品</h2>
                <div className="grid gap-6">
                  {/* Toronto Info */}
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">Toronto Info</CardTitle>
                          <CardDescription className="text-base">
                            カナダ トロント在住の日本人向け匿名掲示板
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4 shrink-0">公開中</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        ワーキングホリデーや語学留学などでトロントを訪れる人の多くはe-Mapleという、家探しや仕事探しなどの情報を共有し合う掲示板があります。
                        Toronto Infoでは、e-Mapleの完全上位互換プラットフォームを目指し、今後のビジョンとして、トロントだけでなく世界の国々に展開していきます。
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <a 
                          href="https://toronto-info.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          サイトを見る
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* CarSab */}
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">CarSab</CardTitle>
                          <CardDescription className="text-base">
                            車のサブスクアプリケーション
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-4 shrink-0">作成中</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        私の父から開発を依頼されたアプリになります。
                        私の父は車屋を営んでおり、新規事業展開として保有する車の貸し出しサービスをサブスク形式で展開したいという要望を受けましたので開発しております。
                        個人情報の取り扱いや保険の仕組みやライセンスなどといった、システム外の知識も必要な非常に難易度の高い依頼です。
                      </p>
                    </CardContent>
                  </Card>

                  {/* Crypto Investment Note */}
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">Crypto Investment Note (CIN)</CardTitle>
                          <CardDescription className="text-base">
                            暗号資産投資のインテリジェンスプラットフォーム
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-4 shrink-0">作成中</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-accent text-accent-foreground">
                          Baseハッカソン入賞
                        </Badge>
                        <Badge className="bg-primary text-primary-foreground">
                          社内企画に採用
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        2025年9月に出場したBase(Blockchain)ハッカソンで入賞したプラットフォームになります。第2次トランプ政権の影響により、Blockchainや暗号資産・ステーブルコインを取り入れたイノベーションが巻き起こっていますが、投資の視点からweb3を見ると「詐欺の横行」や「投資パフォーマンスが把握しにくい」といった問題を抱えています。CINではそれら問題に対してインテリジェンスプラットフォームとして解決します。現在所属する会社で新規事業企画のアイデアとして採用され、個人ではなく会社で企画・開発を進めています。
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 開発手法セクション */}
              <div>
                <h2 className="text-2xl font-bold mb-6">開発手法</h2>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span>AI駆動開発によるコーディング効率化</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span>モダンな技術スタック（Next.js, TypeScript, Tailwind CSS...）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span>要件定義書からモック作成、コーディングまで全ての工程でAIを活用</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span>継続的なAIキャッチアップによるAI駆動開発の最適解を日々模索</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
