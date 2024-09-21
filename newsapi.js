let UlList = document.getElementById("list");
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  // .then((resp) => console.log(resp[0].body))
  .then((res) =>
    res.forEach((item) => {
      UlList.style.margin = "0 auto";
      UlList.style.padding = "0";
      UlList.style.width = "50vw";
      let liList = document.createElement("li");
      liList.style.width = "calc(100% - 20px)";
      liList.style.margin = "0";
      liList.style.marginBottom = "20px";
      liList.style.border = "1px solid grey";
      liList.style.borderRadius = "10px";
      liList.style.padding = "10px";
      liList.style.listStyle = "none";
      liList.style.textAlign = "justify";
      liList.innerHTML = item.body;
      UlList.append(liList);
    })
  );
