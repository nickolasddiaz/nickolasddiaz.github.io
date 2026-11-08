<script lang="ts">
  import Navbar from "#lib/components/Navbar.svelte";
  import "../app.css";

  let { children } = $props();

  type themeType = "dark" | "light" | "system";
  let theme: themeType = $state("system");

  $effect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      theme =
        savedTheme === "dark" ||
        savedTheme === "light" ||
        savedTheme === "system"
          ? savedTheme
          : "system";
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        updateDOM(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  });

  $effect(() => {
    if (theme === "system") {
      localStorage.removeItem("theme");
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      updateDOM(isDark ? "dark" : "light");
    } else {
      localStorage.setItem("theme", theme);
      updateDOM(theme);
    }
  });

  function updateDOM(currentMode: themeType) {
    if (currentMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<Navbar />
{@render children()}
