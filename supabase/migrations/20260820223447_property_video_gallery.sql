alter table public.properties
  add column if not exists videos jsonb not null default '[]'::jsonb;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'property-videos',
  'property-videos',
  true,
  6291456,
  array['video/mp4', 'video/webm', 'video/quicktime']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view property videos" on storage.objects;
create policy "Public can view property videos"
on storage.objects for select
to public
using (bucket_id = 'property-videos');

drop policy if exists "Authenticated users can upload property videos" on storage.objects;
create policy "Authenticated users can upload property videos"
on storage.objects for insert
to authenticated
with check (bucket_id = 'property-videos');

drop policy if exists "Owners can update property videos" on storage.objects;
create policy "Owners can update property videos"
on storage.objects for update
to authenticated
using (bucket_id = 'property-videos' and owner_id = (select auth.uid()::text))
with check (bucket_id = 'property-videos' and owner_id = (select auth.uid()::text));

drop policy if exists "Owners can delete property videos" on storage.objects;
create policy "Owners can delete property videos"
on storage.objects for delete
to authenticated
using (bucket_id = 'property-videos' and owner_id = (select auth.uid()::text));
