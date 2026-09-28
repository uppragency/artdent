-- Tabelul pentru lead-uri parțiale: cineva a completat numele și telefonul
-- în formularul de programare, dar nu a apăsat "Trimite".
create table if not exists partial_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null unique,
  source_page text,
  created_at timestamptz not null default now()
);

create index if not exists partial_leads_created_at_idx on partial_leads (created_at desc);

-- Fără RLS pentru citire/scriere publică — tabelul e scris și citit doar
-- din server (service role key), niciodată direct din browser.
alter table partial_leads enable row level security;
