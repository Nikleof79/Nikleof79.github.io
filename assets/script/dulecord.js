let ThemeSeters = document.querySelectorAll('.theme-setter');
let allThemes = ['default-theme', 'grape-theme', 'dark-theme', 'aqua-theme']
const body = document.querySelector('body');
ThemeSeters.forEach((ThemeSeter) => {
    ThemeSeter.addEventListener('click', () => {
        let Theme = ThemeSeter.getAttribute('theme');
        body.classList.remove(...allThemes);
        body.classList.add(Theme + "-theme");
    });
});