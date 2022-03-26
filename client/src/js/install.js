const butInstall = document.getElementById('buttonInstall');
let deferredInstall;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
deferredInstall=event;

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    deferredInstall.prompt()
    console.log("demo")
    deferredInstall.userChoice
    .then((choice) => {
        if (choice.outcome === "accepted") {
            deferredInstall-null
        }
  
    })
   
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
