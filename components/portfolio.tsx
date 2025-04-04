"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Twitter, Linkedin, Menu, X, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            neruについて
          </h1>

          {/* モバイルメニューボタン */}
          <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu} aria-label="メニュー切り替え">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  自己紹介
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  スキル
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  プロジェクト
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* モバイルナビゲーション */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <ul className="flex flex-col p-4 space-y-3">
              <li>
                <a href="#about" className="block py-2 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
                  自己紹介
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  スキル
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  プロジェクト
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* ヒーローセクション */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">松尾桜歌</span>　について
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md">株式会社Vivixy ニューバディ事業部　 共創パートナー</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="transition-transform hover:scale-105">
                ポートフォリオを見る
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-05%2022.34.28-a3pvrZyU5MOJO6NBoETCMLxlc1EW3P.png"
                alt="松尾 桜歌"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 自己紹介 */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">自己紹介</h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed">
              Vixixyしか勝たん！neruです。
              東京都生まれ、育ち。（東村山市だから東京じゃないくらい田舎）好きなことは寝ること。特技はどこでも寝れること。最近のお悩みはお腹がぽっこりしてきたこと。MBTIはENFP（広報運動家）。かまってくれる人が大好きです。ゾス！
            </p>
            <p className="text-lg leading-relaxed mt-4">
              日本語得意じゃないけど、人とのコミュニケーションは大好きです。特に、初めての人と会うのが好きで全日制の高校に通いながら、100以上のイベントに参加してきました。なんでもやります。なんでもやって、なんでもできる人になるのが目標です。
            </p>
          </div>
        </div>
      </section>

      {/* スキル */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">数字で見るneruのスキル</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "行動力・チャレンジ精神", level: 85 },
              { name: "コミュニケーション能力", level: 75 },
              { name: "学習意欲・吸収力", level: 70 },
              { name: "リーダーシップ", level: 65 },
              { name: "論理的思考・戦略的思考", level: 2 },
              { name: "ビジネススキル", level: 35 },
              { name: "適応力・柔軟性", level: 70 },
              { name: "自己管理能力", level: 40 },
            ].map((skill, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <p className="text-right mt-1 text-sm text-gray-500">{skill.level}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクト */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">実績</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "iTeachers TV Vol.398",
                description: "教育ICTを活用した新しい学びの実践やノウハウを紹介するYouTubeチャンネルに出演。",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-10%205.42.17-JNM3XjdkIdZhqhIYgYJPfRE0q8dL1V.png",
                tags: ["ICT", "教育", "国際交流"],
                demoLink: "https://youtu.be/qWbdlpldLMk?si=7jrJCqIxlgVUvpho",
                codeLink: "#",
              },
              {
                title: "2024PCカンファレンス",
                description: "地域と学生団体との関わり　をテーマに論文を執筆し、発表を行なった",
                image: "/placeholder.svg?height=300&width=500",
                tags: ["地域", "学生団体", "論文"],
                demoLink: "https://conference.ciec.or.jp/2024pcc/program/subcommittee/presentation/pcc003.html",
                codeLink: "#",
              },
              {
                title: "東村山市SDGsアイデアコンテスト",
                description: "次世代部門　高校生コース　グランプリ　受賞",
                image: "/placeholder.svg?height=300&width=500",
                tags: ["SDGs", "コンテスト", "東村山"],
                demoLink: "https://www.city.higashimurayama.tokyo.jp/shisei/keikaku/sogo/SDGs/sdgs-idea.html",
                codeLink: "#",
              },
              {
                title: "Region Link＃001 ビジネスコンテスト",
                description: "大賞　受賞　賞金30万円",
                image: "/placeholder.svg?height=300&width=500",
                tags: ["ビジネスコンテスト", "Web3", "地方創生"],
                demoLink: "https://www.rwca.or.jp/BPCbaVCi/0MaWGHb3",
                codeLink: "#",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={
                      index === 0
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-10%205.42.17-JNM3XjdkIdZhqhIYgYJPfRE0q8dL1V.png"
                        : index === 1
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9687.jpg-yxGv9SZTvXmdhFIbhxnDa3n3fZEwwB.jpeg"
                          : index === 2
                            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-10%206.47.16-gkbTMqpdbzqTnOri0RFHRDgBOGrk1l.png"
                            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-10%206.48.50-Dje5KpVyv4wwuiAuUyGHkETGGYzy7w.png"
                    }
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      詳細を見る
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h3>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-center mb-6">
              メールやソーシャルメディアでお気軽にご連絡ください。新しいプロジェクト、
              クリエイティブなアイデア、またはあなたのビジョンの一部になる機会について いつでも話し合いに応じます。
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="mailto:taro@example.com"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="メール"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/taroymada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/taroyamada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/taroyamada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="あなたのお名前"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="あなたのメールアドレス"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="件名"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="あなたのメッセージ"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                メッセージを送信
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} 松尾桜歌（neru）. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

