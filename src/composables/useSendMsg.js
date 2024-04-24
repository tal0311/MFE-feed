// by convention, composable function names start with "use"
export function useSendMsg(type, payload) {
  // send message to parent window
  payload = JSON.parse(JSON.stringify(payload))

  window.parent.postMessage(
    { type, payload },
    import.meta.env.VITE_MAIN_CONTAINER_URL
  )
}
