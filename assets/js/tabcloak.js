 function setCookie(name, value) {
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + date + "; ";
    }

    function removeCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; ";
    }

    function pageTitle(value) {
        let tag = document.getElementsByTagName("title")[0] || document.createElement("title");
        tag.innerHTML = value;
        document.head.appendChild(tag);
    }

    function pageIcon(value) {
        let tag = document.querySelector("link[rel*='icon']") || document.createElement("link");
        tag.rel = "icon";
        tag.href = value;
        document.head.appendChild(tag);
    }

    function setTitle(value) {
        pageTitle(value);
        setCookie("Title", value);
    }

    function setIcon(value) {
        pageIcon(value);
        setCookie("Icon", value);
    }
