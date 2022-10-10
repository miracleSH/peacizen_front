export default function ({ $axios }) {
  // $axios.setBaseURL('http://localhost:8080'

  $axios.onError((error) => {
    const err = {
      status: error.response.status,
      message: error.response.data.warningMessage
    }
    alert(err.message)
    return Promise(err)
  })
}
