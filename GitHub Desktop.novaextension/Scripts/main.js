
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

nova.commands.register("github-desktop.launchApp", (workspace) => {
    var options = {
        "args": [ nova.workspace.path ]
    }
    var process = new Process("/usr/local/bin/github", options);

    process.onDidExit(function (status) {
        if (status != 0) {
            nova.workspace.showErrorMessage(
                nova.localize("GitHub Desktop could not be opened. Make sure it's installed and that the Command Line Tool has been installed as well.")
            );
        }
    });

    process.start();
});

