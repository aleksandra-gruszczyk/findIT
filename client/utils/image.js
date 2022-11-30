import request from 'superagent'

export async function getImageUrl(image, token) {
  const { name, type } = image
  const fileObject = {
    fileName: name,
    fileType: type,
  }

  const { signature, timestamp, cloudName, apiKey } = await request
    .get('/api/v1/image/signature')
    .send(fileObject)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)

  const imageUrl = await uploadImage(image, {
    signature,
    timestamp,
    cloudName,
    apiKey,
  })

  return imageUrl
}

export async function uploadImage(image, options = {}) {
  if (
    !options.timestamp ||
    !options.apiKey ||
    !options.timestamp ||
    !options.signature
  ) {
    throw new Error(
      'Missing options, check timestamp, apiKey, timestamp and signature'
    )
  }

  const url = `https://api.cloudinary.com/v1_1/${options.cloudName}/image/upload`
  const formData = new FormData()

  formData.append('file', image)
  formData.append('api_key', options.apiKey)
  formData.append('timestamp', options.timestamp)
  formData.append('signature', options.signature)

  const imageUrl = await request
    .post(url)
    .send(formData)
    .then((res) => res.body.url)

  return imageUrl
}
