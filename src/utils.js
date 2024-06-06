import proj1 from "./assets/projects/project1.svg";
import proj2 from "./assets/projects/project2.svg";
import proj3 from "./assets/projects/project3.svg";

const links = [
    { path: "/", name: "main" },
    { path: "/gallery", name: "gallery" },
    { path: "/projects", name: "projects" },
    { path: "/certifications", name: "certifications" },
    { path: "/contacts", name: "contacts" },
];

const projects = [
    {
        image: proj1,
        title: "Sample Project",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        image: proj2,
        title: "Sample Project 2",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        image: proj3,
        title: "Sample Project 3",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

export { links, projects };
