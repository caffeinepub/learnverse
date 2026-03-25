import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./i18n/ThemeContext";
import LoginPage from "./pages/LoginPage";

// Lazy-loaded pages
const AdminPage = lazy(() => import("./pages/AdminPage"));
const ArtMusicPage = lazy(() => import("./pages/ArtMusicPage"));
const ClassesPage = lazy(() => import("./pages/ClassesPage"));
const CodingPage = lazy(() => import("./pages/CodingPage"));
const ColoringPage = lazy(() => import("./pages/ColoringPage"));
const CulturePage = lazy(() => import("./pages/CulturePage"));
const EnglishPage = lazy(() => import("./pages/EnglishPage"));
const ExperimentsPage = lazy(() => import("./pages/ExperimentsPage"));
const GamesPage = lazy(() => import("./pages/GamesPage"));
const GeographyPage = lazy(() => import("./pages/GeographyPage"));
const GrammarPage = lazy(() => import("./pages/GrammarPage"));
const HealthPage = lazy(() => import("./pages/HealthPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LeaderboardPage = lazy(() => import("./pages/LeaderboardPage"));
const MathPracticePage = lazy(() => import("./pages/MathPracticePage"));
const MathStoryPage = lazy(() => import("./pages/MathStoryPage"));
const ParentPage = lazy(() => import("./pages/ParentPage"));
const PoemsPage = lazy(() => import("./pages/PoemsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ProverbsPage = lazy(() => import("./pages/ProverbsPage"));
const PuzzlesPage = lazy(() => import("./pages/PuzzlesPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const SciencePage = lazy(() => import("./pages/SciencePage"));
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const TurkeyMapPage = lazy(() => import("./pages/TurkeyMapPage"));
const TracingPage = lazy(() => import("./pages/TracingPage"));
const VocabularyPage = lazy(() => import("./pages/VocabularyPage"));
const WrongAnswersPage = lazy(() => import("./pages/WrongAnswersPage"));
const PlacementTestPage = lazy(() => import("./pages/PlacementTestPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const MultiplicationTablePage = lazy(
  () => import("./pages/MultiplicationTablePage"),
);
const MatchingGame = lazy(() => import("./pages/games/MatchingGame"));
const MathGame = lazy(() => import("./pages/games/MathGame"));
const MemoryGame = lazy(() => import("./pages/games/MemoryGame"));
const WordSearchGame = lazy(() => import("./pages/games/WordSearchGame"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">🎓</div>
        <div className="text-white text-xl font-bold">LearnVerse</div>
        <div className="mt-3 flex justify-center gap-1">
          <div
            className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}

function withSuspense(Component: React.ComponentType) {
  return function SuspenseWrapper() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    );
  };
}

const rootRoute = createRootRoute({ component: () => <Outlet /> });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LoginPage,
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: withSuspense(HomePage),
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: withSuspense(ProfilePage),
});
const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: withSuspense(QuizPage),
});
const gamesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games",
  component: withSuspense(GamesPage),
});
const memoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/memory",
  component: withSuspense(MemoryGame),
});
const mathRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/math",
  component: withSuspense(MathGame),
});
const matchingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/matching",
  component: withSuspense(MatchingGame),
});
const wordSearchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/wordsearch",
  component: withSuspense(WordSearchGame),
});
const cultureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/culture",
  component: withSuspense(CulturePage),
});
const parentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/parent",
  component: withSuspense(ParentPage),
});
const classesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/classes",
  component: withSuspense(ClassesPage),
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: withSuspense(AdminPage),
});
const storiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stories",
  component: withSuspense(StoriesPage),
});
const poemsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/poems",
  component: withSuspense(PoemsPage),
});
const experimentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/experiments",
  component: withSuspense(ExperimentsPage),
});
const puzzlesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/puzzles",
  component: withSuspense(PuzzlesPage),
});
const turkeyMapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/turkey-map",
  component: withSuspense(TurkeyMapPage),
});
const artMusicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/art-music",
  component: withSuspense(ArtMusicPage),
});
const wrongAnswersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wrong-answers",
  component: withSuspense(WrongAnswersPage),
});
const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leaderboard",
  component: withSuspense(LeaderboardPage),
});
const proverbsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/proverbs",
  component: withSuspense(ProverbsPage),
});
const grammarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/grammar",
  component: withSuspense(GrammarPage),
});
const vocabularyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vocabulary",
  component: withSuspense(VocabularyPage),
});
const mathPracticeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/math-practice",
  component: withSuspense(MathPracticePage),
});
const mathStoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/math-story",
  component: withSuspense(MathStoryPage),
});
const healthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/health",
  component: withSuspense(HealthPage),
});
const geographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/geography",
  component: withSuspense(GeographyPage),
});
const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: withSuspense(HistoryPage),
});
const scienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/science",
  component: withSuspense(SciencePage),
});
const englishRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/english",
  component: withSuspense(EnglishPage),
});
const coloringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coloring",
  component: withSuspense(ColoringPage),
});
const codingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coding",
  component: withSuspense(CodingPage),
});
const tracingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tracing",
  component: withSuspense(TracingPage),
});
const favoritesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/favorites",
  component: withSuspense(FavoritesPage),
});
const placementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/placement-test",
  component: withSuspense(PlacementTestPage),
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: withSuspense(SearchPage),
});
const multiplicationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/multiplication",
  component: withSuspense(MultiplicationTablePage),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  profileRoute,
  quizRoute,
  gamesRoute,
  memoryRoute,
  mathRoute,
  matchingRoute,
  wordSearchRoute,
  cultureRoute,
  parentRoute,
  classesRoute,
  adminRoute,
  storiesRoute,
  poemsRoute,
  experimentsRoute,
  puzzlesRoute,
  turkeyMapRoute,
  artMusicRoute,
  wrongAnswersRoute,
  leaderboardRoute,
  proverbsRoute,
  grammarRoute,
  vocabularyRoute,
  mathPracticeRoute,
  mathStoryRoute,
  healthRoute,
  geographyRoute,
  historyRoute,
  scienceRoute,
  englishRoute,
  coloringRoute,
  codingRoute,
  tracingRoute,
  placementRoute,
  favoritesRoute,
  multiplicationRoute,
  searchRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
