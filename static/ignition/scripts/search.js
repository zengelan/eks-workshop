// Update this variable to point to your domain.
var apigatewayendpoint = 'https://nfk3jyz99k.execute-api.us-east-1.amazonaws.com/get-sesummit2020-creds-prod/v2';
var loadingdiv = $('#loading');
var noresults = $('#noresults');
var resultdiv = $('#results');
var searchbox = $('input#search');
var submitbutton = $('input#submit');
var timer = 0;

function validateEmail(email) {
    var re = /^[a-z0-9._%+-]+@mcafee.com$/;
    return re.test(String(email).toLowerCase());
}

submitbutton.click(function () {
    let query = searchbox.val().trim();
    if (query.length < 2) {
        loadingdiv.hide();
        noresults[0].innerText = "error: too short";
        noresults.show();
        return;
    }
    if (!validateEmail(query)) {
        noresults[0].innerText = "error: not an email address or bad domain";
        noresults.show();
        return;
    }

    try {
        search();
    } catch (e) {
        console.log(e);
    }
});

async function search() {
    let apikey = "14653d20-3889-4187-9d82-ada2eebfd524";
    try {
        // Clear results before searching
        noresults.hide();
        noresults[0].innerText = "No results.";
        resultdiv.empty();
        loadingdiv.show();
        // Get the query from the user
        let query = searchbox.val();
        // Only run a query if the string contains at least three characters
        if (query.length > 2) {
            // Make the HTTP request with the query as a parameter and wait for the JSON results
            let response = await $.get(apigatewayendpoint, {mfeemail: query, acckey: apikey}, 'json');
            // Get the part of the JSON response that we care about
            let user = response['User'];
            if (user['username'].length > 2) {
                loadingdiv.hide();
                // Iterate through the results and write them to HTML

                let codeword = user['codeword'];
                let url = user['AwsLoginUrl'];
                let password = user['password']
                let username = user['username'];
                let AWS_ACCESS_KEY_ID = user['AWS_ACCESS_KEY_ID'];
                let AWS_SECRET_ACCESS_KEY = user['AWS_SECRET_ACCESS_KEY'];
                let AWS_DEFAULT_REGION = user['AWS_DEFAULT_REGION'];
                let Cloud9Ide = user['tags']['Cloud9Env'];
                let Cloud9IdeUrl = user['Cloud9EnvUrl'];
                let FirstRequest = user['FirstRequest'];
                let JenkinsUsername = user['codeword'];

                let restext = 'Found results, here are your credentials:'
                if (String(FirstRequest).toLowerCase() == 'true') {
                    restext += ' (these were also sent via email to you just now)';
                }
                resultdiv.append('<p>' + restext + '</p>');

                // Construct the full HTML string that we want to append to the div


                resultdiv.append('<div class="result">' +
                    '<img src="images/account.png" style="height: 150px;">' +
                    '<div><h2>Codeword: ' + codeword + '</h2>' +
                    '<table>' +
                    '<tr><td>Codeword:</td><td><pre class="bash">' + codeword + '</pre></td></tr>' +
                    '<tr><td>AWS Login URL</td><td><a target="_blank" href="' + url + '">' + url + '</a></td></tr>' +
                    '<tr><td>AWS Username:</td><td><pre class="bash">' + username + '</pre></td></tr>' +
                    '<tr><td>AWS Password:</td><td><pre class="bash">' + password + '</pre></td></tr>' +
                    '<tr><td>AWS_ACCESS_KEY_ID:</td><td><pre class="bash">' + AWS_ACCESS_KEY_ID + '</pre></td></tr>' +
                    '<tr><td>AWS_SECRET_ACCESS_KEY:</td><td><pre class="bash">' + AWS_SECRET_ACCESS_KEY + '</pre></td></tr>' +
                    '<tr><td>AWS_DEFAULT_REGION:</td><td><pre class="bash">' + AWS_DEFAULT_REGION + '</pre></td></tr>' +
                    '<tr><td>Cloud9 Ide ID:</td><td><pre>' + Cloud9Ide + '</pre></td></tr>' +
                    '<tr><td>Cloud9 IDE Access URL</td><td><a target="_blank" href="' + Cloud9IdeUrl + '">' + Cloud9IdeUrl + '</a></td></tr>' +
                    '<tr><td>Jenkins Username:</td><td><pre class="bash">' + user['codeword'] + '</pre></td></tr>' +
                    '<tr><td>Jenkins Password:</td><td><pre class="bash">' + password + '</pre></td></tr>' +
                    '<tr><td>Jenkins Access URL</td><td><a target="_blank" href="https://jenkins.sesummit20.net/jenkins">https://jenkins.sesummit20.net/jenkins</a></td></tr>' +
                    '<tr><td>CodeCommit Git Username:</td><td><pre class="bash">' + user['CodeCommitUsername'] + '</pre></td></tr>' +
                    '<tr><td>CodeCommit Git Password:</td><td><pre class="bash">' + user['CodeCommitPassword'] + '</pre></td></tr>' +
                    '<tr><td>CodeCommit Access URL</td><td><a target="_blank" href="' + user['CodeCommitUrl'] + '">' + user['CodeCommitUrl'] + '</a></td></tr>' +
                    '<tr><td>CodeCommit Git Repo URL</td><td>' + user['CodeCommitRepo'] + '</td></tr>' +
                    '<tr><td>Variables for Windows</td><td>' +
                    '<pre class="bash">setx AWS_ACCESS_KEY_ID ' + AWS_ACCESS_KEY_ID + '\nsetx AWS_SECRET_ACCESS_KEY ' + AWS_SECRET_ACCESS_KEY + '\nsetx AWS_DEFAULT_REGION ' + AWS_DEFAULT_REGION +
                    '</pre></td></tr>' +
                    '<tr><td>Variables for Linux/Mac</td><td>' +
                    '<pre class="bash">export AWS_ACCESS_KEY_ID=' + AWS_ACCESS_KEY_ID + '\nexport AWS_SECRET_ACCESS_KEY=' + AWS_SECRET_ACCESS_KEY + '\nexport AWS_DEFAULT_REGION=' + AWS_DEFAULT_REGION +
                    '</pre></td></tr>' +
                    '<tr><td>Enable GIT Credential helper for Cloud9</td><td>' +
                    '<pre class="bash">git config --global credential.helper \'!aws codecommit credential-helper $@\'\n' +
                    'git config --global credential.UseHttpPath true \n' +
                    'sed -i \'/aws_session_token/d\' ${HOME}/.aws/credentials' +
                    '</pre></td></tr>' +
                    '</table>' +
                    '<div><h2>Back to the workshop: <a target="_blank" href="https://labs.sesummit20.net/020_prerequisites/sesummit20_event/portal/">https://labs.sesummit20.net/020_prerequisites/sesummit20_event/portal/</a></h2>' +
                    '</div>');

            } else {
                noresults.show();
            }
        }
        loadingdiv.hide();
    } catch (e) {
        console.log("Error from api: " + e.responseText, e);
        loadingdiv.hide();
        noresults[0].innerText = noresults[0].innerText + " (error: " + e.responseText + ") check with andreas";
        noresults.show();
    }
}

// Tiny function to catch images that fail to load and replace them
function imageError(image) {
    image.src = 'images/no-image.png';
}
