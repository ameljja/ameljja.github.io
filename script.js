const width = window.innerWidth;
const p = document.querySelector("p");

const getPercentX = x => Math.round((x / width) * 360);
const styleEl = document.documentElement.style;
const setStyle = styleEl.setProperty.bind(styleEl);

document.addEventListener("click", (e) => {
    const gradStart = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
    const gradEnd = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

    setStyle("--grad-start", gradStart);
    setStyle("--grad-end", gradEnd);
    p.setAttribute("data-gradStart", gradStart + "  |  ");
    p.setAttribute("data-gradEnd", gradEnd);
});
