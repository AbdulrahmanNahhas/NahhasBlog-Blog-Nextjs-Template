// import createImageUrlBuilder from '@sanity/image-url'
// import type { Image } from 'sanity'
// import { dataset, projectId } from '../env'
// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || '',
//   dataset: dataset || '',
// })
// export const urlForImage = (source: Image) => {
//   return imageBuilder?.image(source).auto('format').fit('max')
// }

import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function urlFor(source: Image) {
  return builder.image(source);
}

export default urlFor;