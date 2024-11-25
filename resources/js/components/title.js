const title = document.createElement("h1");

title.textContent = import.meta.env.VITE_TITLE;

document.body.appendChild(title);

const title2 = document.createElement("p");
title2.textContent = "This is paragraph";
document.body.appendChild(title2);
