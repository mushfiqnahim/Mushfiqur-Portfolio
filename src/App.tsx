import { lazy, Suspense } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import "./App.css";
import AnimatedAvatar from "./components/AnimatedAvatar";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <AnimatedAvatar />
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
