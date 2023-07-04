import List from "../List/List";

const Home = ({ tagId }) => {
  return (
    <div className="App">
      <h1>React Animations List</h1>
      <h2>using gtag (example - {tagId})</h2>
      <List tagId={tagId} />
    </div>
  );
};

export default Home;
