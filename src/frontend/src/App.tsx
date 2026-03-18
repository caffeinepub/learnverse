import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import AdminPage from "./pages/AdminPage";
import ArtMusicPage from "./pages/ArtMusicPage";
import ClassesPage from "./pages/ClassesPage";
import CulturePage from "./pages/CulturePage";
import ExperimentsPage from "./pages/ExperimentsPage";
import GamesPage from "./pages/GamesPage";
import GrammarPage from "./pages/GrammarPage";
import HealthPage from "./pages/HealthPage";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import LoginPage from "./pages/LoginPage";
import MathPracticePage from "./pages/MathPracticePage";
import ParentPage from "./pages/ParentPage";
import PoemsPage from "./pages/PoemsPage";
import ProfilePage from "./pages/ProfilePage";
import ProverbsPage from "./pages/ProverbsPage";
import PuzzlesPage from "./pages/PuzzlesPage";
import QuizPage from "./pages/QuizPage";
import StoriesPage from "./pages/StoriesPage";
import TurkeyMapPage from "./pages/TurkeyMapPage";
import VocabularyPage from "./pages/VocabularyPage";
import WrongAnswersPage from "./pages/WrongAnswersPage";
import MatchingGame from "./pages/games/MatchingGame";
import MathGame from "./pages/games/MathGame";
import MemoryGame from "./pages/games/MemoryGame";
import WordSearchGame from "./pages/games/WordSearchGame";

const rootRoute = createRootRoute({ component: () => <Outlet /> });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LoginPage,
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: HomePage,
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});
const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: QuizPage,
});
const gamesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games",
  component: GamesPage,
});
const memoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/memory",
  component: MemoryGame,
});
const mathRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/math",
  component: MathGame,
});
const matchingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/matching",
  component: MatchingGame,
});
const wordSearchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/games/wordsearch",
  component: WordSearchGame,
});
const cultureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/culture",
  component: CulturePage,
});
const parentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/parent",
  component: ParentPage,
});
const classesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/classes",
  component: ClassesPage,
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});
const storiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stories",
  component: StoriesPage,
});
const poemsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/poems",
  component: PoemsPage,
});
const experimentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/experiments",
  component: ExperimentsPage,
});
const puzzlesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/puzzles",
  component: PuzzlesPage,
});
const turkeyMapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/turkey-map",
  component: TurkeyMapPage,
});
const artMusicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/art-music",
  component: ArtMusicPage,
});
const wrongAnswersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wrong-answers",
  component: WrongAnswersPage,
});
const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leaderboard",
  component: LeaderboardPage,
});

const proverbsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/proverbs",
  component: ProverbsPage,
});
const grammarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/grammar",
  component: GrammarPage,
});
const vocabularyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vocabulary",
  component: VocabularyPage,
});
const mathPracticeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/math-practice",
  component: MathPracticePage,
});
const healthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/health",
  component: HealthPage,
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
  healthRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
