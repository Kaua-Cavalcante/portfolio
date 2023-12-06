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

const createProject = (project) => {
  const elementProject = document.createElement("a");

  elementProject.setAttribute("href", project.link);
  elementProject.setAttribute("target", "_blank");

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
  projects.forEach((project) => {
    elementProjects.appendChild(createProject(project));
  });
};

fetch("./projects.json")
  .then((response) => response.json())
  .then(loadProjects);
