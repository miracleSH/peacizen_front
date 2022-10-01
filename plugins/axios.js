export default function ({ $axios }) {
  $axios.onError((error) => {
    const err = {
      status: error.response.status,
      message: error.response.data.warningMessage
    }
    return Promise.resolve(err)
  })
}
