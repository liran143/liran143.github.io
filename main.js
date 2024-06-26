const buildMailTo = (mail, params) => {
    let mailto = "mailto:" + mail + "?";
    mailto += params[0].key + "=" + params[0].value;
    if (params.length === 1) {
        return mailto;
    }
    mailto += "&";
    for (let i = 1; i < params.length - 1; i++) {
        const {key, value} = params[i];
        mailto += key + "=" + value + "&";
    }
    mailto += params[params.length - 1].key + "=" + params[params.length - 1].value;
    return mailto;
}

document.getElementById("submit-mail-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const mailSubject = document.getElementById("mail-subject").value;
    const iconSelect = document.getElementById("icons-select").value;
    const mailBody = document.getElementById("mail-body").value + " . favorite social media: " + iconSelect;
    const mail = "defaultMail@gmail.com";
    const mailParams = [{key: "body", value: mailBody}, {key: "subject", value: mailSubject}];
    document.location.href = buildMailTo(mail, mailParams);
});
