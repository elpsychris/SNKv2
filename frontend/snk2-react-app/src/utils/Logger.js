var isLog = true
const writeLog = (msg, caller) => {
    if (isLog) {
        console.log("[" + caller + "]: " + msg)
    }
}

export default writeLog

