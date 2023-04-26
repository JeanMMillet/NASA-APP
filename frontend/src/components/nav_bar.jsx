/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import diamondFull from "../assets/diamondFull.svg";
import diamond from "../assets/diamond.svg";

function NavBar(props) {
  return (
    <div
      id="navbar_container"
      style={
        props.display
          ? { bottom: "-20%", transitionDelay: "0ms" }
          : { bottom: "0", transitionDelay: "600ms" }
      }
    >
      <div id="navtitle_container">
        <div id="nav_topics" className="section_container">
          <img
            className="diamond_svg"
            src={props.currentPage === "Home" ? diamondFull : diamond}
            alt="diamond logo svg"
          />
          <h4 className="nav_title" onClick={() => props.loadPage("Home")}>
            Home
          </h4>
        </div>
        <div id="nav_gallery" className="section_container">
          <img className="diamond_svg" src={diamond} alt="diamond logo svg" />
          <h4
            className="nav_title"
            onClick={() => props.setDisplayGallery(true)}
          >
            Gallery
          </h4>
        </div>
        <div id="nav_solar" className="section_container">
          <img
            className="diamond_svg"
            src={props.currentPage === "SolarSystem" ? diamondFull : diamond}
            alt="diamond logo svg"
          />
          <h4
            className="nav_title"
            onClick={() => props.loadPage("SolarSystem")}
          >
            Solar System
          </h4>
        </div>
        <div id="nav_ISS" className="section_container">
          <img
            className="diamond_svg"
            src={props.currentPage === "ISS" ? diamondFull : diamond}
            alt="diamond logo svg"
          />
          <h4 className="nav_title" onClick={() => props.loadPage("ISS")}>
            ISS Tracker
          </h4>
        </div>
      </div>
      <div id="bar_container">
        <div
          id="dynamic_bar"
          className="section_bar"
          style={{
            left:
              props.currentPage === "Home"
                ? "0"
                : props.currentPage === "SolarSystem"
                ? "50%"
                : props.currentPage === "ISS"
                ? "75%"
                : null,
          }}
        />
        <div id="progression_bar" />
      </div>
    </div>
  );
}

export default NavBar;
