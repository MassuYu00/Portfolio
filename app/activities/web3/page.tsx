import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Users, Target, Trophy } from "lucide-react"

export default function Web3Page() {
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
                <span className="text-4xl">⚡</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">web3研究会</h1>
              <p className="text-xl text-muted-foreground mb-2">
                創設者/代表
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>設立：2025年4月</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  総メンバー：155人（2025年10月現在）
                </span>
              </div>
            </div>

            <div className="space-y-12">
              {/* 目的セクション */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl">研究会の目的</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold mt-0.5">1.</span>
                      <span className="text-base">学生主体で学ぶ・成長する環境を創る</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold mt-0.5">2.</span>
                      <span className="text-base">大学発ベンチャー/スタートアップの土壌を創る</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold mt-0.5">3.</span>
                      <span className="text-base">産学協同や他大学との共同研究のきっかけを創る</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold mt-0.5">4.</span>
                      <span className="text-base">挑戦する者の環境を創る</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 組織体制セクション */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">組織体制</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-base px-3 py-1">特別顧問</Badge>
                      <span className="text-base font-medium">伊藤穰一（学長）</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-base px-3 py-1">顧問</Badge>
                      <span className="text-base font-medium">髙木徹（教員）</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-base px-3 py-1">創設者/代表</Badge>
                      <span className="text-base font-medium">増山裕輔</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 三大要素セクション */}
              <div>
                <h2 className="text-2xl font-bold mb-6">研究会の三大要素</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl mb-3">🏆</div>
                      <h3 className="font-bold text-lg">ハッカソン</h3>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl mb-3">🤝</div>
                      <h3 className="font-bold text-lg">外部組織との連携</h3>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl mb-3">🚀</div>
                      <h3 className="font-bold text-lg">起業</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 実績セクション */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">主な実績</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-0.5">1.</span>
                        <div>
                          <h3 className="font-semibold text-base mb-1">Solana Hackathon Workshop</h3>
                          <p className="text-sm text-muted-foreground">ワークショップ共催</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-0.5">2.</span>
                        <div>
                          <h3 className="font-semibold text-base mb-1">ETH Tokyo 2025 ハッカソン</h3>
                          <p className="text-sm text-muted-foreground">参加</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-0.5">3.</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-base">Base ハッカソン</h3>
                            <Badge variant="default" className="text-xs">入賞</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">優秀な成績を収めました</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-0.5">4.</span>
                        <div>
                          <h3 className="font-semibold text-base mb-1">Binance Academy</h3>
                          <p className="text-sm text-muted-foreground">教育プログラム共催の権利獲得</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-0.5">5.</span>
                        <div>
                          <h3 className="font-semibold text-base mb-1">Sui Workshop</h3>
                          <p className="text-sm text-muted-foreground">ワークショップ共催</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-0.5">6.</span>
                        <div>
                          <h3 className="font-semibold text-base mb-1">TORYUMONコミュニティパートナー</h3>
                          <p className="text-sm text-muted-foreground">パートナーシップ締結</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 研究会資料セクション */}
              <Card className="border-2 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">研究会の詳細資料</h3>
                      <p className="text-sm text-muted-foreground">
                        より詳しい活動内容や今後のビジョンについてご覧いただけます
                      </p>
                    </div>
                    <Button asChild className="shrink-0">
                      <a 
                        href="https://www.canva.com/design/DAGrDbOHXLU/WXrrWQagniSk67jnwM-qVQ/view?utm_content=DAGrDbOHXLU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdf47bc10ec" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        資料を見る
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
