import react from "react";
import AmzReview from "./amz-review";

function App() {
  return (
    <div className="App">
      <header className="header"><u>REVIEW ANALYZER</u></header>
      <AmzReview />
      <footer className="footer">
            <small><a href='https://www.linkedin.com/in/adesh-senapati-482b90221/'>Linkedin</a>&nbsp;&nbsp;&nbsp;&nbsp; © 2022 Adesh Senapati. All rights reserved. &nbsp;&nbsp;&nbsp;&nbsp; <a href='https://github.com/AdeshSenapati'>Github</a> </small>
      </footer>
    </div>
  );
}

export default App;
