import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CreateNewWallet from "./pages/Create-new-wallet";
import RestoreWallet from "./pages/Restore-wallet";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateWallet from "./pages/Create-wallet";
import NewPage from "./pages/New-Page";
import VerifyWord from "./pages/Verify-word";
import WalletList from "./pages/Wallet-list";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import ImportWalletTold from "./pages/Import-wallet-told";
import RecieveToken from "./pages/Recieve-token";
import SendToken from "./pages/Send-token";
import ConnectionAndSync from "./components/layout/Connection-and-sync";
import SettingMain from "./pages/settings-nav/setting-main";
import Wallet from "./pages/settings-nav/wallets/wallet-main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-new-wallet" element={<CreateNewWallet />} />
        <Route path="/restore-wallet" element={<RestoreWallet />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/verify-word" element={<VerifyWord />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/wallet-list" element={<WalletList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/import-wallet-told" element={<ImportWalletTold />} />
        <Route path="/recieve-token" element={<RecieveToken />} />
        <Route path="/send-token" element={<SendToken />} />

        {/* ========== Setting Section ======= */}
        <Route path="/setting-nav">
          <Route
            path="connection-and-sync"
            element={
              <SettingMain>
                <ConnectionAndSync />
              </SettingMain>
            }
          ></Route>

          <Route
            path="wallets"
            element={
              <SettingMain>
                <Wallet />
              </SettingMain>
            }
          ></Route>

          <Route
            path="address-book"
            element={
              <SettingMain>
                <Wallet />
              </SettingMain>
            }
          ></Route>

          <Route
            path="security-and-backup"
            element={
              <SettingMain>
                <Wallet />
              </SettingMain>
            }
          ></Route>

          <Route
            path="privacy"
            element={
              <SettingMain>
                <Wallet />
              </SettingMain>
            }
          ></Route>

          <Route
            path="support"
            element={
              <SettingMain>
                <Wallet />
              </SettingMain>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
