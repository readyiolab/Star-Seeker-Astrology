import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-Dmdsn4PS.mjs";
import { l as logoPinpost } from "./logo-pinpost-BcbTLoKX.mjs";
import { B as Button } from "./button-s3iKVh83.mjs";
import { F as FORMAT_PRESETS } from "./formatPresets-DOzBdK66.mjs";
import { p as LogOut, P as PenLine, J as Eye, S as Sparkles, K as Plus, l as FileText, N as Image, j as Clock, Q as Trash2, V as Video } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function VideoStill({
  src,
  className
}) {
  const canvasRef = reactExports.useRef(null);
  const [captured, setCaptured] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.src = src;
    const handleSeek = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = video.videoWidth || 320;
      canvas.height = video.videoHeight || 180;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setCaptured(true);
      }
      video.remove();
    };
    video.addEventListener("seeked", handleSeek, {
      once: true
    });
    video.addEventListener("loadeddata", () => {
      video.currentTime = 0.5;
    }, {
      once: true
    });
    return () => {
      video.removeEventListener("seeked", handleSeek);
      video.remove();
    };
  }, [src]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative ${className || ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: `h-full w-full object-cover ${captured ? "" : "opacity-0"}` }),
    !captured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-8 w-8 text-muted-foreground/40" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1.5 left-1.5 rounded bg-foreground/60 px-1.5 py-0.5 text-[10px] font-mono text-background", children: "Video" })
  ] });
}
function DashboardPage() {
  const {
    user,
    loading,
    signOut
  } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = reactExports.useState({
    display_name: "",
    handle: "",
    avatar_url: ""
  });
  const [avatarPath, setAvatarPath] = reactExports.useState("");
  const [drafts, setDrafts] = reactExports.useState([]);
  const [thumbnails, setThumbnails] = reactExports.useState([]);
  const [saving, setSaving] = reactExports.useState(false);
  const [loadingData, setLoadingData] = reactExports.useState(true);
  const avatarInputRef = reactExports.useRef(null);
  const [redirecting, setRedirecting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && !user && !redirecting) {
      setRedirecting(true);
      navigate({
        to: "/login"
      });
    }
  }, [user, loading, navigate, redirecting]);
  reactExports.useEffect(() => {
    if (!user) return;
    let mounted = true;
    (async () => {
      try {
        const {
          supabase
        } = await import("./client-CEawXNEK.mjs");
        const [profileRes, draftsRes] = await Promise.all([supabase.from("profiles").select("*").eq("id", user.id).single(), supabase.from("drafts").select("*").eq("user_id", user.id).order("updated_at", {
          ascending: false
        })]);
        if (!mounted) return;
        if (profileRes.data) {
          const rawPath = profileRes.data.avatar_url || "";
          setAvatarPath(rawPath);
          let avatarUrl = rawPath;
          if (avatarUrl && !avatarUrl.startsWith("http")) {
            const {
              data: signedData
            } = await supabase.storage.from("avatars").createSignedUrl(avatarUrl, 3600);
            avatarUrl = signedData?.signedUrl || "";
          }
          setProfile({
            display_name: profileRes.data.display_name || "",
            handle: profileRes.data.handle || "",
            avatar_url: avatarUrl
          });
        }
        if (draftsRes.data) {
          const typedDrafts = draftsRes.data;
          setDrafts(typedDrafts);
          const thumbs = [];
          for (const d of typedDrafts) {
            const {
              data: imageData
            } = await supabase.from("draft_media").select("storage_path, file_type").eq("draft_id", d.id).eq("file_type", "image").eq("uploaded", true).order("sort_order", {
              ascending: true
            }).limit(1);
            if (!mounted) return;
            if (imageData && imageData.length > 0) {
              const {
                data: signedData
              } = await supabase.storage.from("draft-media").createSignedUrl(imageData[0].storage_path, 3600);
              if (signedData?.signedUrl) {
                thumbs.push({
                  draftId: d.id,
                  url: signedData.signedUrl,
                  type: "image"
                });
                continue;
              }
            }
            const {
              data: videoData
            } = await supabase.from("draft_media").select("storage_path, file_type").eq("draft_id", d.id).eq("file_type", "video").eq("uploaded", true).order("sort_order", {
              ascending: true
            }).limit(1);
            if (!mounted) return;
            if (videoData && videoData.length > 0) {
              const {
                data: signedData
              } = await supabase.storage.from("draft-media").createSignedUrl(videoData[0].storage_path, 3600);
              if (signedData?.signedUrl) {
                thumbs.push({
                  draftId: d.id,
                  url: signedData.signedUrl,
                  type: "video"
                });
              }
            }
          }
          if (mounted) setThumbnails(thumbs);
        }
      } catch (e) {
        console.error("Failed to load dashboard data", e);
      } finally {
        if (mounted) setLoadingData(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [user]);
  const saveProfile = reactExports.useCallback(async () => {
    if (!user) return;
    setSaving(true);
    try {
      const {
        supabase
      } = await import("./client-CEawXNEK.mjs");
      await supabase.from("profiles").upsert({
        id: user.id,
        display_name: profile.display_name,
        handle: profile.handle,
        avatar_url: avatarPath,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (e) {
      console.error("Failed to save profile", e);
    } finally {
      setSaving(false);
    }
  }, [user, profile, avatarPath]);
  const getSignedAvatarUrl = reactExports.useCallback(async (path) => {
    const {
      supabase
    } = await import("./client-CEawXNEK.mjs");
    const {
      data
    } = await supabase.storage.from("avatars").createSignedUrl(path, 3600);
    return data?.signedUrl || "";
  }, []);
  const handleAvatarUpload = reactExports.useCallback(async (files) => {
    if (!files?.[0] || !user) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) return;
    try {
      const {
        supabase
      } = await import("./client-CEawXNEK.mjs");
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${user.id}/avatar.${ext}`;
      await supabase.storage.from("avatars").upload(path, file, {
        upsert: true
      });
      const storagePath = path;
      const signedUrl = await getSignedAvatarUrl(storagePath);
      setAvatarPath(storagePath);
      setProfile((p) => ({
        ...p,
        avatar_url: signedUrl
      }));
      await supabase.from("profiles").upsert({
        id: user.id,
        avatar_url: storagePath,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (e) {
      console.error("Failed to upload avatar", e);
    }
  }, [user, getSignedAvatarUrl]);
  const deleteDraft = reactExports.useCallback(async (id) => {
    try {
      const {
        supabase
      } = await import("./client-CEawXNEK.mjs");
      await supabase.from("drafts").delete().eq("id", id);
      setDrafts((prev) => prev.filter((d) => d.id !== id));
      setThumbnails((prev) => prev.filter((t) => t.draftId !== id));
    } catch (e) {
      console.error("Failed to delete draft", e);
    }
  }, []);
  if (loading || redirecting || !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" }) });
  }
  const firstName = profile.display_name?.split(" ")[0] || "there";
  const getThumbnail = (draftId) => thumbnails.find((t) => t.draftId === draftId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-white px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoPinpost, alt: "PinPost", className: "h-7 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden md:inline", children: user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", onClick: signOut, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 py-10 space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: [
          "Welcome back, ",
          firstName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-lg", children: "Create, preview, and enhance your social media posts across Instagram, LinkedIn, X, and Facebook — all in one place." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 active:scale-[0.98]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "New post" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Start composing" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          const el = document.getElementById("profile-section");
          el?.scrollIntoView({
            behavior: "smooth"
          });
        }, className: "group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 active:scale-[0.98] text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Edit profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Name, handle, avatar" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 active:scale-[0.98]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "AI enhance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Optimize your copy" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Your drafts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: drafts.length === 0 ? "No saved drafts yet" : `${drafts.length} draft${drafts.length === 1 ? "" : "s"} saved` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "gap-1.5", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
            "New post"
          ] }) })
        ] }),
        loadingData ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : drafts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border py-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-muted mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-7 w-7 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "No drafts yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto", children: "Create your first post to see how it looks across all platforms before publishing." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "mt-4 gap-1.5 bg-white", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
            "Create your first post"
          ] }) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: drafts.map((draft) => {
          const format = FORMAT_PRESETS[draft.format_key];
          const thumb = getThumbnail(draft.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", search: {
            draft: draft.id
          }, className: "group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-primary/30 active:scale-[0.99]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36 w-full bg-muted overflow-hidden shrink-0", children: [
              thumb ? thumb.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx(VideoStill, { src: thumb.url, className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: thumb.url, alt: "Draft preview", className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-8 w-8 text-muted-foreground/40" }) }),
              format && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 text-[10px] font-medium text-foreground bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-md", children: format.shortLabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between p-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate leading-tight", children: draft.title || "Untitled draft" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed", children: draft.text?.slice(0, 120) || "Empty draft" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-2.5 w-2.5" }),
                  new Date(draft.updated_at).toLocaleDateString(void 0, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  deleteDraft(draft.id);
                }, className: "flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
              ] })
            ] })
          ] }, draft.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "profile-section", className: "rounded-xl border border-border bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Profile settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "· Shown in previews" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: avatarInputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
            handleAvatarUpload(e.target.files);
            e.target.value = "";
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => avatarInputRef.current?.click(), className: "h-20 w-20 shrink-0 rounded-full border border-border bg-muted/40 flex items-center justify-center overflow-hidden transition-all hover:border-primary/40 hover:shadow-md active:scale-95", title: "Upload profile image", children: profile.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile.avatar_url, alt: "Profile", className: "h-full w-full object-cover rounded-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-5 w-5 text-muted-foreground/60" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground mb-1.5 block", children: "Display name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: profile.display_name, onChange: (e) => setProfile((p) => ({
                ...p,
                display_name: e.target.value
              })), placeholder: "Your name", className: "w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground mb-1.5 block", children: "Handle" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground", children: "@" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: profile.handle, onChange: (e) => setProfile((p) => ({
                  ...p,
                  handle: e.target.value.replace(/^@/, "")
                })), placeholder: "handle", className: "w-full rounded-lg border border-input bg-transparent pl-7 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: saveProfile, disabled: saving, className: "mt-1", children: saving ? "Saving…" : "Save profile" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  DashboardPage as component
};
