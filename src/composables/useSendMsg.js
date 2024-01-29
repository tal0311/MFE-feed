

// by convention, composable function names start with "use"
export function useSendMsg(type, payload) {
    window.parent.postMessage(
        { type, payload: JSON.parse(JSON.stringify(payload)) }
        , import.meta.env.VITE_MAIN_CONTAINER_URL);
 }