interface Config {
    apiKey: string,
    authDomain: string
}

const ConfigMap = new Map<string, Config>()

ConfigMap.set("anthropic", { apiKey: "dvibb", authDomain: "anthropicai.com" })
ConfigMap.set("firebase", { apiKey: "fudhvubib", authDomain: "firebase.google.com" })

console.log(ConfigMap.get("firebase"));

type event = "scroll" | "click" | "mousemove"
type excludedEvent = Exclude<event, "scroll">

const handleEvent = (event : excludedEvent) => {
    console.log(`Handling event: ${event}`);
}

handleEvent("click");