// LaunchBar Action Script

function run(argument) {
    if (argument == undefined) {
        // Inform the user that there was no argument
        LaunchBar.alert('No argument was passed to the action');
    } else {
        return [{title: parseInt(argument).toString(36).toUpperCase()}];
    }
}
