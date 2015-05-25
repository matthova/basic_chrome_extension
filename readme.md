Barebones example of manipulating a site's DOM via a click event from a chrome extension.

Thanks to John Sonmez and Akira Tanaka for pointing me in the right direction:
http://www.sitepoint.com/create-chrome-extension-10-minutes-flat/#testing
http://tipstak.blogspot.com/2014/05/how-to-manipulate-dom-from-chrome-extension.html

To test the plugin:

Type “chrome://extensions” in a tab to bring up the extensions page.
Once on this page, check “Developer mode” to enable loading unpacked extensions.
Drag this folder into the window.

To test out the extension, navigate to any site. Then, go ahead and click the icon (I've defaulted this to be a neon green square). When the HTML page comes up, click on the button. Hooray! You've just manipulated a website's DOM via a chrome extension click event!!!