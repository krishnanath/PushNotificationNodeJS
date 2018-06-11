# PushNotificationNodeJS

# install web-push

```npm install web-push --save```

# Using VAPID Key for applicationServerKey

When using your VAPID key in your web app, you'll need to convert the URL safe base64 string to a Uint8Array to pass into the subscribe call, which you can do like so:

``` function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const vapidPublicKey = '<Your Public Key from generateVAPIDKeys()>';
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey
}); ```
