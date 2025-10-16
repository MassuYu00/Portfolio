import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    {
      id: "1",
      name: "AI駆動開発",
      icon: "🧠",
      description: "AI技術を活用した\n効率的な開発"
    },
    {
      id: "2",
      name: "Web3",
      icon: "⚡",
      description: "ブロックチェーン技術の\n研究と実装"
    },
    {
      id: "3",
      name: "リーダーシップ",
      icon: "👑",
      description: "チームを導く\n統率力"
    },
    {
      id: "4",
      name: "交渉力",
      icon: "🤝",
      description: "Win-Winを実現する\nコミュニケーション"
    },
    {
      id: "5",
      name: "チームマネジメント",
      icon: "👥",
      description: "メンバーの力を\n最大化する管理能力"
    },
    {
      id: "6",
      name: "営業",
      icon: "💼",
      description: "顧客ニーズを捉える\n提案力"
    },
    {
      id: "7",
      name: "プレゼンテーション",
      icon: "📊",
      description: "わかりやすく伝える\n表現力"
    },
    {
      id: "8",
      name: "企画",
      icon: "💡",
      description: "新しい価値を生み出す\n発想力"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">スキルセット</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
            多様なスキルで価値を創造します
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <Card key={skill.id} className="border-2 hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{skill.name}</CardTitle>
                  <CardDescription className="text-base whitespace-pre-line">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
