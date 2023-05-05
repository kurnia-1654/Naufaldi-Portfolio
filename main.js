// Add header and footer for every html page

var headerContent = `
    <div class="logo-left">Naufaldi</div>
    <nav class="navbar-desktop">
        <a href="./">Home</a>
        <a href="mentorship.html">Mentorship</a>
        <a href="project.html">Portofolio</a>
        <a href="#">Snippet</a>
        <a href="#">Blog</a>
    </nav>
`

var footerContent = `
    <div class="footer-links-list">
        <a href="/">Docs</a>
        <a href="/">Book Notes</a>
        <a href="/">Polywork</a>
        <a href="/">Starter Template</a>
        <a href="/">Statistics</a>
    </div>

    <div class="footer-social-links-list">
        <a href="/"><span class="icon ic-github" title="Github Profile"></span></a>
        <a href="/"><span class="icon ic-linkedin" title="LinkedIn Profile"></span></a>
        <a href="/"><span class="icon ic-twitter" title="Twitter Profile"></span></a>
    </div>
`

// Header
const header = document.createElement('header')
header.innerHTML = headerContent
var bodyChild = document.body.children
document.body.insertBefore(header, bodyChild[0])

// Footer
const footer = document.createElement('footer')
footer.innerHTML = footerContent
document.body.append(footer)


// Mobile menu

var mobileMenuContent = `
    <a href="./"><span class="icon ic-home"></span>Home</a>
    <a href="mentorship.html"><span class="icon ic-mentorship"></span>Mentorship</a>
    <a href="project.html"><span class="icon ic-portofolio"></span>Portofolio</a>
    <a href="#"><span class="icon ic-more"></span>More</a>
`


const mobileMenu = document.createElement('div')
mobileMenu.classList.add('mobile-menu')
mobileMenu.innerHTML = mobileMenuContent
document.body.append(mobileMenu)


// add class active if Links is being visited
const pathname = window.location.pathname
const links = document.querySelectorAll('nav a, .mobile-menu a')

links.forEach(a => {
    console.log(a.getAttribute('href'));
    if (a.getAttribute('href') == pathname) a.classList.add('active')
});
