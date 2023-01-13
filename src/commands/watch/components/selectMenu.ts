import { ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js'

import NikeSizeType from '../../../utils/types/NikeSizeType'
import SelectMenuValueType from '../../../utils/types/SelectMenuValueType'

export default function SelectMenu(data: NikeSizeType): any {
  return new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('SIZESELECT')
      .setPlaceholder('Select what to watch')
      .addOptions(
        data.sizes
          .filter((size) => !size.available)
          .map((size) => {
            const value: SelectMenuValueType = {
              title: data.title,
              style: data.style,
              size: size.nikeSize,
            }

            return {
              label: size.size,
              value: JSON.stringify(value),
            }
          })
      )
  )
}
