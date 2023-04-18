
export const DataReseterFunctions = () => {

    function resetData() {
        localStorage.clear();
        location.reload();
    }

    return {
        resetData
    }
}