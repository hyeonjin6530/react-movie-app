import { dummy } from "./movieDummy";
import Movie from "./component/Movie";

function App() {
  return (
    <div>
      <div className="app-container">
        {
          dummy.results.map((item) => {
            return(
                <Movie
                title={item.title}
                vote_average={item.vote_average}
                />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
