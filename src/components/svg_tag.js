function createSvg(className, classSvg, svgIcon, div) {
  const svgContainer = document.createElement("img");
  svgContainer.src = svgIcon;
  svgContainer.id = svgIcon;
  svgContainer.classList.add(className);
  svgContainer.classList.add(classSvg);
  div.appendChild(svgContainer);
}

export default createSvg;