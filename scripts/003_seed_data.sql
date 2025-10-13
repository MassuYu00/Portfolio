-- Sample skills data (サンプルスキルデータ)
INSERT INTO skills (name, category, proficiency) VALUES
  ('TypeScript', 'フロントエンド', 5),
  ('React', 'フロントエンド', 5),
  ('Next.js', 'フロントエンド', 5),
  ('Tailwind CSS', 'フロントエンド', 4),
  ('Node.js', 'バックエンド', 4),
  ('PostgreSQL', 'バックエンド', 4),
  ('Supabase', 'バックエンド', 4),
  ('Git', 'ツール', 5),
  ('Figma', 'デザイン', 3),
  ('Docker', 'インフラ', 3)
ON CONFLICT DO NOTHING;

-- Note: プロフィールと実績データは管理画面から追加してください
