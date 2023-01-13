import { EmbedBuilder, Message } from 'discord.js'

import getNikeData from '../utils/getNikeSizeData'
import StyleWatchingType from '../utils/types/StyleWatchingType'

export default async function watching(
  message: Message,
  styleWatching: StyleWatchingType[]
) {
  try {
    const watchingStyle = styleWatching.filter(
      (style) => style.userId == message.author.id
    )

    if (watchingStyle.length == 0) {
      return message.reply('Not watching anything')
    }

    const data = await getNikeData(watchingStyle.map((style) => style.style))

    const field = watchingStyle.map((style) => {
      const _data = data.find((_data) => _data.style == style.style)

      return {
        name: _data!.title,
        value: `Size: ${style.size} [Link Here](${_data?.url})`,
      }
    })

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('Watching')
      .addFields(...field)

    message.reply({ embeds: [embed] })
  } catch (e) {
    message.reply(e as string)
  }
}
