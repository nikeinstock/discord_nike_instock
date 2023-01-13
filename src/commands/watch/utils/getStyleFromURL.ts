export default function getStyleFromURL(url: string): string {
  if (!url.startsWith('https://www.nike.com/t/')) throw 'Invalid URL'

  const style = url.split('/').at(-1)

  if (!style) throw 'Invalid URL'

  return style
}
