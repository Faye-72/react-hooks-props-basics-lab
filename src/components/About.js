import React from "react";
import Links from "./Links";
import user from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links {...user.links} />
    </div>
  );
}

export default About;
