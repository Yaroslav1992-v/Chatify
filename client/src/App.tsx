import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Terms from "./pages/rules/Terms";
import StartPage from "./pages/start/start";
import "./styles/index.scss";
import Privacy from "./pages/rules/Privacy";

import { Auth } from "./pages/Auth/Auth";
import { Main } from "./pages/main/Main";
import { Chat } from "./pages/Chat/Chat";
function App() {
  return (
    <>
      <Helmet>
        <title>Chatify</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="login" element={<Auth />} />
        <Route path="main" element={<Main />} />
        <Route path="chat" element={<Chat />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
