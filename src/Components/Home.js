import React from "react";

const Home = () => {
  return (
  <div>
  <h1>Welcome</h1>
  <p>Michael Lopez is a full-stack web developer, who takes pride in what he works on. becoming a web developer has always been an interest of his, once he found online resources to learn how to code, he knew he wanted to make it a career out of it. When he is not coding, he is spending time with his family, watching a movie, or outside riding the ATV with his son.</p>
  <div className="icons">
  <box-icon type='logo' name='html5'></box-icon>
  <box-icon name='css3' type='logo' ></box-icon>
  <box-icon name='javascript' type='logo' ></box-icon>
  <box-icon name='react' type='logo' ></box-icon>
  <box-icon name='nodejs' type='logo' ></box-icon>
  <box-icon name='postgresql' type='logo' ></box-icon>
  <box-icon name='git' type='logo' ></box-icon>
  </div>
  </div>
  )
};

export default Home;
