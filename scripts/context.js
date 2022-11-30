// Add this in scripts/contextMenuServiceWorker.js
chrome.contextMenus.create({
    id: 'context-run',
    title: 'Magic box',
    contexts: ['selection'],
  });
  

// New function here
const generateCompletionAction = async (info) => {}

// Don't touch this
chrome.contextMenus.create({
  id: 'context-run',
  title: 'Magic box',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(generateCompletionAction);

  // Add listener
  chrome.contextMenus.onClicked.addListener(generateCompletionAction);