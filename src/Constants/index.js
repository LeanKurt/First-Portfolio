import { facebook, twitter, instagram } from "../assets/icons";
import { Lean, html, css, javascript, react, Hoobank, Temperature,Mousetracker,Form  } from "../assets/images";

export const navLinks = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Projects' },
    { id: 4, name: 'Contacts' }
  ];

  export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const myProfile = [
  { src : Lean, alt: "my profile"}
]

export const mySkills = [
  { src: html , alt: "html"},
  { src: css, alt: "css"},
  { src: javascript, alt: "javascript"},
  { src: react, alt: "react"},
]

export const myProjects = [
  { src : Hoobank, title: "Hoobank App"},
  { src: Temperature, title: "Temperature Converter App"},
  { src: Mousetracker, title: "MouseTracker Website"},
  { src: Form, title: "Controlled Form"},
]

