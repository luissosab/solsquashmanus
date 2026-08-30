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
import Play from "./pages/Play";
import Join from "./pages/Join";
import FAQ from "./pages/FAQ";
import MembershipsAndPrices from "./pages/MembershipsAndPrices";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <PageShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/new-to-squash" component={NewToSquash} />
        <Route path="/play-and-pricing" component={() => <PlayAndPricing />} />
        <Route path="/play" component={Play} />
        <Route path="/memberships-and-prices" component={MembershipsAndPrices} />
        <Route path="/join" component={Join} />
        <Route path="/faq" component={FAQ} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/our-story" component={OurStory} />
        <Route component={NotFound} />
      </Switch>
    </PageShell>
  );
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><LenisProvider><Router /></LenisProvider><Toaster /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
