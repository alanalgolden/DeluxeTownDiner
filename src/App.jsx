import "./App.css";
import headerImage from "./assets/towndiner.jpg";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "90vh",
        }}
      >
        <h1>Deluxe Town Diner</h1>
      </div>
      <div
        style={{
          width: "100vw",
          minHeight: "1.2em",
          backgroundColor: "#4090a8",
        }}
      >
        <div
          style={{
            maxWidth: "70vw",
            margin: "auto",
            padding: "20px 0",
          }}
        >
          <button>Menu</button>
          <button>Online Order</button>
          <button>About</button>
        </div>
      </div>
      <div>
        <h2>Our Menu</h2>
        <div className="two-columns-grid">
          <div>
            <h3>Breakfast All Day, Every Day</h3>
            <ul>
              <ul>Starters</ul>
              <ul>Sandwiches</ul>
              <ul>Specials</ul>
              <ul>Omelettes</ul>
              <ul>Sides</ul>
              <ul>From the Griddle</ul>
              <ul>Any Time Brunch Benedict</ul>
            </ul>

            <h3>Lunch & Dinner All Day, All Night</h3>
            <ul>
              <ul>Soups and Starters</ul>
              <ul>Fresh Salads</ul>
              <ul>Specialty Hot Sandwiches</ul>
              <ul>Classic Diner Sandwiches</ul>
              <ul>Club Sandwiches</ul>
              <ul>Griddled Sandwiches</ul>
              <ul>Wraps</ul>
              <ul>Burgers</ul>
              <ul>Hot Dogs</ul>
              <ul>Blue Plate Specials</ul>
              <ul>Sides</ul>
            </ul>

            <h3>Anytime, All the Time</h3>
            <ul>Kid's Menu</ul>
            <ul>Desserts</ul>
            <ul>Coffee & Tea</ul>
            <ul>Beverages</ul>
            <ul>Wine & Beer</ul>
          </div>
          <div>2</div>
        </div>
      </div>
    </>
  );
}

export default App;
