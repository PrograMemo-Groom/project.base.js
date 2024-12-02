function loadCommonUI() {
    fetch("../html/common/header.html", {cache: "no-cache"})
        .then((response) => response.text())
        .then((headerHTML) => {
            document.body.insertAdjacentHTML("afterbegin", headerHTML);
            // CSS 파일 로딩
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/css/general.css";
            link.onload = () => {
                console.log("CSS 로드 완료");
                // CSS 로드 후 추가 작업
            };
            document.head.appendChild(link);
        });

    // Footer 로드
    fetch("../html/common/footer.html", {cache: "no-cache"})
        .then((response) => response.text())
        .then((footerHTML) => {
            document.body.insertAdjacentHTML("beforeend", footerHTML);

            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/css/general.css";
            link.onload = () => {
                console.log("CSS 로드 완료");
                // CSS 로드 후 추가 작업
            };
            document.head.appendChild(link);
        });

    fetch("../html/common/nav.html", {cache: "no-cache"})
        .then((response) => response.text())
        .then((navigationHTML) => {
            document.body.insertAdjacentHTML("afterbegin", navigationHTML);

            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/css/general.css";
            link.onload = () => {
                console.log("CSS 로드 완료");
                // CSS 로드 후 추가 작업
            };
            document.head.appendChild(link);
        });
}

// DOMContentLoaded 이벤트 발생 시 공통 UI 로드
document.addEventListener("DOMContentLoaded", loadCommonUI);