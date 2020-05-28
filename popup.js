

let apply = document.getElementById("apply");

apply.onclick = function() {
  let thumb = document.getElementById('thumb').value;
  let bar = document.getElementById('bar').value;
  let width = document.getElementById('width').value;
  let theCSS = `html {
    --scrollbarBG: ${bar};
    --thumbBG: ${thumb};
    }
  body::-webkit-scrollbar {
  width: ${width}px;
  }
  body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
  }
  body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
  }`
  
  let theCode = `function lol() {
    const css = document.createElement("style");
    css.innerHTML = ${JSON.stringify(theCSS)};
    document.head.appendChild(css);
  }
  lol();`
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: theCode});
  });
};

