import axios from 'axios'

import NikeDataType, { Object as ObjectType } from './types/NikeGlobalType'
import NikeSizeType from './types/NikeSizeType'

export default async function getNikeData(
  styles: string[]
): Promise<NikeSizeType[]> {
  try {
    const request = await axios.get(
      `https://api.nike.com/product_feed/threads/v2?filter=language(en)&filter=marketplace(US)&filter=channelId(d9a5bc42-4b9c-4976-858a-f159cf99c647)&filter=productInfo.merchProduct.styleColor(${styles.join(
        ','
      )})`
    )

    const nikeData = request.data as NikeDataType

    if (nikeData.objects.length == 0) throw 'Invalid Nike URL'

    const data: NikeSizeType[] = nikeData.objects.map((object) => {
      const projectInfo = object.productInfo[0]

      return {
        id: object.id,
        title: projectInfo.productContent.title,
        url: `https://www.nike.com/t/${projectInfo.productContent.slug}/${projectInfo.merchProduct.styleColor}`,
        image: projectInfo.imageUrls.productImageUrl,
        style: projectInfo.merchProduct.styleColor,
        sizes: projectInfo.skus.map((sku) => {
          const available = projectInfo.availableSkus.find(
            ({ id }) => sku.id == id
          )

          return {
            id: sku.id,
            nikeSize: sku.nikeSize,
            size: sku.countrySpecifications[0].localizedSize,
            available: available!.available,
            availableLevel: available!.level,
          }
        }),
      }
    })

    return data
  } catch (_) {
    throw 'Something went wrong please try again later'
  }
}
