document.addEventListener("DOMContentLoaded", () => {
    function loadContent() {
        const hash = window.location.hash || "#about";
        const file = hash.substring(1) + ".md";

        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${file}`);
                return response.text();
            })
            .then(markdown => {
                const converter = new showdown.Converter();
                const html = converter.makeHtml(markdown);
                document.getElementById("page-content").innerHTML = html;
                MathJax.typesetPromise();
            })
            .catch(error => {
                console.error("Error loading content:", error);
                document.getElementById("page-content").innerHTML = `<p>Error loading content. Please refresh or try again later.</p>`;
            });
    };

    window.addEventListener("hashchange", loadContent);
    loadContent();
});

document.addEventListener('DOMContentLoaded', function () {
    const originalContactInfo = document.querySelector('.contact-info');
    const clonedContactInfo = originalContactInfo.cloneNode(true);
    const subtitleBarMini = document.querySelector('.contact-info-cloned');
    subtitleBarMini.appendChild(clonedContactInfo);
});