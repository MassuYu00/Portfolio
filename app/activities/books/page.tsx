import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function BooksPage() {
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
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <span className="text-4xl">📚</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">書籍出版</h1>
              <p className="text-xl text-muted-foreground">
                定期的に書籍出版を行う
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground">
                知見や経験をまとめ、書籍として出版する活動を定期的に行っています。
                学んだことをアウトプットすることで、自分自身の理解を深めるとともに、
                読者にとって価値のある情報を提供することを目指しています。
              </p>

              {/* 書籍一覧 */}
              <div className="grid gap-6">
                {/* 書籍1 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
                    <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden flex items-center justify-center p-2">
                      <img
                        src="/Book1.png"
                        alt="30分でワーホリの概要とリアルを掴む本 2025"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-2">
                          <span className="text-xs text-muted-foreground">留学・ワーホリ・経験談</span>
                        </div>
                        <CardTitle className="text-xl mb-3">30分でワーホリの概要とリアルを掴む本 2025</CardTitle>
                        <CardDescription className="text-base mb-4 leading-relaxed">
                          大学在学中にカナダのトロントにワーキングホリデーにて半年滞在した経験談を元に、現地で有意義に過ごすためのノウハウや、ワーホリのリアルなどを述べています。
                        </CardDescription>
                      </div>
                      <Button asChild variant="default" size="sm" className="w-fit">
                        <a
                          href="https://amzn.asia/d/a10Vl3z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Amazon Kindleで見る
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* 書籍2 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
                    <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden flex items-center justify-center p-2">
                      <img
                        src="/Book2.png"
                        alt="キミを動かす きっかけ"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">自己啓発本</span>
                          <span className="text-xs bg-muted px-2 py-1 rounded">共著</span>
                        </div>
                        <CardTitle className="text-xl mb-3">キミを動かす "きっかけ"</CardTitle>
                        <CardDescription className="text-base mb-4 leading-relaxed">
                          私は本には"誰かに 何かの 良い きっかけ"を作れる力があると考えております。本から得られるものは知識だけでなく、背中を押してくれる・行動を促してくれるという側面もあり、読書を通じて今の私はあると考えています。そして、私自身もきっかけをもらうだけでなく、誰かにきっかけを作りたいと考えてできたのが本書となります。なお、本書は私が最も人生の影響を受けた先生との共著書になります。
                        </CardDescription>
                      </div>
                      <Button asChild variant="default" size="sm" className="w-fit">
                        <a
                          href="https://amzn.asia/d/gTZV4ST"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Amazon Kindleで見る
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* 書籍3 - 匿名出版 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-6xl mb-4">📖</div>
                        <div className="text-sm font-medium text-muted-foreground">匿名出版</div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">人生戦略</span>
                          <span className="text-xs bg-muted px-2 py-1 rounded">匿名出版</span>
                        </div>
                        <CardTitle className="text-xl mb-3">匿名出版</CardTitle>
                        <CardDescription className="text-base mb-4 leading-relaxed">
                          これまでの人生を振り返り、どのような戦略が現代に効果的なのかを実体験をベースに考察しています。
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 書籍4 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
                    <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden flex items-center justify-center p-2">
                      <img
                        src="/Book4.png"
                        alt="AI DRIVEN SHIFT"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">AI駆動開発・新卒未経験エンジニア・キャリア</span>
                          <span className="text-xs bg-muted px-2 py-1 rounded">共著</span>
                        </div>
                        <CardTitle className="text-xl mb-3">AI DRIVEN SHIFT</CardTitle>
                        <CardDescription className="text-base mb-4 leading-relaxed">
                          私は学生時代の職歴的にも、自分の得意的にもエンジニアサイドではなくビジネスサイドの人間です。しかし、新卒としてあえてエンジニアになりました。
                          それは、学生時代に経験させていただいたVCや営業のインターンを通じて、技術からビジネスを見れた方が、ビジネスに対する解像度が高くなる。という仮説を持ったためです。実際に、エンジニアになってみて私の仮説は正しかったのか。また、社会構造を大きく変えているAIは今後のエンジニアにどのような影響を出すのか。などをVCでエンジニアとしてインターンしている学生との共著として出版しています。
                        </CardDescription>
                      </div>
                      <Button asChild className="w-fit">
                        <a href="https://amzn.asia/d/3KnsnyK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Amazon Kindleで見る
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* 書籍5 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
                    <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden flex items-center justify-center p-2">
                      <img
                        src="/Book5.png"
                        alt="教養としての 金融・経済"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">教養・金融・経済</span>
                        </div>
                        <CardTitle className="text-xl mb-3">教養としての 金融・経済</CardTitle>
                        <CardDescription className="text-base mb-4 leading-relaxed">
                          私は年間100冊弱ほどの本を読むのですが、大半は投資や金融・経済といったジャンルの本になります。このジャンルの本を読んでいつも感じることは「なぜ、これほど重要なことを義務教育や高等教育で私は学ばなかったのか」という疑問があり、本書を通じて「これまで読書を通じて獲得してきた金融・経済知識のアウトプット」を兼ねて、「教養として知っておいた方が良い金融・経済知識」を読者に提供することを目的としています。また、私の研究領域であるweb3がもたらす金融革命という独自の視点も内容に取り入れています。
                        </CardDescription>
                      </div>
                      <Button asChild variant="default" size="sm" className="w-fit">
                        <a
                          href="https://amzn.asia/d/1BmrjjT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Amazon Kindleで見る
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
