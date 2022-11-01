window.addEventListener("load", () => {
  console.log("Hello World");
  const onlineStatusElem = document.getElementById("online-status");
  let isOnline = true;

  // Functional programming let's goo
  function setOnlineStatus() {
    onlineStatusElem.innerHTML = isOnline ? "Online" : "Offline";
  }

  // Below function handles network conditions and register event listners for them.
  // Note that navigator must contain onLine property for online offline check that means new browsers.
  function handleNewtork() {
    if (!("onLine" in navigator)) {
      console.error("Cannot check online/offline status, get a new browser");
    } else {
      if (navigator.onLine) {
        isOnline = "Online";
      } else {
        isOnline = "Offline";
      }
      setOnlineStatus();
    }
  }
  window.addEventListener("online", handleNewtork());
  window.addEventListener("offline", handleNewtork());

  let bipEvent = null;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    bipEvent = event;
  });

  document.querySelector("#btnInstall").addEventListener("click", (event) => {
    if (bipEvent) {
      bipEvent.prompt();
    } else {
      // incompatible browser, your PWA is not passing the criteria, the user has already installed the PWA
      //TODO: show the user information on how to install the app
      alert(
        "To install the app look for Add to Homescreen or Install in your browser's menu"
      );
    }
  });
});
