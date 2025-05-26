import { computed } from 'vue'

export function usePostType(object) {
  const postType = computed(() => {
    const title = object.value.title?.trim()
    const bodyText = object.value.bodyText?.trim()
    const titleImage = object.value.titleImage?.length
    const extraImages = object.value.extraImages?.length

    if (title === '' && bodyText === '' && titleImage === 0 && extraImages === 0) {
      return 'empty'
    } else if (titleImage === 0 && extraImages === 0) {
      return 'blog'
    } else if (title === '' && bodyText === '') {
      return 'gallery'
    } else {
      return 'mixed'
    }
  })
  return postType
}

export function useErrorOutline(displayErrors, fieldName) {
  return computed(() => {
    return displayErrors[fieldName] ? 'outline-2 outline-red-400 focus:outline-red-400' : ''
  })
}
