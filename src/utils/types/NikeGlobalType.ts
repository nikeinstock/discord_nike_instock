export default interface NikeDataType {
  pages: Pages
  objects: Object[]
}

export interface Object {
  id: string
  channelId: string
  channelName: string
  marketplace: string
  language: string
  lastFetchTime: Date
  publishedContent: PublishedContent
  productInfo: ProductInfo[]
  search: Search
  collectionTermIds: string[]
  resourceType: string
  links: ObjectLinks
  collectionsv2: Collectionsv2
}

interface Collectionsv2 {
  groupedCollectionTermIds: { [key: string]: string[] }
  collectionTermIds: string[]
}

interface ObjectLinks {
  self: Self
}

interface Self {
  ref: string
}

interface ProductInfo {
  merchProduct: MerchProduct
  merchPrice: ProductInfoMerchPrice
  availability: Availability
  productContent: ProductContent
  imageUrls: ImageUrls
  productUrls: ProductUrls
  skus: Skus[]
  availableSkus: AvailableSkus[]
  relatedNBY?: RelatedNBY
}

interface Availability {
  id: string
  productId: string
  resourceType: string
  links: ObjectLinks
  available: boolean
}

interface AvailableSkus {
  id: string
  productId: string
  resourceType: string
  links: ObjectLinks
  available: boolean
  level: string
  skuId: string
}

interface ImageUrls {
  productImageUrl: string
}

interface ProductInfoMerchPrice {
  id: string
  snapshotId: string
  productId: string
  parentId: string
  parentType: string
  modificationDate: Date
  country: string
  msrp: number
  fullPrice: number
  currentPrice: number
  currency: string
  discounted: boolean
  promoInclusions: any[]
  promoExclusions: string[]
  resourceType: string
  links: ObjectLinks
}

interface MerchProduct {
  id: string
  snapshotId: string
  modificationDate: Date
  status: string
  merchGroup: string
  styleCode: string
  colorCode: string
  styleColor: string
  pid: string
  catalogId: string
  productGroupId: string
  brand: string
  channels: string[]
  consumerChannels: ConsumerChannel[]
  legacyCatalogIds: string[]
  genders: string[]
  sizeConverterId: string
  sizeGuideId: string
  valueAddedServices: ValueAddedService[]
  sportTags: string[]
  classificationConcepts: any[]
  taxonomyAttributes: TaxonomyAttribute[]
  commerceCountryInclusions: any[]
  commerceCountryExclusions: any[]
  abTestValues: any[]
  productRollup: ProductRollup
  quantityLimit: number
  styleType: string
  productType: string
  publishType: string
  mainColor: boolean
  isImageAvailable: boolean
  isCopyAvailable: boolean
  isAttributionApproved: boolean
  isAppleWatch: boolean
  exclusiveAccess: boolean
  hardLaunch?: boolean
  commercePublishDate: Date
  commerceStartDate: Date
  limitRetailExperience: any[]
  resourceType: string
  links: ObjectLinks
  isCustomsApproved: boolean
  inventoryOverride?: boolean
}

interface ConsumerChannel {
  id: string
  resourceType: string
}

interface ProductRollup {
  type: string
  key: string
}

interface TaxonomyAttribute {
  resourceType: string
  ids: string[]
}

interface ValueAddedService {
  id: string
  vasType: string
}

interface ProductContent {
  globalPid: string
  langLocale: string
  colorDescription: string
  slug: string
  fullTitle: string
  title: string
  subtitle: string
  descriptionHeading: string
  description: string
  techSpec: string
  manufacturingCountriesOfOrigin: any[]
  colors: Color[]
  bestFor: any[]
  athletes: any[]
  widths: Width[]
}

interface Color {
  type: string
  name: string
  hex: string
}

interface Width {
  value: string
  localizedValue: string
}

interface ProductUrls {
  sizeChartUrl: string
}

interface RelatedNBY {
  pbid: string
  prebuildGroupId: string
  propertiesSeoSlug: string
  merchPrice: RelatedNBYMerchPrice
}

interface RelatedNBYMerchPrice {
  msrp: number
  fullPrice: number
  currentPrice: number
  employeePrice: number
}

interface Skus {
  id: string
  snapshotId: string
  productId: string
  parentId: string
  parentType: string
  modificationDate: Date
  merchGroup: string
  stockKeepingUnitId: string
  gtin: string
  nikeSize: string
  sizeConversionId: string
  countrySpecifications: CountrySpecification[]
  resourceType: string
  links: ObjectLinks
}

interface CountrySpecification {
  country: string
  localizedSize: string
  taxInfo: TaxInfo
}

interface TaxInfo {
  commodityCode: string
  vat: number
}

interface PublishedContent {
  preview: boolean
  externalReferences: any[]
  marketplace: string
  collectionGroupId: string
  createdDateTime: Date
  language: string
  viewStartDate: Date
  type: string
  version: string
  analytics: Analytics
  nodes: PublishedContentNode[]
  payloadType: string
  publishStartDate: Date
  supportedLanguages: any[]
  publishEndDate: Date
  subType: string
  links: PublishedContentLinks
  id: string
  properties: PublishedContentProperties
  resourceType: string
  relationalId?: string
}

interface Analytics {
  hashKey: string
}

interface PublishedContentLinks {
  self: string
}

interface PublishedContentNode {
  analytics: Analytics
  nodes?: NodeNode[]
  subType: string
  id: string
  type: string
  version: string
  properties: FluffyProperties
}

interface NodeNode {
  analytics: Analytics
  subType: string
  id: string
  type: string
  version: string
  properties: PurpleProperties
}

interface PurpleProperties {
  portraitId?: string
  squarishURL?: string
  landscapeId?: string
  altText?: string
  portraitURL?: string
  landscapeURL?: string
  title: string
  squarish?: Landscape
  portrait?: Landscape
  seoName?: string
  squarishId?: string
  subtitle: string
  colorTheme: string
  startImageURL?: string
  videoURL?: string
  loop?: boolean
  providerId?: string
  videoId?: string
  autoPlay?: boolean
}

interface Landscape {
  view: string
  aspectRatio?: number
  id: string
  type: string
  url: string
}

interface FluffyProperties {
  containerType?: string
  loop?: boolean
  subtitle: string
  colorTheme?: string
  autoPlay?: boolean
  title: string
  body?: string
  speed?: number
  copyId?: string
  product?: any[]
  richTextLinks?: any[]
  custom?: Custom
  style?: Style
  jsonBody?: JSONBody
  actions?: any[]
  squarishURL?: string
  altText?: string
  portraitURL?: string
  landscapeURL?: string
  portrait?: Landscape
  landscape?: Landscape
}

interface Custom {}

interface JSONBody {
  type: string
  content: JSONBodyContent[]
}

interface JSONBodyContent {
  type: string
  content: ContentContent[]
}

interface ContentContent {
  text: string
  type: string
}

interface Style {
  defaultStyle: DefaultStyle
  modifiedDate: Date
  exposeTemplate: boolean
  properties?: StyleProperties
  resourceType: string
}

interface DefaultStyle {
  margin: Margin
}

interface Margin {
  top: string
}

interface StyleProperties {
  actions: Custom
}

interface PublishedContentProperties {
  productCard: ProductCard
  custom: Custom
  publish: Publish
  subtitle: string
  consumerLabels: any[]
  threadType: string
  title: string
  seo: SEO
  products: Product[]
  tagging?: Tagging
}

interface ProductCard {
  analytics: Analytics
  subType: string
  id: string
  type: string
  version: string
  properties: ProductCardProperties
}

interface ProductCardProperties {
  squarishURL: string
  portraitId: string
  altText: string
  portraitURL: string
  squarish: Landscape
  portrait: Landscape
  squarishId: string
}

interface Product {
  productId: string
  taxonomyAttributes: TaxonomyAttribute[]
  styleColor: string
}
interface Publish {
  collectionGroups: string[]
  collections: string[]
  countries: string[]
  pageId?: string
}

interface SEO {
  slug: string
}

interface Tagging {
  taxonomyLabel: string
  taxonomyAttributes: string[]
}

interface Search {
  conceptIds: string[]
}

interface Pages {
  prev: string
  next: string
  totalPages: number
  totalResources: number
}
