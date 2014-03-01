//code: 'chrome.extension.sendRequest({selection: window.getSelection().toString() });'
//TODO inject HTML & add this http://stackoverflow.com/questions/5222814/window-getselection-return-html


function getSelectionHtml() {
    var html = "";
    var sel = window.getSelection();
    if (sel.rangeCount) {
        var container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        html = container.innerHTML;
    }
    return html;
}

chrome.extension.sendRequest({selection: getSelectionHtml() });
