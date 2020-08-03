document.addEventListener('DOMContentLoaded', () => {
  const attachFormEvents = (formEl) => {
    if (!formEl) {
      return
    }

    const stop = formEl.querySelector('#stop')
    const status = formEl.querySelector('#status')
    var controller = new AbortController();
    var signal = controller.signal;

    formEl.addEventListener('submit', (e) => {
      e.preventDefault()
      e.stopPropagation()
      status.innerText = ''
      const formData = new FormData(formEl);
      const url = '/api/upload'
      const stat = await fetch(url, { signal, method: 'POST' })
        .then(r => r.json())
        .catch(e => ({ status: e.message }))

      status.innerText = stat.status
    })
    stop && stop.addEventListener('click', (e) => controller.abort())
  }

  const formEl = document.querySelector('#imageUploadForm')
  attachFormEvents(formEl)
})