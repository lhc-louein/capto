const btnCreate = document.getElementById('create');

function createCanvas(){
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'createCanvas' });
    });
}

btnCreate.addEventListener('click', createCanvas, false)