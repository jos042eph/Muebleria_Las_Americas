<!-- supabase-config.js -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  // REEMPLAZA con tus datos de Settings → API
  const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
  const SUPABASE_ANON_KEY = "TU-ANON-KEY";

  // Cliente global
  window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
</script>
