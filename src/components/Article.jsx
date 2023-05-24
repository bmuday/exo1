const Article = () => {
  // Function reference
  const logHello = () => {
    console.log("hello!");
  };

  // Function call
  logHello();

  return (
    <article id="article">
      <h2 onClick={() => console.log("hello")}>Welcome to React course</h2>
      <p onClick={(e) => console.log("event", e.target)}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        dolores autem consequuntur rem sit saepe nulla cumque beatae accusamus
        eligendi? Eligendi magnam cumque, mollitia ipsa quam natus debitis totam
        nulla!
      </p>
    </article>
  );
};

export default Article;
