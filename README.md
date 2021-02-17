Frontend web development project from coursera

1) Overview of fullstack web development
2) Setting up development environment
    => Installation of node and git
    => Git commands
    => NPM
3) Introduction to bootstrap
    => Installation using node or CDN
    (a) Responsive web design
        => Bootstrap grid system
        *** Honours content: Creating Ideation for webpage ***
    (b) Navigation and navbar
        => Navbar and breadcrumbs
        => Icon Fonts
    (c) User input: buttons and forms
        => Buttons
        => Forms, input types and elements
    (d) Displaying content
        => Tables and cards
    (e) Images and Media
        => Images
        => Thumbnails
        => Media objects
    (f) Alerting users
        => Badges
        => Alerts
        => Progress bars
    *** Honours content: UI design and Prototyping document ***
4) Bootstrap Javascript components
    (a) Tabs, Pills and Tabbed navigation
        => Bootstrap tabs JS behavior (https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior)
    (b) Collapse and Accordion
        => Accordion
        => data-toggle, data-parent
    (c) Tooltips, popovers and modals
        => In order of ease of implementation (Inverse order of flexibility)
        => Bootstrap advices to place modals at top of page
        => Bootstrap tooltips (http://getbootstrap.com/docs/4.0/components/tooltips/)
        => Bootstrap popovers (http://getbootstrap.com/docs/4.0/components/popovers/)
        => Bootstrap Modals (http://getbootstrap.com/docs/4.0/components/modal/)
5) CSS precompilers:
    => Less
    => Sass and SCSS
6) JQuery for bootstrap
7) Building and Deployment
    => DRY (Don't Repeat Yourself)
    => Tasks:
        (a) CSS
            ~ Compiling Less/Sass
            ~ Running auto-prefixer for vendor specific prefixes
            ~ Minification (removing whitespace and comments)
            ~ Concatenation.
        (b) Javascript/jQuery
            ~ JSHint: checking code for errors and problems (static code analysis)
            ~ Concatenation
            ~ Uglification: minification + mangling(reducing local variables to single letters) 
            ~ Rechecking for errors
        (c) Others
            ~ Images: optimizing files to reduce file size
            ~ Watch: watching for changes in files and automatically rerunning tasks
            ~ Server and live-reload
            ~ Testing
            ~ Building your site for deployment
    => NPM scripts
        (a) Onchange/watch to watch files in project folder for changes
        (b) parallelShell allows execution of multiple npm scripts on multiple shells
        (c) rimraf to create and delete the distribution folder.
        (d) copyfiles to copy files from different directories
        (e) imagemin-cli takes image files and compresses them
        (d) usemin-cli concatenates css files and html. Needs cssmin, uglifyjs, htmlmin

