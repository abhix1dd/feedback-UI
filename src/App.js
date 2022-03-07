import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";

import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconsLink from "./AboutIconsLink";

function App() {
 
 

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList
                
                />
              </>
            }
          ></Route>

          <Route exact path="/about" element={<AboutPage />}></Route>
        </Routes>
        <AboutIconsLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
