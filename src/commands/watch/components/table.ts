import { Table } from 'embed-table'

import NikeSizeType from '../../../utils/types/NikeSizeType'

export default function (data: NikeSizeType) {
  const table = new Table({
    titles: ['', '', ''],
    titleIndexes: [0, 20, 30],
    columnIndexes: [0, 20, 30],
    start: '`',
    end: '`',
  })

  table.addRow(['Size', 'Available', 'Ava Level'])

  for (const size of data.sizes) {
    table.addRow([
      size.size,
      size.available ? 'True' : 'False',
      size.availableLevel,
    ])
  }

  return table
}
