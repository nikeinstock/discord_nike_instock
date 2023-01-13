import { Client } from 'discord.js'

import getNikeData from './getNikeSizeData'
import StyleWatchingType from './types/StyleWatchingType'

export default async function interval(
  client: Client,
  styleWatching: StyleWatchingType[]
) {
  try {
    let watchingStyles: string[] = [
      ...new Set(styleWatching.map((style) => style.style)),
    ]

    if (watchingStyles.length == 0) return

    const data = await getNikeData(watchingStyles)

    for (const style of data) {
      const styleWatch = styleWatching.filter(
        (_style) => _style.style == style.style
      )

      for (const _style of styleWatch) {
        const size = style.sizes.find((size) => size.nikeSize == _style.size)

        if (size?.available) {
          const user = await client.users.fetch(_style.userId)

          styleWatching = styleWatching.filter(
            (style) => style.userId != _style.userId
          )

          await user.send(
            `${style.url} is available in size ${size.nikeSize} at level ${size.availableLevel}`
          )
        }
      }
    }
  } catch (_) {}
}
