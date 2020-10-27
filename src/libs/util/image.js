function imageEqual(img1, img2) {
  if (img1.length !== img2.length) {
    return false
  }
  for (let i = 0; i < img1.length; i++) {
    if (img1[i] !== img2[i]) {
      return false
    }
  }
  return true
}

export default {
  imageEqual: imageEqual
}