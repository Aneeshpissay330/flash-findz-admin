import { Navigate, Route, Routes } from "react-router";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Header>
  )
}

export default App;