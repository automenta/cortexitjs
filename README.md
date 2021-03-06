Read the web, approximately one sentence at a time, for slow and focused reading.
=================================================================================

![Cortexit logo](https://raw.github.com/automenta/cortexitjs/master/web/logo.jpg)

Disperse large paragraphs of text, where words seem to blend together, into easily digestible chunks.
-----------------------------------------------------------------------------------------------------

### In large fonts, filling the screen. #

### Fluid navigation. #

### Read at your own pace. #

### Focus on one sentence or word at a time. #

### Reduces ADHD, Dyslexia, and Vision problems. #

Now you can adjust, and maybe improve the rate and quality of how you absorb information.

You are no longer at the mercy of web designers and authors that insist on writing impenetrably dense paragraphs in small fonts.

(This is an updated version of the original Cortexit Google Chrome Browser Plugin).

Usage
=====


# Chrome Extension
*   [Download](https://github.com/automenta/cortexitjs/releases) the .CRX file and drag it into the Chrome "Extensions" page
*   Select some text and hit the cortexit button.  A Cortexit window will appear.
*   For quick activation, set a keyboard shortcut (ex: Alt-C).  The Keyboard Shortcuts setting is at the bottom of the Extensions page.


# HTML5/Javascript Version
Place the following snippet on any webpage.  The script path points to the folder where Cortexit is installed.
```html
<script>
	$(document).ready(function() {
		cortexify();
	});
</script>
<script src="cortexit/cortexit.js"></script>
```
By default, mouse text selection will trigger a Cortexify button. The following CSS classes add contextual Cortexit controls:
* cortexit_button_after - add a mini Cortexify button after an element
* (more coming soon)


# Web Server Version
*   Visit http://[cortexit] to load the main page.  Here you can enter a URL or paste some text to cortexify.
*   Visit http://[cortexit]#[URL] to load a specific URL
 

## Node.JS Setup
_Packaged installers will be available soon._  In the meantime, you will need _Node.JS_ to run it.

*   Install: npm install
*   Run: node cortexit.js

This starts a webserver on port 8787 which you can visit at: http://localhost:8787


## PHP Setup
Copy the web/ folder to a PHP-hosted web server. ( index.html accesses proxy.php )
