import {
  Client,
  Events,
  GatewayIntentBits,
  Interaction,
  Message,
} from 'discord.js'
import * as dotenv from 'dotenv'

import watch from './commands/watch'
import watching from './commands/watching'

import interval from './utils/interval'
import SelectMenuValueType from './utils/types/SelectMenuValueType'
import StyleWatchingType from './utils/types/StyleWatchingType'

dotenv.config()

const TOKEN = process.env.TOKEN

let styleWatching: StyleWatchingType[] = []

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on('ready', async () => {
  console.log(`Logged in as ${client.user!.tag}!`)

  setInterval(() => interval(client, styleWatching), 1000 * 60 * 5) // 5 min

  interval(client, styleWatching)
})

client.on(Events.MessageCreate, async (message: Message) => {
  if (!message.content.startsWith('!') || message.author.bot) return

  const commands: string[] = message.content.slice(1).split(/ +/)
  const commandName: string = commands.shift()!.toUpperCase()

  switch (commandName) {
    case 'WATCH':
      await watch(message, commands)
      break
    case 'WATCHING':
      await watching(message, styleWatching)
      break
  }
})

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isStringSelectMenu()) return

  if (interaction.customId == 'SIZESELECT') {
    const value: SelectMenuValueType = JSON.parse(interaction.values.shift()!)
    const userId = interaction.user.id

    if (!value) interaction.reply('Something went wrong please try again later')

    const styleWatch: StyleWatchingType = {
      userId: userId,
      style: value.style,
      size: value.size,
    }

    const watchExist = styleWatching.find(
      (style) =>
        style.userId == userId &&
        style.style == value.style &&
        style.size == value.size
    )

    if (watchExist) {
      await interaction.reply(
        `You are already watching ${value.title} in size ${value.size}`
      )
      return
    }

    styleWatching.push(styleWatch)

    interaction.reply(`Added ${value.title} in size ${value.size}`)
  }
})

client.login(TOKEN)
