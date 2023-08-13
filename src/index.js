import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating />
    <StarRating
      maxRating={3}
      color="#09c"
      size={40}
      messages={["nice", "2nice", "3nice"]}
      defaultRating={1}
    />
    <Test /> */}
  </React.StrictMode>
);

// function Test() {
//   const [movieRate, setMovieRate] = useState(0);

//   return (
//     <div>
//       <StarRating color="white" maxRating={7} onSetRate={setMovieRate} />
//       <p>this movie was rated {movieRate}</p>
//     </div>
//   );
// }
