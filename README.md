# Catchy Sites Delay

This extremely simple Firefox extension (16 lines of JavaScript code) delays opening of some time-consuming websites. The reason of this extension creation was: usually extensions of this kind have too much code.  
The list of delayed sites by default includes:

* Facebook
* Youtube
* VK

### How to use and additional info:  
Youtube delayed if you open it without specific video (no "watch" in a URL). You can change this by editing the code. It is easy to understand what to modify.  
You can add anything else or change delay by editing the source code.  
The extension works in [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) and probably [ESR](https://www.mozilla.org/firefox/enterprise/) with the following setting in `about:config`:

```
xpinstall.signatures.required = False
```

To install the extension you need to zip \*.js, \*.json, and \*.png files, and then install the output zip file (or just [xpi file](catchy.xpi?raw=1), which is basically a zip, from the repository) with **Install Add-on from File...** menu command from the Firefox Add-ons page (`about:addons`).  
Should work for Chromium-based browsers too.
