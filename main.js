// Dark mode toggle with localStorage persistence
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

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

    // Theme toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = toggleBtn.querySelector('i');

    function updateToggleIcon() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        toggleIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        toggleBtn.setAttribute('aria-label', isDark ? 'Dark mode enabled' : 'Light mode enabled');
    }

    updateToggleIcon();
    toggleBtn.addEventListener('click', function () {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateToggleIcon();
    });
});