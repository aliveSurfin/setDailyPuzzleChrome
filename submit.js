
var sUsername;
var submitForUser;
chrome.storage.sync.get({

    submitForUser: false,
    username: "",

}, function (items) {
    sUsername = items.username;
    submitForUser = items.submitForUser;
    console.log(items);
    if (submitForUser === true && sUsername !== null && sUsername !== undefined) {
        var text = document.getElementById("edit-submitted-user-id");
        text.value = sUsername;
        var submit = document.getElementsByClassName("webform-client-form webform-client-form-1366");
        console.log(submit);
        submit[0].submit();
    }

}
)