-- Tabelul pentru articolele de blog
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,           -- HTML simplu: <h2>, <h3>, <p>, <ul>/<li>, <strong>, <a>
  meta_description text not null,
  cover_image text,                -- opțional, ex: /images/blog/nume-poza.jpg
  published_at timestamptz not null default now(),
  views integer not null default 0
);

create index if not exists blog_posts_published_at_idx on blog_posts (published_at desc);
create index if not exists blog_posts_views_idx on blog_posts (views desc);

-- Securitate: oricine poate CITI articolele publicate, nimeni nu poate scrie
-- prin cheia publică (anon). Articolele se adaugă doar prin SQL Editor,
-- cu cheia de administrator din Supabase.
alter table blog_posts enable row level security;

create policy "Public can read published posts"
  on blog_posts for select
  using (published_at <= now());

-- Funcție folosită de site pentru a incrementa numărul de vizualizări
-- (apelată din server, cu cheia de service role, nu direct de vizitatori)
create or replace function increment_post_view(post_slug text)
returns void
language sql
security definer
set search_path = public
as $$
  update blog_posts set views = views + 1 where slug = post_slug;
$$;
