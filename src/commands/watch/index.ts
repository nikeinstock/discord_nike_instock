import { EmbedBuilder, Message } from 'discord.js'

import selectMenu from './components/selectMenu'
import table from './components/table'
import getNikeSizeData from '../../utils/getNikeSizeData'
import getStyleFromURL from './utils/getStyleFromURL'

export default async function watch(message: Message, commands: string[]) {
  try {
    const url = commands[0]

    const style = getStyleFromURL(url)

    const datas = await getNikeSizeData([style])

    const data = datas[0]

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(data.title)
      .setURL(url)
      .setThumbnail(data.image)
      .setFields(table(data).toField())

    await message.reply({
      embeds: [embed],
      components: [selectMenu(data)],
    })
  } catch (e) {
    message.reply(e as string)
  }
}
