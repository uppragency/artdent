self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { title: "ArtDent Slobozia", body: event.data ? event.data.text() : "" };
  }
  const title = data.title || "ArtDent Slobozia";
  const options = {
    body: data.body || "Ai o programare nouă.",
    icon: "/favicon.ico",
    badge: "/favicon.ico",
    data: { url: data.url || "/programari-9k3fq7" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "/programari-9k3fq7";
  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clientsArr) => {
      const existing = clientsArr.find((c) => c.url.includes(url));
      if (existing) return existing.focus();
      return self.clients.openWindow(url);
    })
  );
});
