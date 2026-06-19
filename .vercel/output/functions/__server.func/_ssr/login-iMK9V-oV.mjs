import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-Dmdsn4PS.mjs";
import { B as Button, c as cn } from "./button-s3iKVh83.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as logoPinpost } from "./logo-pinpost-BcbTLoKX.mjs";
import { L as LoaderCircle, e as Mail } from "../_libs/lucide-react.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = Root.displayName;
function LoginPage() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [signingIn, setSigningIn] = reactExports.useState(false);
  const [authError, setAuthError] = reactExports.useState(null);
  const [mode, setMode] = reactExports.useState("login");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [emailLoading, setEmailLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && user) {
      navigate({
        to: "/dashboard"
      });
    }
  }, [user, loading, navigate]);
  const handleGoogleSignIn = async () => {
    setSigningIn(true);
    setAuthError(null);
    try {
      const {
        supabase
      } = await import("./client-CEawXNEK.mjs");
      const {
        error
      } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            prompt: "select_account"
          }
        }
      });
      if (error) {
        console.error("Sign in error:", error);
        setAuthError("Google sign-in did not start. Please try again.");
      }
    } catch (e) {
      console.error("Google sign-in initialization error:", e);
      setAuthError("Google sign-in could not be loaded. Please try again.");
    } finally {
      setSigningIn(false);
    }
  };
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setEmailLoading(true);
    setAuthError(null);
    try {
      const {
        supabase
      } = await import("./client-CEawXNEK.mjs");
      if (mode === "signup") {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin
          }
        });
        if (error) {
          setAuthError(error.message);
        } else {
          toast.success("Check your email for a confirmation link.");
        }
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) {
          setAuthError(error.message);
        }
      }
    } catch (e2) {
      console.error("Email auth error:", e2);
      setAuthError("Something went wrong. Please try again.");
    } finally {
      setEmailLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoPinpost, alt: "PinPost", className: "h-10 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center", children: "Sign in to preview your posts across every platform" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 shadow-sm space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "lg", className: "w-full gap-3", onClick: handleGoogleSignIn, disabled: signingIn, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z", fill: "#4285F4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
        ] }),
        signingIn ? "Signing in…" : "Continue with Google"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card px-2 text-muted-foreground", children: "or" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleEmailAuth, className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-xs", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", placeholder: "you@example.com", value: email, onChange: (e) => setEmail(e.target.value), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", className: "text-xs", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), required: true, minLength: 6 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full gap-2", disabled: emailLoading, children: [
          emailLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          mode === "login" ? "Sign in" : "Create account"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: mode === "login" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          setMode("signup");
          setAuthError(null);
        }, className: "font-medium text-primary underline-offset-2 hover:underline", children: "Sign up" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          setMode("login");
          setAuthError(null);
        }, className: "font-medium text-primary underline-offset-2 hover:underline", children: "Sign in" })
      ] }) }),
      authError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive text-center", children: authError })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: "By signing in, you agree to our terms of service and privacy policy." })
  ] }) });
}
export {
  LoginPage as component
};
