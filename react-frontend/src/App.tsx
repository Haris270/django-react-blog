import { useState, useEffect } from "react";
import Posts from "./components/Posts";
// class connectionExample extends React.Component {
//   componentDidMount() {
//     const apiUrl = "http://127.0.0.1:8000/api/";
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
//   render() {
//     return <div>Example connection</div>;
//   }
// }

// export default connectionExample;
function App() {
  const [appState, setAppState] = useState({
    posts: null,
  });

  useEffect(() => {
    //   setAppState({ loading: true });
    const apiUrl = "http://127.0.0.1:8000/api/";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        console.log("response from api:", posts);
        setAppState({ posts: posts });
      });
  }, []);

  // });

  // },{setAppState});

  return (
    <div>
      <h1>Heya!!</h1>
      <Posts posts={appState.posts} />
    </div>
  );

  // })
}

export default App;
