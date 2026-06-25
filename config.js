// Supabase 연결 정보 (레포에 커밋됨 — 배포 사이트에서 사용)
// anon 키는 공개 전제 키라 노출돼도 안전. 진짜 보안은 Supabase Auth + 본인-only RLS.
// service_role 키는 절대 여기 넣지 말 것.
window.SUPABASE_URL = "https://hqgqvbdujfcbuaznjaaq.supabase.co";        // 예) https://abcd1234.supabase.co
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZ3F2YmR1amZjYnVhem5qYWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMTM3NDUsImV4cCI6MjA5NzY4OTc0NX0.OxrgXNz9YO5A2iu5gaoJg3WwTDPPssdwYDA-NVXvYeA"; // anon public 키 (service_role 키 아님!)
