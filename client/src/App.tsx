/**
 * Sun-bleached Court Club design: the full five-page route map lives within a warm, continuous clubhouse frame.
 */
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { LenisProvider } from "./components/LenisProvider";
import { PageShell } from "./components/PageShell";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NewToSquash from "./pages/NewToSquash";
import PlayAndPricing from "./pages/PlayAndPricing";
import Schedule from "./pages/Schedule";
import OurStory from "./pages/OurStory";

function Router() {
  return (
    <PageShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/new-to-squash" component={NewToSquash} />
        <Route path="/play-and-pricing" component={PlayAndPricing} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/our-story" component={OurStory} />
        <Route component={Home} />
      </Switch>
    </PageShell>
  );
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><LenisProvider><Router /></LenisProvider><Toaster /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
