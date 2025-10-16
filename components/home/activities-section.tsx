import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ActivitiesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">個人の活動と作品</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
            様々なことに挑戦しています
            <br />
            ※クリックできます
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/activities/development" className="group">
              <Card className="border-2 hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">💻</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">個人開発</CardTitle>
                  <CardDescription className="text-base">
                    AI駆動開発による
                    <br />
                    スピーディーな開発
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/activities/books" className="group">
              <Card className="border-2 hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">📚</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">書籍出版</CardTitle>
                  <CardDescription className="text-base">
                    定期的に
                    <br />
                    書籍出版を行う
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/activities/web3" className="group">
              <Card className="border-2 hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">web3研究会</CardTitle>
                  <CardDescription className="text-base">
                    Founder/Admin
                    <br />
                    勉強会などを企画実施
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
