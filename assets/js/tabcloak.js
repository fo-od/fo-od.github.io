const
    main = document.querySelector('main') || {},
    form = document.querySelector('form') || {},
    input = !form=={} ? form.querySelector('input') : {},
    title = localStorage.getItem('title'),
    icon = localStorage.getItem('icon');
    pageicon = document.getElementById("pageicon");

//Tab Cloaking JS
function tabtitle() {
    const titlechange = document.getElementById("tabtitle");
    window.localStorage.setItem("title", titlechange.value);
    window.document.title = titlechange.value;
};

if (window.localStorage.hasOwnProperty('title')) {
    document.title = title;
};

//Tab Icon
function tabicon() {
    const titlechange = document.getElementById("tabtitle");
    document.head.querySelector("link[rel=icon]").href = titlechange.value;
    window.localStorage.setItem("icon", titlechange.value);
    loadPicture()
};

if (window.localStorage.hasOwnProperty("icon")) {
    document.querySelector("link[rel=icon]").href = icon;
};

//Sets image to the tab icon
function loadPicture() {
    if (window.localStorage.hasOwnProperty("icon")) {
        pageicon.setAttribute("src", localStorage.getItem("icon"));
    } else {
        pageicon.setAttribute("src", "/images/Degener.png");
    };
};

//Clears Tab Icon and Title
function resetTab() {
    let items = ["icon", "title"];

    items.forEach(item =>
        localStorage.removeItem(item));
    window.location.reload();
    pageicon();
};
