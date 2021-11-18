import React from "react";
import Header from "../header";
import Loading from "../loading";
import Nav from "../nav";
import Stories from "../stories";
import { Container } from "./styles";

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
const nytapi = "v6opbbkTilATsgJHrFEGQKYG4mQFVga6";

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [section, setSection] = React.useState("arts");

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
    if (hash !== "undefined") {
      setSection("arts");
    }
  }, []);

  React.useEffect(() => {
    setLoading(true);
    console.log(section);
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setStories(data.results))
      .then(setLoading(true))
      .catch((error) => {
        console.log(error);
      });
  }, [section]);

  return (
    <>
      <Container>
        <Header siteTitle="All the News that Fits We Print" />
        <Nav navItems={navItems} setSection={setSection} section={section} />
        {loading || stories.length === 0 ? (
          <Loading />
        ) : (
          <Stories stories={stories} section={section} />
        )}
      </Container>
    </>
  );
}

export default App;
