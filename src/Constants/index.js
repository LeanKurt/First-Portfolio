import { facebook, twitter, instagram } from "../assets/icons";
import { Lean, html, css, javascript, react, Hoobank, Temperature, Mousetracker, Form , github } from "../assets/images";

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
  { src : Hoobank, title: "Hoobank App" , description: "Hoobank is a cutting-edge banking website designed to seamlessly integrate financial services, offering users a secure and intuitive platform for managing their finances with ease."},
  { src: Temperature, title: "Temperature Converter App", description: "Introducing our Temperature Converter App, simplifying the process of converting between Celsius, Fahrenheit, and Kelvin with precision and user-friendly functionality."},
  { src: Mousetracker, title: "MouseTracker Website", description: "MouseTracker Website is an innovative platform that allows users to effortlessly monitor and analyze mouse movements."},
  { src: Form, title: "Controlled Form", description: "Controlled Form is a dynamic application designed to streamline data entry and management processes."},
]

export const logo = [{
  src : github, alt: "github logo"
}]
