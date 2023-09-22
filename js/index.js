const output = document.querySelector("#output");
const url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
.then(async (res) => {
    const data = await res.json();
    if (data.status == "success") {
        const image = data.message;
        output.setAttribute("src", image);
    } else {
        alert("取得できませんでした。")
    }
})