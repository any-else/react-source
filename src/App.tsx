import { Outlet, Route, Routes } from "react-router-dom";
import TriggerAnimation from "./components/core/useEffect/TriggerAnimation";
import Hooks from "./hooks";
import HookState from "./hooks/useState/HookState";
import UseReducer from "./hooks/useReducer/UseReducer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/animation" element={<TriggerAnimation />} />
        <Route path="/hooks" element={<Hooks />}>
          <Route path="state" element={<HookState />} />
          <Route path="reducer" element={<UseReducer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
