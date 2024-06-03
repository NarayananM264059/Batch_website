document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    function setDarkMode(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.getElementById('theme-icon').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13.68V11c0-3.866-3.134-7-7-7-1.78 0-3.356.656-4.626 1.74 3.012.217 5.714 2.166 6.667 4.978 1.653 4.701-.811 9.668-5.524 11.332a6.933 6.933 0 003.15-.74A6.992 6.992 0 0019 13.68z"></path>';
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.getElementById('theme-icon').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-8.66h-1m-14.14 0H3m15.66-5.66l-.707-.707M5.05 5.05l-.707.707M18.36 18.36l-.707.707M5.05 18.36l-.707-.707"></path>';
        }
    }

    const userTheme = localStorage.getItem('theme');
    const isDarkMode = userTheme === 'dark';
    setDarkMode(isDarkMode);

    toggle.addEventListener('click', () => {
        setDarkMode(!htmlElement.classList.contains('dark'));
    });
});
