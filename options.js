// Saves options to chrome.storage
function save_options() {
    var sovleMe = document.getElementById('solve').checked;
    var submitMe = document.getElementById('submit').checked;
    var username = document.getElementById('username').value;
    if (submitMe) {
        if (username === null || username === "" || !username) {
            alert("If you wish to auto submit you must specify a username");
            return;
        }
    }
    chrome.storage.sync.set({
        solveForUser: sovleMe,
        submitForUser: submitMe,
        username: username

    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        solveForUser: true,
        submitForUser: false,
        username: "",
    }, function(items) {
        document.getElementById('username').value = items.username;
        document.getElementById('solveMe').checked = items.solveForUser;
        document.getElementById('submitMe').checked = items.submitForUser;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);