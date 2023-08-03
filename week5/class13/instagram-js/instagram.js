const body = document.getElementsByTagName("body")[0];

body.style.fontFamily = "";

body.style.margin = "0px";
body.style.padding = "0px";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.flexDirection = "column";

const top_part = document.createElement("div");
top_part.style.height = "401px";
top_part.style.width = "350px";
top_part.style.border = "1px solid #CCCCCC";
top_part.style.marginTop = "10px";
top_part.style.display = "flex";
top_part.style.justifyContent = "center";
top_part.style.alignItems = "center";
top_part.style.flexDirection = "column";

const image = document.createElement("img");
image.setAttribute(
  "src",
  "https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
);
image.style.height = "51px";
image.style.width = "175px";

const inps = document.createElement("div");
inps.style.display = "flex";
inps.style.flexDirection = "column";
inps.style.marginTop = "24px";
const inp1 = document.createElement("input");
inp1.style.height = "32px";
inp1.style.width = "268px";
inp1.placeholder = "Phone number, username, or email";
inp1.style.border = "1px solid #CCCCCC";
inp1.style.backgroundColor = "#FAFAFA";
inp1.style.color = "#CCCCCC";
inp1.style.borderRadius = "2px";

const inp2 = document.createElement("input");
inp2.style.height = "32px";
inp2.style.width = "268px";
inp2.placeholder = "Password";
inp2.style.border = "1px solid #CCCCCC";
inp2.style.backgroundColor = "#FAFAFA";
inp2.style.color = "#CCCCCC";
inp2.style.borderRadius = "2px";
inp2.style.marginTop = "5px";

const blue_inp = document.createElement("button");
blue_inp.style.height = "32px";
blue_inp.style.width = "268px";
blue_inp.style.marginTop = "15px";
blue_inp.style.border = "none";
blue_inp.style.background = "#0095f6";
blue_inp.style.color = "white";
blue_inp.innerHTML = "Log in";
blue_inp.style.borderRadius = "7px";
blue_inp.style.fontWeight = "bolder";

body.appendChild(top_part);
top_part.appendChild(image);
top_part.appendChild(inps);
inps.appendChild(inp1);
inps.appendChild(inp2);
inps.appendChild(blue_inp);
