import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link, g as getRouteApi } from "../_libs/tanstack__react-router.mjs";
import { l as logoPinpost } from "./logo-pinpost-BcbTLoKX.mjs";
import { B as Button, c as cn } from "./button-s3iKVh83.mjs";
import { F as FORMAT_PRESETS, a as FORMAT_KEYS } from "./formatPresets-DOzBdK66.mjs";
import { u as useAuth } from "./router-Dmdsn4PS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Root, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { o as ArrowLeft, p as LogOut, n as ChevronDown, q as CircleAlert, R as RotateCw, X, r as FileImage, s as FilePlay, t as ImagePlus, V as Video, L as LoaderCircle, S as Sparkles, m as Check, F as Facebook, T as Twitter, u as Linkedin, I as Instagram, H as Heart, v as MessageCircle, w as Send, x as Bookmark, y as ThumbsUp, z as Repeat, D as Share2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tiny-warning.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
const platformMeta = {
  instagram: { icon: Instagram, name: "Instagram", color: "text-pink-500" },
  linkedin: { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
  x: { icon: Twitter, name: "X", color: "text-foreground" },
  facebook: { icon: Facebook, name: "Facebook", color: "text-blue-600" }
};
function PlatformPreview({ platform, text, media = [], formatKey = "post_square", displayName, handle, profileImageUrl }) {
  const meta = platformMeta[platform];
  const Icon = meta.icon;
  const displayText = text || "Your post preview will appear here…";
  const preset = FORMAT_PRESETS[formatKey];
  const dims = preset.platforms[platform];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-white shadow-sm overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2.5 border-b border-border bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-3.5 w-3.5 ${meta.color}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: meta.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[10px] text-muted-foreground font-mono tabular-nums", children: [
        dims.width,
        "×",
        dims.height
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden", children: profileImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImageUrl, alt: "", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: displayName?.[0]?.toUpperCase() || "Y" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-none", children: displayName || "Your name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: platform === "instagram" ? handle || "your_handle" : platform === "x" ? `@${handle || "you"} · now` : platform === "linkedin" ? `${displayName || "Your title"} · Just now` : "Just now · 🌐" })
        ] })
      ] }),
      text ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed whitespace-pre-line text-foreground", children: platform === "instagram" && text.length > 125 ? text.slice(0, 125) + "… more" : text }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground italic", children: displayText }),
      media.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-0.5", children: media.length === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-lg border border-border bg-muted", style: { aspectRatio: dims.ratio.replace("/", " / ") }, children: [
        media[0].type === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: media[0].url, alt: "", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: media[0].url, className: "h-full w-full object-cover", controls: true, playsInline: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1.5 right-1.5 rounded bg-foreground/60 px-1.5 py-0.5 text-[10px] font-mono text-background tabular-nums", children: preset.shortLabel })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg border border-border", children: media.slice(0, 4).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative bg-muted ${media.length === 3 && i === 0 ? "row-span-2" : ""}`,
          style: { aspectRatio: media.length === 3 && i === 0 ? dims.ratio.replace("/", " / ") : "1 / 1" },
          children: [
            m.type === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.url, alt: "", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: m.url, className: "h-full w-full object-cover", controls: true, playsInline: true }),
            media.length > 4 && i === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-foreground/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-semibold text-background", children: [
              "+",
              media.length - 4
            ] }) })
          ]
        },
        m.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border", children: [
        platform === "instagram" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4 text-muted-foreground ml-auto" })
        ] }),
        platform === "linkedin" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "h-3.5 w-3.5" }),
            " Like"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
            " Comment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "h-3.5 w-3.5" }),
            " Repost"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }),
            " Send"
          ] })
        ] }),
        platform === "x" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
            " 0"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "h-3.5 w-3.5" }),
            " 0"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5" }),
            " 0"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3.5 w-3.5" }) })
        ] }),
        platform === "facebook" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "h-3.5 w-3.5" }),
            " Like"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
            " Comment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3.5 w-3.5" }),
            " Share"
          ] })
        ] })
      ] })
    ] })
  ] });
}
const PLATFORM_LIMITS$1 = {
  instagram: 2200,
  linkedin: 3e3,
  x: 280,
  facebook: 63206
};
function EnhanceButton({ text, onSelect }) {
  const [loading, setLoading] = reactExports.useState(false);
  const [suggestions, setSuggestions] = reactExports.useState(null);
  const enhance = async () => {
    if (!text.trim()) {
      toast.error("Write something first before enhancing.");
      return;
    }
    setLoading(true);
    setSuggestions(null);
    try {
      const { supabase } = await import("./client-CEawXNEK.mjs");
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        toast.error("Please log in to use AI enhance.");
        return;
      }
      const resp = await fetch("/api/enhance-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`
        },
        body: JSON.stringify({ text })
      });
      const data = await resp.json();
      if (!resp.ok) {
        toast.error(data.error || "Failed to enhance post.");
        return;
      }
      if (data.suggestions && Array.isArray(data.suggestions)) {
        setSuggestions(data.suggestions);
      } else {
        toast.error("Unexpected response from AI.");
      }
    } catch (e) {
      console.error("Enhance error:", e);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleSelect = (suggestion) => {
    onSelect(suggestion.text);
    setSuggestions(null);
    toast.success(`Applied "${suggestion.label}" variation.`);
  };
  const platforms = ["instagram", "linkedin", "x", "facebook"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        onClick: enhance,
        disabled: loading || !text.trim(),
        className: "gap-1.5 text-xs",
        children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }),
          "Enhancing…"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          "Enhance with AI"
        ] })
      }
    ),
    suggestions && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px]",
          onClick: () => setSuggestions(null)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-x-4 top-1/2 z-50 mx-auto max-w-lg -translate-y-1/2 rounded-xl border border-border bg-popover p-4 shadow-xl sm:inset-x-auto sm:w-[480px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Pick a variation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSuggestions(null),
              className: "flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:scale-95",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: suggestions.map((s, i) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-md",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: s.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      className: "h-7 gap-1 text-xs opacity-0 transition-opacity group-hover:opacity-100",
                      onClick: () => handleSelect(s),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                        "Use this"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap text-sm leading-relaxed text-foreground", children: s.text }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: platforms.map((p) => {
                  const limit = PLATFORM_LIMITS$1[p];
                  const count = s.text.length;
                  const over = count > limit;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `rounded px-1.5 py-0.5 text-[10px] font-mono tabular-nums ${over ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`,
                      children: [
                        p === "x" ? "X" : p,
                        " ",
                        count,
                        "/",
                        limit
                      ]
                    },
                    p
                  );
                }) })
              ]
            },
            i
          );
        }) })
      ] })
    ] })
  ] });
}
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root.displayName;
const editorRoute = getRouteApi("/editor");
const PLATFORM_LIMITS = {
  instagram: 2200,
  linkedin: 3e3,
  x: 280,
  facebook: 63206
};
async function uploadFileWithProgress(file, storagePath, token, onProgress) {
  const supabaseUrl = "https://mfbpyzqykswfoobkedeh.supabase.co";
  const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mYnB5enF5a3N3Zm9vYmtlZGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NzI3NTcsImV4cCI6MjA5NzE0ODc1N30.1iyTX9Al9xDgEFQVF7zPZwrpIlC6c_J6VytdCchQ56A";
  const url = `${supabaseUrl}/storage/v1/object/draft-media/${storagePath}`;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.setRequestHeader("apikey", anonKey);
    xhr.setRequestHeader("x-upsert", "true");
    xhr.setRequestHeader("Content-Type", file.type);
    console.log("[Upload] Starting XHR upload:", storagePath, "size:", file.size, "type:", file.type);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        onProgress(Math.round(e.loaded / e.total * 100));
      }
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("[Upload] Success:", storagePath);
        onProgress(100);
        resolve();
      } else {
        console.error("[Upload] Failed:", xhr.status, xhr.responseText);
        reject(new Error(`Upload failed: ${xhr.status} ${xhr.responseText}`));
      }
    };
    xhr.onerror = () => {
      console.error("[Upload] Network error");
      reject(new Error("Network error during upload"));
    };
    xhr.ontimeout = () => reject(new Error("Upload timed out"));
    xhr.timeout = 0;
    xhr.send(file);
  });
}
function PostEditor() {
  const [text, setText] = reactExports.useState("");
  const [activePlatform, setActivePlatform] = reactExports.useState("all");
  const [mediaFiles, setMediaFiles] = reactExports.useState([]);
  const [dragOver, setDragOver] = reactExports.useState(false);
  const [selectedFormat, setSelectedFormat] = reactExports.useState("post_square");
  const [formatOpen, setFormatOpen] = reactExports.useState(false);
  const [displayName, setDisplayName] = reactExports.useState("");
  const [handle, setHandle] = reactExports.useState("");
  const [profileImageUrl, setProfileImageUrl] = reactExports.useState("");
  const [draftId, setDraftId] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [uploadProgress, setUploadProgress] = reactExports.useState({});
  const [uploadErrors, setUploadErrors] = reactExports.useState({});
  const { user, signOut } = useAuth();
  const fileInputRef = reactExports.useRef(null);
  const profileImageRef = reactExports.useRef(null);
  useNavigate();
  const uploadingIdsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const draftIdRef = reactExports.useRef(null);
  const { draft } = editorRoute.useSearch();
  reactExports.useEffect(() => {
    draftIdRef.current = draftId;
  }, [draftId]);
  reactExports.useCallback(async () => {
    if (draftId) return draftId;
    if (!user) return null;
    const { supabase } = await import("./client-CEawXNEK.mjs");
    const title = text.slice(0, 60).trim() || "Untitled draft";
    const { data } = await supabase.from("drafts").insert({
      user_id: user.id,
      title,
      text,
      format_key: selectedFormat
    }).select("id").single();
    if (data) {
      setDraftId(data.id);
      return data.id;
    }
    return null;
  }, [draftId, user, text, selectedFormat]);
  reactExports.useEffect(() => {
    if (!user) return;
    let mounted = true;
    (async () => {
      try {
        const { supabase } = await import("./client-CEawXNEK.mjs");
        const { data: profileData } = await supabase.from("profiles").select("*").eq("id", user.id).single();
        if (!mounted) return;
        if (profileData) {
          setDisplayName(profileData.display_name || "");
          setHandle(profileData.handle || "");
          let avatarUrl = profileData.avatar_url || "";
          if (avatarUrl && !avatarUrl.startsWith("http")) {
            const { data: signedData } = await supabase.storage.from("avatars").createSignedUrl(avatarUrl, 3600);
            avatarUrl = signedData?.signedUrl || "";
          }
          setProfileImageUrl(avatarUrl);
        }
        if (draft) {
          const { data: draftData } = await supabase.from("drafts").select("*").eq("id", draft).eq("user_id", user.id).single();
          if (!mounted) return;
          if (draftData) {
            setDraftId(draftData.id);
            setText(draftData.text || "");
            setSelectedFormat(draftData.format_key || "post_square");
            const { data: mediaData } = await supabase.from("draft_media").select("*").eq("draft_id", draftData.id).order("sort_order", { ascending: true });
            if (!mounted) return;
            if (mediaData && mediaData.length > 0) {
              const loadedMedia = [];
              for (const m of mediaData) {
                const isUploaded = m.uploaded !== false;
                if (!isUploaded) {
                  loadedMedia.push({
                    id: m.storage_path.split("/").pop() || crypto.randomUUID(),
                    file: new File([], m.file_name || "file"),
                    url: "",
                    previewUrl: "",
                    type: m.file_type === "video" ? "video" : "image",
                    uploaded: false,
                    storagePath: m.storage_path,
                    dbRecordId: m.id
                  });
                  continue;
                }
                const { data: signedData } = await supabase.storage.from("draft-media").createSignedUrl(m.storage_path, 3600);
                if (signedData?.signedUrl) {
                  loadedMedia.push({
                    id: m.storage_path.split("/").pop() || crypto.randomUUID(),
                    file: new File([], m.file_name || "file", { type: m.file_type === "video" ? "video/mp4" : "image/jpeg" }),
                    url: signedData.signedUrl,
                    previewUrl: signedData.signedUrl,
                    type: m.file_type === "video" ? "video" : "image",
                    uploaded: true,
                    storagePath: m.storage_path,
                    dbRecordId: m.id
                  });
                }
              }
              if (!mounted) return;
              setMediaFiles(loadedMedia);
            }
          }
        }
      } catch (e) {
        console.error("Failed to load editor data", e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [user, draft]);
  const uploadFileImmediately = reactExports.useCallback(async (media) => {
    if (!user) return;
    if (uploadingIdsRef.current.has(media.id)) return;
    uploadingIdsRef.current.add(media.id);
    try {
      const { supabase } = await import("./client-CEawXNEK.mjs");
      let currentDraftId = draftIdRef.current;
      if (!currentDraftId) {
        const { data } = await supabase.from("drafts").insert({
          user_id: user.id,
          title: text.slice(0, 60).trim() || "Untitled draft",
          text,
          format_key: selectedFormat
        }).select("id").single();
        if (data) {
          currentDraftId = data.id;
          setDraftId(data.id);
          draftIdRef.current = data.id;
        } else {
          throw new Error("Failed to create draft");
        }
      }
      const storagePath = `${user.id}/${currentDraftId}/${media.id}`;
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData?.session?.access_token;
      if (!token) throw new Error("No auth token");
      setUploadProgress((prev) => ({ ...prev, [media.id]: 0 }));
      setUploadErrors((prev) => {
        const n = { ...prev };
        delete n[media.id];
        return n;
      });
      console.log("[Upload] Starting upload for", media.file.name, "size:", media.file.size);
      await uploadFileWithProgress(
        media.file,
        storagePath,
        token,
        (pct) => setUploadProgress((prev) => ({ ...prev, [media.id]: pct }))
      );
      console.log("[Upload] Storage upload complete, inserting DB row");
      const { error: dbError } = await supabase.from("draft_media").insert({
        draft_id: currentDraftId,
        user_id: user.id,
        storage_path: storagePath,
        file_type: media.type,
        file_name: media.file.name || "file",
        sort_order: 0,
        uploaded: true
      });
      if (dbError) {
        console.error("[Upload] DB insert failed:", dbError);
        throw new Error("Failed to save media record: " + dbError.message);
      }
      console.log("[Upload] DB row inserted successfully for", storagePath);
      setMediaFiles((prev) => prev.map(
        (m) => m.id === media.id ? { ...m, uploaded: true, storagePath } : m
      ));
      setTimeout(() => {
        setUploadProgress((prev) => {
          const n = { ...prev };
          delete n[media.id];
          return n;
        });
      }, 1500);
    } catch (err) {
      console.error("[Upload] Failed for", media.file.name, err);
      setUploadErrors((prev) => ({ ...prev, [media.id]: err?.message || "Upload failed" }));
      setUploadProgress((prev) => {
        const n = { ...prev };
        delete n[media.id];
        return n;
      });
    } finally {
      uploadingIdsRef.current.delete(media.id);
    }
  }, [user, draftId, text, selectedFormat]);
  const saveDraft = reactExports.useCallback(async () => {
    if (!user) return;
    setSaving(true);
    try {
      const { supabase } = await import("./client-CEawXNEK.mjs");
      const title = text.slice(0, 60).trim() || "Untitled draft";
      let currentDraftId = draftId;
      if (currentDraftId) {
        await supabase.from("drafts").update({
          title,
          text,
          format_key: selectedFormat,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", currentDraftId);
      } else {
        const { data } = await supabase.from("drafts").insert({
          user_id: user.id,
          title,
          text,
          format_key: selectedFormat
        }).select("id").single();
        if (data) {
          currentDraftId = data.id;
          setDraftId(data.id);
        }
      }
      if (currentDraftId) {
        const { data: existingMedia } = await supabase.from("draft_media").select("id, storage_path, uploaded").eq("draft_id", currentDraftId);
        const existingPaths = new Set((existingMedia || []).map((m) => m.storage_path));
        const currentIds = new Set(mediaFiles.map((m) => m.id));
        const toDelete = (existingMedia || []).filter((m) => {
          const mediaId = m.storage_path.split("/").pop();
          return !currentIds.has(mediaId || "");
        });
        for (const d of toDelete) {
          await supabase.from("draft_media").delete().eq("id", d.id);
          if (d.uploaded) {
            await supabase.storage.from("draft-media").remove([d.storage_path]);
          }
        }
        for (let i = 0; i < mediaFiles.length; i++) {
          const media = mediaFiles[i];
          const storagePath = `${user.id}/${currentDraftId}/${media.id}`;
          if (existingPaths.has(storagePath)) {
            await supabase.from("draft_media").update({ sort_order: i }).eq("draft_id", currentDraftId).eq("storage_path", storagePath);
          }
        }
      }
    } catch (e) {
      console.error("Failed to save draft", e);
    } finally {
      setSaving(false);
    }
  }, [user, draftId, text, selectedFormat, mediaFiles]);
  const handleProfileImage = reactExports.useCallback((files) => {
    if (!files || !files[0]) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) return;
    if (profileImageUrl) URL.revokeObjectURL(profileImageUrl);
    setProfileImageUrl(URL.createObjectURL(file));
  }, [profileImageUrl]);
  const platforms = ["instagram", "linkedin", "x", "facebook"];
  const handleFileSelect = reactExports.useCallback(async (files) => {
    if (!files) return;
    const newMedia = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");
      if (!isImage && !isVideo) continue;
      const blobUrl = URL.createObjectURL(file);
      const mediaItem = {
        id: crypto.randomUUID(),
        file,
        url: blobUrl,
        previewUrl: blobUrl,
        type: isVideo ? "video" : "image",
        uploaded: false
      };
      newMedia.push(mediaItem);
    }
    if (newMedia.length > 0) {
      setMediaFiles((prev) => [...prev, ...newMedia]);
      for (const media of newMedia) {
        uploadFileImmediately(media);
      }
    }
  }, [uploadFileImmediately]);
  const removeMedia = reactExports.useCallback((id) => {
    setMediaFiles((prev) => {
      const removed = prev.find((m) => m.id === id);
      if (removed && removed.url.startsWith("blob:")) URL.revokeObjectURL(removed.url);
      return prev.filter((m) => m.id !== id);
    });
    setUploadProgress((prev) => {
      const n = { ...prev };
      delete n[id];
      return n;
    });
    setUploadErrors((prev) => {
      const n = { ...prev };
      delete n[id];
      return n;
    });
  }, []);
  const handleDrop = reactExports.useCallback(
    (e) => {
      e.preventDefault();
      setDragOver(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect]
  );
  const hasActiveUploads = Object.keys(uploadProgress).length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-12 shrink-0 items-center justify-between border-b border-border bg-white px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoPinpost, alt: "PinPost", className: "h-6 w-auto" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden md:inline", children: user?.email }),
        hasActiveUploads && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground animate-pulse", children: "Uploading media…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: saveDraft, disabled: saving, children: saving ? "Saving…" : "Save draft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", onClick: signOut, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col border-r border-border bg-white md:w-[420px] shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-medium text-foreground", children: "Compose" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-auto p-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: profileImageRef,
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (e) => {
                  handleProfileImage(e.target.files);
                  e.target.value = "";
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => profileImageRef.current?.click(),
                className: "h-10 w-10 shrink-0 rounded-full border border-border bg-muted flex items-center justify-center overflow-hidden transition-colors hover:border-primary/40 active:scale-95",
                title: "Upload profile image",
                children: profileImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImageUrl, alt: "Profile", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-muted-foreground", children: displayName?.[0]?.toUpperCase() || "?" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: displayName,
                  onChange: (e) => setDisplayName(e.target.value),
                  placeholder: "Display name",
                  className: "flex-1 rounded-md border border-input bg-transparent px-2.5 py-1.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground", children: "@" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: handle,
                    onChange: (e) => setHandle(e.target.value.replace(/^@/, "")),
                    placeholder: "handle",
                    className: "w-full rounded-md border border-input bg-transparent pl-6 pr-2.5 py-1.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: text,
              onChange: (e) => setText(e.target.value),
              placeholder: "Write your post here…",
              className: "w-full min-h-[180px] resize-none rounded-lg border border-input bg-transparent p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring leading-relaxed"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnhanceButton, { text, onSelect: setText }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: platforms.map((p) => {
            const limit = PLATFORM_LIMITS[p];
            const count = text.length;
            const over = count > limit;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-center justify-between rounded-md border px-2.5 py-1.5 text-xs transition-colors ${over ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-border text-muted-foreground"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize font-medium", children: p === "x" ? "X" : p }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono tabular-nums", children: [
                    count,
                    "/",
                    limit
                  ] })
                ]
              },
              p
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setFormatOpen(!formatOpen),
                className: "flex w-full items-center justify-between rounded-lg border border-border px-3 py-2.5 text-sm transition-colors hover:border-primary/40 active:scale-[0.98]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Format" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: FORMAT_PRESETS[selectedFormat].shortLabel })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 text-muted-foreground transition-transform ${formatOpen ? "rotate-180" : ""}` })
                ]
              }
            ),
            formatOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setFormatOpen(false) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-full z-20 mt-1 rounded-lg border border-border bg-popover p-1 shadow-lg", children: FORMAT_KEYS.map((key) => {
                const preset = FORMAT_PRESETS[key];
                const dims = preset.platforms.instagram;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      setSelectedFormat(key);
                      setFormatOpen(false);
                    },
                    className: `flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors active:scale-[0.98] ${selectedFormat === key ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/50"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: preset.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono tabular-nums", children: [
                        dims.width,
                        "×",
                        dims.height
                      ] })
                    ]
                  },
                  key
                );
              }) })
            ] })
          ] }),
          mediaFiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: mediaFiles.map((media) => {
            const progress = uploadProgress[media.id];
            const error = uploadErrors[media.id];
            const isUploading = progress !== void 0;
            const noPreview = !media.url && !media.uploaded;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative aspect-square rounded-lg overflow-hidden border border-border bg-muted", children: [
              noPreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full w-full items-center justify-center flex-col gap-1 p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground text-center", children: "Upload pending" })
              ] }) : media.type === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: media.previewUrl || media.url, alt: "Upload preview", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: media.previewUrl || media.url, className: "h-full w-full object-cover", controls: true, playsInline: true }),
              isUploading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-background/80 p-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progress, className: "h-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground mt-0.5 block text-center", children: [
                  progress,
                  "%"
                ] })
              ] }),
              error && !isUploading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => uploadFileImmediately(media),
                  className: "flex items-center gap-1 rounded-md bg-destructive/10 px-2 py-1 text-xs text-destructive",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "h-3 w-3" }),
                    " Retry"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => removeMedia(media.id),
                  className: "absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground/70 text-background opacity-0 transition-opacity group-hover:opacity-100 active:scale-95",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1 left-1", children: media.type === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx(FileImage, { className: "h-3.5 w-3.5 text-background drop-shadow" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-3.5 w-3.5 text-background drop-shadow" }) })
            ] }, media.id);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: "image/*,video/*",
              multiple: true,
              className: "hidden",
              onChange: (e) => {
                handleFileSelect(e.target.files);
                e.target.value = "";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => fileInputRef.current?.click(),
              onDragOver: (e) => {
                e.preventDefault();
                setDragOver(true);
              },
              onDragLeave: () => setDragOver(false),
              onDrop: handleDrop,
              className: `flex w-full items-center justify-center gap-3 rounded-lg border border-dashed p-6 text-sm transition-colors active:scale-[0.98] ${dragOver ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4 w-4" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add images or video" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden flex-1 flex-col md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 border-b border-border px-4 py-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActivePlatform("all"),
              className: `rounded-md px-3 py-1.5 text-xs font-medium transition-colors active:scale-[0.97] ${activePlatform === "all" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`,
              children: "All"
            }
          ),
          platforms.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActivePlatform(p),
              className: `rounded-md px-3 py-1.5 text-xs font-medium transition-colors capitalize active:scale-[0.97] ${activePlatform === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`,
              children: p === "x" ? "X" : p
            },
            p
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto p-6 bg-surface", children: activePlatform === "all" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 max-w-4xl mx-auto", children: platforms.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformPreview, { platform: p, text, media: mediaFiles, formatKey: selectedFormat, displayName, handle, profileImageUrl }, p)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformPreview, { platform: activePlatform, text, media: mediaFiles, formatKey: selectedFormat, displayName, handle, profileImageUrl }) }) })
      ] })
    ] })
  ] });
}
function EditorPage() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && !user && !redirecting) {
      setRedirecting(true);
      navigate({
        to: "/login"
      });
    }
  }, [user, loading, navigate, redirecting]);
  if (loading || redirecting || !loading && !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PostEditor, {});
}
export {
  EditorPage as component
};
