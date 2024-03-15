function savePreference(trainingType, preference) {
    localStorage.setItem(trainingType, JSON.stringify(preference))
}

function getPreference(trainingType) {
    return JSON.parse(localStorage.getItem(trainingType)) || {}
}