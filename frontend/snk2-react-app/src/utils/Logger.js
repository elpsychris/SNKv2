var isLog = true
const log = (msg, caller) => {
    if (isLog) {
        console.log("[" + caller + "]: " + msg)
    }
}

export default log

