const videoElem = document.getElementById('video')
const btn = document.getElementById('button')

// Выбор потока, переход к видео и просмотру
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElem.srcObject = mediaStream
    videoElem.onloadedmetadata = () => {
      videoElem.play()
    }
  } catch (err) {
    throw new Error('whoops', err)
  }
}

btn.addEventListener('click', async () => {
  btn.disabled = true
  // Старт картинки в картинке
  await videoElem.requestPictureInPicture()
  btn.disabled = false
})

selectMediaStream()