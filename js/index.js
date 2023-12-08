const elementProjects = document.getElementById("project__content");

const createImage = (projectImage) => {
  const elementPicture = document.createElement("picture");
  const elementImg = document.createElement("img");

  elementImg.setAttribute("src", projectImage);

  elementPicture.appendChild(elementImg);

  return elementPicture;
};

const createStrong = (projectName) => {
  const elementStrong = document.createElement("strong");
  elementStrong.innerText = projectName;

  return elementStrong;
};

const createTags = (projectTags) => {
  const elementTags = document.createElement("div");
  projectTags.forEach((tag) => {
    const elementTag = document.createElement("span");
    elementTag.innerText = tag;

    elementTags.appendChild(elementTag);
  });

  return elementTags;
};

const createProject = (project, index) => {
  const elementProject = document.createElement("a");

  elementProject.setAttribute("href", project.link);
  elementProject.setAttribute("target", "_blank");

  elementProject.setAttribute("data-aos", "zoom-in-up");
  elementProject.setAttribute("data-aos-duration", "800");
  elementProject.setAttribute("data-aos-easing", "ease-in-out");
  elementProject.setAttribute("data-aos-offset", "-100");
  elementProject.setAttribute("data-aos-delay", 300 * (index + 1));

  elementProject.classList.add("project");

  // add imagem de capa
  elementProject.appendChild(createImage(project.image));

  //add nome do projeto
  elementProject.appendChild(createStrong(project.name));

  // add tags do projetp
  elementProject.appendChild(createTags(project.tags));

  return elementProject;
};

const loadProjects = (projects) => {
  projects.forEach((project, index) => {
    elementProjects.appendChild(createProject(project, index));
  });
};

fetch("./projects.json")
  .then((response) => response.json())
  .then(loadProjects);
