export default interface NikeSizeType {
  id: string
  title: string
  url: string
  image: string
  style: string
  sizes: {
    id: string
    nikeSize: string
    size: string
    available: boolean
    availableLevel: string
  }[]
}
