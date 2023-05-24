const Aside = () => {
  const alertMessage = () => {
    alert("You pressed a key inside the input field");
  };

  return (
    <aside id="aside">
      <h3
        onClick={(e) => {
          console.log("event1", e.target);
        }}
      >
        Categories
      </h3>
      <div>
        <h3>Tags</h3>
        <input
          type="text"
          placeholder="Entrez un tag"
          onKeyUp={() => alertMessage()}
        />
      </div>
    </aside>
  );
};

export default Aside;
