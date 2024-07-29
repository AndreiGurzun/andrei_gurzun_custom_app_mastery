/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    Any: { input: any; output: any };
    /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
    DateTime: { input: any; output: any };
    /** A string representing a JSON array */
    JSONArrayString: { input: any; output: any };
    /** A string representing a JSON object */
    JSONObjectString: { input: any; output: any };
    /** A JSON object used for filtering list items, includes a required field 'Operation' and optional fields 'Argument' and 'Field'. */
    ListFilter: { input: any; output: any };
    /** A JSON object used for sorting list items, includes optional field 'Field' and 'Order'. */
    ListSortParams: { input: any; output: any };
    /** A JSON object used for sorting list items, includes optional field 'Field' and 'Order'. */
    SortFilter: { input: any; output: any };
};

export type Asset = {
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /**
     * This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front.
     * @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments.
     */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /**
     * The total length of the fronts list at this same level in the data, this number is unaffected by filtering.
     * @deprecated Front assignments are going away, https://confluence.gannett.com/display/AUTHORING/Fronts+Reimagined
     */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type AssetcontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type AssetcontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type AssetfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type AssetstoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type AssettagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type AssetMetrics = {
    __typename?: 'AssetMetrics';
    /** Query Complexity Cost: +25 */
    chartbeat30DayAsset?: Maybe<Chartbeat30DayAsset>;
};

export type Autofragment = {
    __typename?: 'Autofragment';
    assetID: Scalars['String']['output'];
    autoFragments: Array<AutofragmentAutoFragments>;
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
};

export type AutofragmentautoFragmentsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type AutofragmentAutoFragments = {
    __typename?: 'AutofragmentAutoFragments';
    fragmentID: Scalars['String']['output'];
    metadata?: Maybe<FragmentMetadata>;
    parameters?: Maybe<Array<Maybe<AutofragmentAutoFragmentsParameters>>>;
};

export type AutofragmentAutoFragmentsParameters = {
    __typename?: 'AutofragmentAutoFragmentsParameters';
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type Banner = {
    __typename?: 'Banner';
    /** Query Complexity Cost: +25 */
    associatedAsset?: Maybe<Asset>;
    /** The friendly ID for the associated asset */
    associatedAssetId?: Maybe<Scalars['String']['output']>;
    /** A URL for the banner */
    associatedUrl?: Maybe<Scalars['String']['output']>;
    /** The body for the banner */
    brief?: Maybe<Scalars['String']['output']>;
    /** The expiration date (RFC 3339 compliant string) for the banner */
    expirationDate?: Maybe<Scalars['DateTime']['output']>;
    /** The subject for the banner */
    headline: Scalars['String']['output'];
    /** Unique identifier for the banner */
    id: Scalars['String']['output'];
    /** A flag to indicate if the banner is Breaking News */
    isBreakingNews?: Maybe<Scalars['Boolean']['output']>;
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** The code for the site associated with the banner */
    siteCode: Scalars['String']['output'];
};

export type BaseAssetGroup = {
    __typename?: 'BaseAssetGroup';
    URL?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    logoURL?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    siteCode?: Maybe<Scalars['String']['output']>;
    siteId: Scalars['String']['output'];
    siteName: Scalars['String']['output'];
    sstsId?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};

export type BaseClassificationV2 = {
    __typename?: 'BaseClassificationV2';
    /** The id corresponding to the SSTS object which holds the metadata for assigned section, subsection, topic, subtopic. */
    id?: Maybe<Scalars['String']['output']>;
    /** The section this asset belongs to, this is the first element of an SSTS path. */
    section?: Maybe<Scalars['String']['output']>;
    /**
     * The hydrated SSTS item representing the classification metadata
     *
     * Query Complexity Cost: +10
     */
    ssts?: Maybe<SSTS>;
    /** The subsection this asset belongs to, this is the second element of an SSTS path. */
    subsection?: Maybe<Scalars['String']['output']>;
    /** The subtopic this asset belongs to, this is the forth and final element of an SSTS path. */
    subtopic?: Maybe<Scalars['String']['output']>;
    /** The topic this asset belongs to, this is the third element of an SSTS path. */
    topic?: Maybe<Scalars['String']['output']>;
};

export type BaseContributors = {
    __typename?: 'BaseContributors';
    /** Query Complexity Cost: +20 */
    contributor?: Maybe<Contributor>;
    /** Presto classic's contributor IDs were unique to the user and the site. Presto next moved contributors to global IDs. This is that global ID. */
    contributorId?: Maybe<Scalars['String']['output']>;
    /** @deprecated Presto classic's contributor IDs were unique to the user and the site. This is that site-specific ID. We no longer use this ID. You should use contributorId instead. */
    id: Scalars['String']['output'];
    /** The display name of the contributor. */
    name: Scalars['String']['output'];
};

export type BaseFactCheckClaims = {
    __typename?: 'BaseFactCheckClaims';
    /** The factCheck appearanceURLs */
    appearanceURLs?: Maybe<Array<BaseFactCheckClaimsAppearanceURLs>>;
    /** The factCheck author */
    author?: Maybe<Scalars['String']['output']>;
    /** The factCheck claim */
    claim?: Maybe<Scalars['String']['output']>;
    /** The date of the factCheck */
    date?: Maybe<Scalars['String']['output']>;
    /** The factCheck rating */
    rating?: Maybe<Scalars['String']['output']>;
};

export type BaseFactCheckClaimsAppearanceURLs = {
    __typename?: 'BaseFactCheckClaimsAppearanceURLs';
    /** The original flag */
    original?: Maybe<Scalars['Boolean']['output']>;
    /** The appearance url */
    url: Scalars['String']['output'];
};

export type BaseFronts = {
    __typename?: 'BaseFronts';
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
    recommendedDate?: Maybe<Scalars['DateTime']['output']>;
    type: Scalars['String']['output'];
};

export type BaseGeoTag = {
    __typename?: 'BaseGeoTag';
    attributes?: Maybe<BaseGeoTagAttributes>;
    /** @deprecated No longer used field soon to be deleted */
    displayName?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    name?: Maybe<Scalars['String']['output']>;
    /** @deprecated No longer used field soon to be deleted */
    path?: Maybe<Scalars['String']['output']>;
    /** @deprecated No longer used field soon to be deleted */
    type?: Maybe<Scalars['String']['output']>;
    /** @deprecated No longer used field soon to be deleted */
    vocabulary?: Maybe<Scalars['String']['output']>;
};

export type BaseGeoTagAttributes = {
    __typename?: 'BaseGeoTagAttributes';
    /** @deprecated No longer used field soon to be deleted */
    created?: Maybe<Scalars['String']['output']>;
    lat: Scalars['String']['output'];
    /** @deprecated No longer used field soon to be deleted */
    locationType?: Maybe<Scalars['String']['output']>;
    long: Scalars['String']['output'];
    /** @deprecated No longer used field soon to be deleted */
    modified?: Maybe<Scalars['String']['output']>;
    prefLabel?: Maybe<Scalars['String']['output']>;
};

export type BaseLinks = {
    __typename?: 'BaseLinks';
    assets: Array<BaseLinksAssets>;
    /** Query Complexity Cost: +25 */
    photo?: Maybe<Asset>;
    photoId?: Maybe<Scalars['String']['output']>;
    /** The total length of the assets list at this same level in the data, this number is unaffected by filtering. */
    totalAssets: Scalars['Int']['output'];
};

export type BaseLinksassetsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type BaseLinksAssets = {
    __typename?: 'BaseLinksAssets';
    /** Query Complexity Cost: +80 */
    asset?: Maybe<Asset>;
    id: Scalars['String']['output'];
    overrides?: Maybe<BaseLinksAssetsOverrides>;
    position: Scalars['Float']['output'];
    relationshipTypeFlags: Scalars['String']['output'];
};

export type BaseLinksAssetsOverrides = {
    __typename?: 'BaseLinksAssetsOverrides';
    caption?: Maybe<Scalars['String']['output']>;
    frontHeadline?: Maybe<Scalars['String']['output']>;
    inset?: Maybe<Scalars['Boolean']['output']>;
};

export type BasePageURL = {
    __typename?: 'BasePageURL';
    long?: Maybe<Scalars['String']['output']>;
    /** @deprecated No longer used field soon to be deleted */
    short?: Maybe<Scalars['String']['output']>;
};

export type BaseSsts = {
    __typename?: 'BaseSsts';
    /** @deprecated This data does not update after Asset creation and may be stale */
    leafName?: Maybe<Scalars['String']['output']>;
    /** @deprecated Prefer the individual path components section, subsection, topic, subtopic */
    path?: Maybe<Scalars['String']['output']>;
    section?: Maybe<Scalars['String']['output']>;
    /** @deprecated This data does not update after Asset creation and may be stale */
    storysubject?: Maybe<Scalars['String']['output']>;
    subsection?: Maybe<Scalars['String']['output']>;
    subtopic?: Maybe<Scalars['String']['output']>;
    /** @deprecated This data does not update after Asset creation and may be stale */
    taxonomyEntityDisplayName?: Maybe<Scalars['String']['output']>;
    topic?: Maybe<Scalars['String']['output']>;
};

export type BaseTags = {
    __typename?: 'BaseTags';
    dateTagged?: Maybe<Scalars['String']['output']>;
    /** A UUID/GUID */
    id: Scalars['String']['output'];
    isPrimary?: Maybe<Scalars['Boolean']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    parentId?: Maybe<Scalars['String']['output']>;
    path?: Maybe<Scalars['String']['output']>;
    relevanceScore?: Maybe<Scalars['Float']['output']>;
    /** Query Complexity Cost: +20 */
    tag?: Maybe<Tag>;
    taggingStatus?: Maybe<Scalars['String']['output']>;
    topicType?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    vocabulary?: Maybe<Scalars['String']['output']>;
};

export type Book = {
    __typename?: 'Book';
    /** The status of the book's availability. */
    availability?: Maybe<Scalars['String']['output']>;
    /** The general classification of the book (fiction vs non-fiction). */
    classification?: Maybe<Scalars['String']['output']>;
    /** The contributors associated with the book using ONIX roles. */
    contributors?: Maybe<Array<Maybe<BookContributors>>>;
    /** The long form description of the book containing HTML. */
    description?: Maybe<Scalars['String']['output']>;
    /** The edition of the the book. */
    edition?: Maybe<Scalars['String']['output']>;
    /** The format of the ISBN of the book. */
    format?: Maybe<Scalars['String']['output']>;
    /** The UUID of the book given by the books engine. */
    id: Scalars['String']['output'];
    /** The URL of the book cover. */
    imageURL?: Maybe<Scalars['String']['output']>;
    /** The abbreviation of the language the book is in. */
    language?: Maybe<Scalars['String']['output']>;
    /** The book's list price. */
    listPrice?: Maybe<BookListPrice>;
    /** How many pages the book has. */
    pageCount?: Maybe<Scalars['Int']['output']>;
    /** The book's product URL. */
    productURL?: Maybe<Scalars['String']['output']>;
    /** The date when a book's ISBN was published. */
    publishDate?: Maybe<Scalars['String']['output']>;
    /** The publisher of the book. */
    publisher?: Maybe<Scalars['String']['output']>;
    /** The date of the books ranking. */
    rankingDate: Scalars['String']['output'];
    /** The subjects or genres of the book using BISAC codes. */
    rankings: Array<BookRankings>;
    /** All other SKUs (or ISBNs) associated with the same book product. */
    relatedProductSKUs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The book's sale price. */
    salesPrice?: Maybe<BookSalesPrice>;
    /** The version of the schema. */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** The ISBN number of the book. */
    sku?: Maybe<Scalars['String']['output']>;
    /** The subjects or genres of the book using BISAC codes. */
    subjects?: Maybe<Array<Maybe<BookSubjects>>>;
    /** The book title. */
    title?: Maybe<Scalars['String']['output']>;
};

export type BookrankingsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type BookContributors = {
    __typename?: 'BookContributors';
    /** The named associated with the ONIX role. */
    name?: Maybe<Scalars['String']['output']>;
    /** The ONIX role. */
    onixRole?: Maybe<Scalars['String']['output']>;
};

export type BookListPrice = {
    __typename?: 'BookListPrice';
    /** The dollar amount of the list price. */
    amount?: Maybe<Scalars['Int']['output']>;
    /** The currency of the list price. */
    currency?: Maybe<Scalars['String']['output']>;
};

export type BookRankings = {
    __typename?: 'BookRankings';
    /** The name of the books list that the rank is in. */
    name?: Maybe<Scalars['String']['output']>;
    /** The previous week's ranking of the book for a particular books list. */
    previousRank?: Maybe<Scalars['Int']['output']>;
    /** The ranking of the book for a particular books list. */
    rank?: Maybe<Scalars['Int']['output']>;
    /** The calculated score of the book. */
    score?: Maybe<Scalars['Float']['output']>;
};

export type BookSalesPrice = {
    __typename?: 'BookSalesPrice';
    /** The dollar amount of the sales price. */
    amount?: Maybe<Scalars['Int']['output']>;
    /** The currency of the sales price. */
    currency?: Maybe<Scalars['String']['output']>;
};

export type BookSubjects = {
    __typename?: 'BookSubjects';
    /** The BISAC code. */
    code?: Maybe<Scalars['String']['output']>;
    /** The human readable translation of the BISAC code. */
    description?: Maybe<Scalars['String']['output']>;
    /** The top-level portion of the BISAC description. */
    heading?: Maybe<Scalars['String']['output']>;
    /** The type of code, usually BISAC. */
    type?: Maybe<Scalars['String']['output']>;
};

export type Bucket = {
    __typename?: 'Bucket';
    /** Bucket aggregations */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Count of the items in the bucket */
    count: Scalars['Int']['output'];
    /** Bucket key */
    key: Scalars['String']['output'];
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
};

export type BucketAggregation = {
    __typename?: 'BucketAggregation';
    /** Buckets in the aggregation */
    buckets?: Maybe<Array<Bucket>>;
    /** Maximum possible count of errors in the bucket aggregation */
    docCountErrorUpperBound: Scalars['Int']['output'];
    /** Name of the bucket aggregation */
    name: Scalars['String']['output'];
    /** Number of documents that are NOT part of this bucket aggregation */
    sumOtherDocCount: Scalars['Int']['output'];
};

/** The datasources which provide candidate data */
export enum CandidateTypes {
    /**
     * https://ballotpedia.org/
     * @deprecated
     */
    Ballotpedia = 'Ballotpedia',
    /**
     * Federal Election Commission
     * @deprecated
     */
    FEC = 'FEC'
}

export type Chartbeat30DayAsset = {
    __typename?: 'Chartbeat30DayAsset';
    /** Query Complexity Cost: +25 */
    asset?: Maybe<Asset>;
    /** The asset ID that the metrics are aggregated on. */
    assetID: Scalars['String']['output'];
    /** Asset's original content source formatted as Site Code.  Copied from asset data. */
    contentSourceCode?: Maybe<Scalars['String']['output']>;
    /** Asset's Initial Publish Date.  Copied from asset data. */
    initialPublishDate: Scalars['DateTime']['output'];
    /** How many page views for the asset in the past 30 days. */
    pageViews: Scalars['Int']['output'];
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** Asset's Site Code.  Copied from asset data. */
    siteCode: Scalars['String']['output'];
    /** How many page views were from social sharing referrals in the past 30 days. */
    socialReferrals: Scalars['Int']['output'];
    /** Asset's SSTS.  Copied from asset data. */
    sstsPath: Chartbeat30DayAssetSstsPath;
    /** Asset's Type.  Copied from asset data. */
    type: Scalars['String']['output'];
    /** Most recent update date/time of these metrics totals.  Not the asset's 'updateDate'. */
    updateDate: Scalars['DateTime']['output'];
};

export type Chartbeat30DayAssetSstsPath = {
    __typename?: 'Chartbeat30DayAssetSstsPath';
    /** Asset's SSTS Section.  Copied from asset data. */
    section: Scalars['String']['output'];
    /** Asset's SSTS Subsection.  Copied from asset data. */
    subsection?: Maybe<Scalars['String']['output']>;
    /** Asset's SSTS Subtopic.  Copied from asset data. */
    subtopic?: Maybe<Scalars['String']['output']>;
    /** Asset's SSTS Topic.  Copied from asset data. */
    topic?: Maybe<Scalars['String']['output']>;
};

export type ContentPackage = {
    __typename?: 'ContentPackage';
    /** optional call to action override for the content package */
    callToAction?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +10 */
    contributor?: Maybe<Contributor>;
    /** The byline of the user that created the storyline */
    createdByDisplayName?: Maybe<Scalars['String']['output']>;
    /** The username of the creator */
    createdByUser: Scalars['String']['output'];
    /** The date of initial creation. */
    createdDate: Scalars['DateTime']['output'];
    /** unique identifier for storyline */
    id: Scalars['String']['output'];
    links: Array<ContentPackageLinks>;
    /** Query Complexity Cost: +25 */
    promoImage?: Maybe<Asset>;
    /** promo image id for the content package */
    promoImageId?: Maybe<Scalars['String']['output']>;
    /** publicationName for the storyline */
    publicationName?: Maybe<Scalars['String']['output']>;
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** siteCode for the storyline */
    siteCode?: Maybe<Scalars['String']['output']>;
    /** summary for the storyline */
    summary?: Maybe<Scalars['String']['output']>;
    /** headline for the content package */
    title: Scalars['String']['output'];
    /** The total length of the links list at this same level in the data, this number is unaffected by filtering. */
    totalLinks: Scalars['Int']['output'];
    /** The username of the last person to update this asset. */
    updatedByUser: Scalars['String']['output'];
    /** The date of last update. */
    updatedDate: Scalars['DateTime']['output'];
};

export type ContentPackagelinksArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContentPackageLinks = {
    __typename?: 'ContentPackageLinks';
    /** Query Complexity Cost: +25 */
    asset?: Maybe<Asset>;
    headline: Scalars['String']['output'];
    id?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    url: Scalars['String']['output'];
};

export type Contentsource = {
    __typename?: 'Contentsource';
    /** array of strings denoting alternative permutations used for matching metadata to a valid content source */
    aliases: Array<Scalars['String']['output']>;
    /** Marker for setting a true/false value indicating if the content source will allow copy story on draft assets in Presto. */
    allowDraftCopy?: Maybe<Scalars['Boolean']['output']>;
    /** The unique identifier for a content source */
    code: Scalars['String']['output'];
    /** This field provides a text description of the content source, where it came from, the full name of the company or entity it represents, etc. */
    description?: Maybe<Scalars['String']['output']>;
    /** Whether the content source has been retired or is still in use */
    isInactive: Scalars['Boolean']['output'];
    /** A collection of Legacy identifiers from another CMS (ex: Gatehouse) that map to this contentsource. */
    legacyIdentifiers: Array<Scalars['String']['output']>;
    /** The displayable value for a content source */
    name: Scalars['String']['output'];
    /** Identifies content sources for which all assets should be marked as one-time use, and thus not available to syndication or to be added to assets other than the first use */
    oneTimeUse?: Maybe<Scalars['Boolean']['output']>;
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** The total length of the aliases list at this same level in the data, this number is unaffected by filtering. */
    totalAliases: Scalars['Int']['output'];
    /** The total length of the legacyIdentifiers list at this same level in the data, this number is unaffected by filtering. */
    totalLegacyIdentifiers: Scalars['Int']['output'];
};

export type ContentsourcealiasesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContentsourcelegacyIdentifiersArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type Contributor = {
    __typename?: 'Contributor';
    /** Aggregate Id */
    aggregateId?: Maybe<Scalars['String']['output']>;
    aggregateName: Scalars['String']['output'];
    almamaterIds: Array<ContributorAlmamaterIds>;
    /** Indicator for auto tagline for the contributor */
    autofillTagline?: Maybe<Scalars['Boolean']['output']>;
    beatIds: Array<ContributorBeatIds>;
    /** A biography for this contributor */
    bio?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +10 */
    bioTitle?: Maybe<Tag>;
    /** The Taxonomy Tag ID identifying the bio title. */
    bioTitleId?: Maybe<Scalars['String']['output']>;
    /** This is the byline of an individual contributor. It can be used as is on staff pages, but if you are using it to render an asset byline see https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more information */
    byline: Scalars['String']['output'];
    /** @deprecated This field was from legacyStaff type and is no longer used. */
    bylineSources: Array<Scalars['String']['output']>;
    /** @deprecated The displayName has been deprecated. Please use the byline on the contributor instead. */
    displayName?: Maybe<Scalars['String']['output']>;
    email: Scalars['String']['output'];
    expandedByline?: Maybe<Scalars['String']['output']>;
    facebookUrl?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    /** Friendly ID is a numeric ID exposed to users in Presto, set as a string per CAPI ID standards. */
    friendlyID?: Maybe<Scalars['String']['output']>;
    hobbyIds: Array<ContributorHobbyIds>;
    hometownIds: Array<ContributorHometownIds>;
    /** Id of the contributor which is used to identify the user in Presto Next */
    id: Scalars['String']['output'];
    instagramUrl?: Maybe<Scalars['String']['output']>;
    /** Indicator for active for the contributor */
    isActive?: Maybe<Scalars['Boolean']['output']>;
    languageIds: Array<ContributorLanguageIds>;
    lastName?: Maybe<Scalars['String']['output']>;
    /**
     * Links to identify associated profiles in the legacy authoring systems.
     * @deprecated legacyStaff fields are no longer used.
     */
    legacyStaffs: Array<ContributorLegacyStaffs>;
    linkedinUrl?: Maybe<Scalars['String']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    pinterestUrl?: Maybe<Scalars['String']['output']>;
    /** The site code for the primary newsroom for this contributor. */
    primaryNewsRoom: Scalars['String']['output'];
    /** Query Complexity Cost: +25 */
    profileImage?: Maybe<Asset>;
    /** The Asset Image ID for the profile photo. */
    profileImageId?: Maybe<Scalars['String']['output']>;
    profileUrl?: Maybe<Scalars['String']['output']>;
    reporterBioTitle?: Maybe<Scalars['String']['output']>;
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    shortUsername?: Maybe<Scalars['String']['output']>;
    skillIds: Array<ContributorSkillIds>;
    snapchatUrl?: Maybe<Scalars['String']['output']>;
    /** Staff folder is the user's role or group within a newsroom, used to power the staff directory */
    staffFolder?: Maybe<Scalars['String']['output']>;
    staffHometownIds: Array<ContributorStaffHometownIds>;
    /** Tagline for the contributor (can include html) */
    tagline?: Maybe<Scalars['String']['output']>;
    teamIds: Array<ContributorTeamIds>;
    /** The total length of the almamaterIds list at this same level in the data, this number is unaffected by filtering. */
    totalAlmamaterIds: Scalars['Int']['output'];
    /** The total length of the beatIds list at this same level in the data, this number is unaffected by filtering. */
    totalBeatIds: Scalars['Int']['output'];
    /** The total length of the bylineSources list at this same level in the data, this number is unaffected by filtering. */
    totalBylineSources: Scalars['Int']['output'];
    /** The total length of the hobbyIds list at this same level in the data, this number is unaffected by filtering. */
    totalHobbyIds: Scalars['Int']['output'];
    /** The total length of the hometownIds list at this same level in the data, this number is unaffected by filtering. */
    totalHometownIds: Scalars['Int']['output'];
    /** The total length of the languageIds list at this same level in the data, this number is unaffected by filtering. */
    totalLanguageIds: Scalars['Int']['output'];
    /** The total length of the legacyStaffs list at this same level in the data, this number is unaffected by filtering. */
    totalLegacyStaffs: Scalars['Int']['output'];
    /** The total length of the skillIds list at this same level in the data, this number is unaffected by filtering. */
    totalSkillIds: Scalars['Int']['output'];
    /** The total length of the staffHometownIds list at this same level in the data, this number is unaffected by filtering. */
    totalStaffHometownIds: Scalars['Int']['output'];
    /** The total length of the teamIds list at this same level in the data, this number is unaffected by filtering. */
    totalTeamIds: Scalars['Int']['output'];
    twitterHandle?: Maybe<Scalars['String']['output']>;
    /** Indicator for auto byline for the contributor */
    useAutoByline?: Maybe<Scalars['Boolean']['output']>;
    youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type ContributoralmamaterIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorbeatIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorbylineSourcesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorhobbyIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorhometownIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorlanguageIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorlegacyStaffsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorskillIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorstaffHometownIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorteamIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ContributorAlmamaterIds = {
    __typename?: 'ContributorAlmamaterIds';
    /** Query Complexity Cost: +10 */
    almamater?: Maybe<Tag>;
    /** The Taxonomy Tag ID identifying this alma mater. */
    id?: Maybe<Scalars['String']['output']>;
};

export type ContributorBeatIds = {
    __typename?: 'ContributorBeatIds';
    /** Query Complexity Cost: +10 */
    beat?: Maybe<Tag>;
    /** The Taxonomy Tag ID identifying this beat. */
    id?: Maybe<Scalars['String']['output']>;
};

export type ContributorHobbyIds = {
    __typename?: 'ContributorHobbyIds';
    /** Query Complexity Cost: +10 */
    hobby?: Maybe<Tag>;
    /** The Taxonomy Tag ID identifying this hobby. */
    id?: Maybe<Scalars['String']['output']>;
};

export type ContributorHometownIds = {
    __typename?: 'ContributorHometownIds';
    /** Query Complexity Cost: +10 */
    hometown?: Maybe<Tag>;
    /** The Taxonomy Tag ID identifying this hometown. */
    id?: Maybe<Scalars['String']['output']>;
};

export type ContributorLanguageIds = {
    __typename?: 'ContributorLanguageIds';
    /** The Taxonomy Tag ID identifying this language. */
    id?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +10 */
    language?: Maybe<Tag>;
};

export type ContributorLegacyStaffs = {
    __typename?: 'ContributorLegacyStaffs';
    id?: Maybe<Scalars['String']['output']>;
    siteCode?: Maybe<Scalars['String']['output']>;
};

export type ContributorSkillIds = {
    __typename?: 'ContributorSkillIds';
    /** The Taxonomy Tag ID identifying this skill. */
    id?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +10 */
    skill?: Maybe<Tag>;
};

export type ContributorStaffHometownIds = {
    __typename?: 'ContributorStaffHometownIds';
    /** The Taxonomy Tag ID identifying this hometown. */
    id?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +10 */
    staffHometown?: Maybe<Tag>;
};

export type ContributorTeamIds = {
    __typename?: 'ContributorTeamIds';
    /** The Taxonomy Tag ID identifying this team. */
    id?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +10 */
    team?: Maybe<Tag>;
};

export type Election = {
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type Exclusion = {
    __typename?: 'Exclusion';
    /** DFP targeting values to be applied in ad calls for associated asset */
    adTargeting?: Maybe<ExclusionAdTargeting>;
    assetId: Scalars['String']['output'];
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
};

export type ExclusionAdTargeting = {
    __typename?: 'ExclusionAdTargeting';
    categoryvalue: Array<Scalars['String']['output']>;
    /** The total length of the categoryvalue list at this same level in the data, this number is unaffected by filtering. */
    totalCategoryvalue: Scalars['Int']['output'];
};

export type ExclusionAdTargetingcategoryvalueArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type Explainers = {
    /**
     * The identifier.
     * @deprecated
     */
    dataId: Scalars['String']['output'];
    /**
     * The district (house) for the election.
     * @deprecated
     */
    district?: Maybe<Scalars['String']['output']>;
    /**
     * The date of the election.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * A short name for the entire election.
     * @deprecated
     */
    electionName?: Maybe<Scalars['String']['output']>;
    /**
     * A block of HTML-enabled text that appears on the page below the headline, often some news context, details about oddities in the race, etc.
     * @deprecated
     */
    explainer?: Maybe<Scalars['String']['output']>;
    /**
     * The on-page headline for the index or results page. Required.
     * @deprecated
     */
    headline: Scalars['String']['output'];
    /**
     * The on-page meta description for the index or results page.
     * @deprecated
     */
    metaDescription?: Maybe<Scalars['String']['output']>;
    /**
     * The office type.
     * @deprecated
     */
    office: Scalars['String']['output'];
    /**
     * The AP ID of this race (if it is a race).
     * @deprecated
     */
    raceId?: Maybe<Scalars['String']['output']>;
    /**
     * A manual mechanism for overwriting the race name in case of bad data from AP, particularly for ballot initiatives and downballot stuff.
     * @deprecated
     */
    raceNameOverride?: Maybe<Scalars['String']['output']>;
    /**
     * A non-displayed optional field that can be used to order results on a page.
     * @deprecated
     */
    rank?: Maybe<Scalars['Int']['output']>;
    /**
     * The seat (senate) for the election
     * @deprecated
     */
    seat?: Maybe<Scalars['String']['output']>;
    /**
     * A Gannett site code used to control display on the JOA markets.
     * @deprecated
     */
    siteCode: Scalars['String']['output'];
    /**
     * The race's state, if it is not a general index page.
     * @deprecated
     */
    state?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    timePublished?: Maybe<Scalars['DateTime']['output']>;
};

export type FragmentMetadata = {
    __typename?: 'FragmentMetadata';
    author?: Maybe<FragmentMetadataAuthor>;
    category: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    displayName: Scalars['String']['output'];
    id: Scalars['String']['output'];
    parameters?: Maybe<Array<Maybe<FragmentMetadataParameters>>>;
    path: Scalars['String']['output'];
    sizing: FragmentMetadataSizing;
    team?: Maybe<Scalars['String']['output']>;
};

export type FragmentMetadataAuthor = {
    __typename?: 'FragmentMetadataAuthor';
    contact: Scalars['String']['output'];
    name: Scalars['String']['output'];
};

export type FragmentMetadataParameters = {
    __typename?: 'FragmentMetadataParameters';
    examples?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    key: Scalars['String']['output'];
    required?: Maybe<Scalars['Boolean']['output']>;
    type: Scalars['String']['output'];
};

export type FragmentMetadataSizing = {
    __typename?: 'FragmentMetadataSizing';
    autoSize: Scalars['Boolean']['output'];
    default: Array<Maybe<FragmentMetadataSizingConfig>>;
    mobile?: Maybe<Array<Maybe<FragmentMetadataSizingConfig>>>;
};

export type FragmentMetadataSizingBreakpoint = {
    __typename?: 'FragmentMetadataSizingBreakpoint';
    maxEmbedWidth?: Maybe<Scalars['Int']['output']>;
    minEmbedWidth?: Maybe<Scalars['Int']['output']>;
};

export type FragmentMetadataSizingConfig = {
    __typename?: 'FragmentMetadataSizingConfig';
    breakpoint?: Maybe<FragmentMetadataSizingBreakpoint>;
    height: FragmentMetadataSizingOptions;
    width?: Maybe<FragmentMetadataSizingOptions>;
};

export type FragmentMetadataSizingOptions = {
    __typename?: 'FragmentMetadataSizingOptions';
    maxPercent?: Maybe<Scalars['Float']['output']>;
    maxPixel?: Maybe<Scalars['Int']['output']>;
    minPercent?: Maybe<Scalars['Float']['output']>;
    minPixel?: Maybe<Scalars['Int']['output']>;
    percent?: Maybe<Scalars['Float']['output']>;
    pixel?: Maybe<Scalars['Int']['output']>;
};

export type Front = {
    __typename?: 'Front';
    attributes?: Maybe<FrontAttributes>;
    childFrontIds: Array<Scalars['String']['output']>;
    /** Query Complexity Cost: +50 */
    childFronts?: Maybe<Array<Maybe<Front>>>;
    /** Query Complexity Cost: +10 */
    classification?: Maybe<SSTS>;
    classificationId: Scalars['String']['output'];
    classificationV2?: Maybe<FrontClassificationV2>;
    /** There is no updatedDate rather the createDate is changed when updates are made as well as when the front is new. */
    createdDate: Scalars['DateTime']['output'];
    displayName: Scalars['String']['output'];
    /** @deprecated Prefer the id, this frontID is no longer used. */
    frontID: Scalars['Float']['output'];
    id: Scalars['String']['output'];
    layoutModules: Array<FrontLayoutModules>;
    layoutName: Scalars['String']['output'];
    name: Scalars['String']['output'];
    recommendedDate: Scalars['DateTime']['output'];
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    siteCode: Scalars['String']['output'];
    siteID: Scalars['String']['output'];
    /**
     * Query Complexity Cost: +10
     * @deprecated ssts has been deprecated. Please use classification instead.
     */
    ssts?: Maybe<SSTS>;
    /** @deprecated sstsID has been deprecated. Please use classificationId instead. */
    sstsID?: Maybe<Scalars['String']['output']>;
    /** The total length of the childFrontIds list at this same level in the data, this number is unaffected by filtering. */
    totalChildFrontIds: Scalars['Int']['output'];
    /** The total length of the layoutModules list at this same level in the data, this number is unaffected by filtering. */
    totalLayoutModules: Scalars['Int']['output'];
};

export type FrontchildFrontIdsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type FrontlayoutModulesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type FrontAttributes = {
    __typename?: 'FrontAttributes';
    bigStoryOn?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    cssClass?: Maybe<Scalars['String']['output']>;
    /** The attribute used to hide the high impact ad */
    hideHighimpactAd?: Maybe<Scalars['String']['output']>;
    keywords?: Maybe<Scalars['String']['output']>;
    layoutType?: Maybe<Scalars['String']['output']>;
    layouts?: Maybe<Scalars['String']['output']>;
    marketplace?: Maybe<Scalars['String']['output']>;
    metaDescription?: Maybe<Scalars['String']['output']>;
    ogImage?: Maybe<Scalars['String']['output']>;
    overrideStyles?: Maybe<Scalars['String']['output']>;
    quickLinks?: Maybe<Scalars['String']['output']>;
    quickLinks2?: Maybe<Scalars['String']['output']>;
    seoTitle?: Maybe<Scalars['String']['output']>;
    sponsorLogo?: Maybe<Scalars['String']['output']>;
    sponsorName?: Maybe<Scalars['String']['output']>;
    textType?: Maybe<Scalars['String']['output']>;
    twitterHandle?: Maybe<Scalars['String']['output']>;
};

export type FrontClassificationV2 = {
    __typename?: 'FrontClassificationV2';
    /** The id corresponding to the SSTS object which holds the metadata for assigned section, subsection, topic, subtopic. */
    id?: Maybe<Scalars['String']['output']>;
    /** The section this asset belongs to, this is the first element of an SSTS path. */
    section?: Maybe<Scalars['String']['output']>;
    /**
     * The hydrated SSTS item representing the classification metadata
     *
     * Query Complexity Cost: +10
     */
    ssts?: Maybe<SSTS>;
    /** The subsection this asset belongs to, this is the second element of an SSTS path. */
    subsection?: Maybe<Scalars['String']['output']>;
    /** The subtopic this asset belongs to, this is the forth and final element of an SSTS path. */
    subtopic?: Maybe<Scalars['String']['output']>;
    /** The topic this asset belongs to, this is the third element of an SSTS path. */
    topic?: Maybe<Scalars['String']['output']>;
};

export type FrontLayoutModules = {
    __typename?: 'FrontLayoutModules';
    contents: Array<FrontLayoutModulesContents>;
    /** @deprecated This field represents the max number of assets in the content array. Use the length of the content array instead. */
    maxContentCount?: Maybe<Scalars['Int']['output']>;
    moduleAttributes?: Maybe<FrontLayoutModulesModuleAttributes>;
    /** @deprecated This field represents a full list of legacy attributes, use moduleAttributes instead. */
    moduleAttributesLegacyFormat: Array<FrontLayoutModulesModuleAttributesLegacyFormat>;
    moduleDisplayName: Scalars['String']['output'];
    moduleName?: Maybe<Scalars['String']['output']>;
    modulePosition: Scalars['Float']['output'];
    /** The total length of the contents list at this same level in the data, this number is unaffected by filtering. */
    totalContents: Scalars['Int']['output'];
    /** The total length of the moduleAttributesLegacyFormat list at this same level in the data, this number is unaffected by filtering. */
    totalModuleAttributesLegacyFormat: Scalars['Int']['output'];
};

export type FrontLayoutModulescontentsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type FrontLayoutModulesmoduleAttributesLegacyFormatArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type FrontLayoutModulesContents = {
    __typename?: 'FrontLayoutModulesContents';
    /** Query Complexity Cost: +80 */
    asset?: Maybe<Asset>;
    curated: Scalars['Boolean']['output'];
    frontHeadline: Scalars['String']['output'];
    id: Scalars['String']['output'];
    links: Array<FrontLayoutModulesContentsLinks>;
    position: Scalars['Int']['output'];
    /** @deprecated This field has been deprecated because IDs as integers hit the 32 bit limit in the GraphQL spec */
    promoImage?: Maybe<Scalars['Int']['output']>;
    /** Query Complexity Cost: +25 */
    promoImageAsset?: Maybe<Asset>;
    promoImageID?: Maybe<Scalars['String']['output']>;
    /** The total length of the links list at this same level in the data, this number is unaffected by filtering. */
    totalLinks: Scalars['Int']['output'];
};

export type FrontLayoutModulesContentslinksArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type FrontLayoutModulesContentsLinks = {
    __typename?: 'FrontLayoutModulesContentsLinks';
    linkText: Scalars['String']['output'];
    linkType: Scalars['String']['output'];
    linkURL: Scalars['String']['output'];
};

export type FrontLayoutModulesModuleAttributes = {
    __typename?: 'FrontLayoutModulesModuleAttributes';
    adType?: Maybe<Scalars['String']['output']>;
    apiToken?: Maybe<Scalars['String']['output']>;
    bottomLinkText?: Maybe<Scalars['String']['output']>;
    bottomLinkUrl?: Maybe<Scalars['String']['output']>;
    businessUnitCode?: Maybe<Scalars['String']['output']>;
    cssClass?: Maybe<Scalars['String']['output']>;
    dataFrom?: Maybe<Scalars['String']['output']>;
    dataSource?: Maybe<Scalars['String']['output']>;
    days?: Maybe<Scalars['String']['output']>;
    disableAds?: Maybe<Scalars['String']['output']>;
    disableTabs?: Maybe<Scalars['String']['output']>;
    displayName?: Maybe<Scalars['String']['output']>;
    eventfulDomain?: Maybe<Scalars['String']['output']>;
    feed?: Maybe<Scalars['String']['output']>;
    feedAdFrequency?: Maybe<Scalars['String']['output']>;
    feedAdStartIndex?: Maybe<Scalars['String']['output']>;
    frontListModulePosition?: Maybe<Scalars['String']['output']>;
    height?: Maybe<Scalars['String']['output']>;
    jsOptions?: Maybe<Scalars['String']['output']>;
    layoutOption?: Maybe<Scalars['String']['output']>;
    layoutType?: Maybe<Scalars['String']['output']>;
    link?: Maybe<Scalars['String']['output']>;
    listingsQuery?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    maxCount?: Maybe<Scalars['String']['output']>;
    moduleTheme?: Maybe<Scalars['String']['output']>;
    moduleType?: Maybe<Scalars['String']['output']>;
    numItems?: Maybe<Scalars['String']['output']>;
    placement?: Maybe<Scalars['String']['output']>;
    playlistId?: Maybe<Scalars['String']['output']>;
    quickLinks?: Maybe<Scalars['String']['output']>;
    scrolling?: Maybe<Scalars['String']['output']>;
    searchQuery?: Maybe<Scalars['String']['output']>;
    sectionOverride?: Maybe<Scalars['String']['output']>;
    seeMoreObituariesLink?: Maybe<Scalars['String']['output']>;
    showspikes?: Maybe<Scalars['String']['output']>;
    ssts?: Maybe<Scalars['String']['output']>;
    text?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    typeOfContent?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    variant?: Maybe<Scalars['String']['output']>;
};

export type FrontLayoutModulesModuleAttributesLegacyFormat = {
    __typename?: 'FrontLayoutModulesModuleAttributesLegacyFormat';
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type GalleryPromoImage = {
    __typename?: 'GalleryPromoImage';
    thumbnailAssetId?: Maybe<Scalars['String']['output']>;
    thumbnailPath?: Maybe<Scalars['String']['output']>;
};

export type ImageCrops = {
    __typename?: 'ImageCrops';
    height: Scalars['Float']['output'];
    name: Scalars['String']['output'];
    path: Scalars['String']['output'];
    width: Scalars['Float']['output'];
};

export type ImageOriginalSize = {
    __typename?: 'ImageOriginalSize';
    height: Scalars['Float']['output'];
    width: Scalars['Float']['output'];
};

export type ImageURL = {
    __typename?: 'ImageURL';
    absolute: Scalars['String']['output'];
    publish: Scalars['String']['output'];
};

export type MetricAggregation = {
    __typename?: 'MetricAggregation';
    /** Name of the metric aggregation */
    name: Scalars['String']['output'];
    /** Value of the metric aggregation */
    value: Scalars['Float']['output'];
};

/** The defined office types */
export enum Office {
    /** @deprecated  */
    Governor = 'Governor',
    /** @deprecated  */
    House = 'House',
    /** @deprecated  */
    Senate = 'Senate'
}

export type Publishedpriority = {
    __typename?: 'Publishedpriority';
    /** The aggregateId of the associated asset. */
    aggregateId?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +25 */
    asset?: Maybe<Asset>;
    /** The type of the associated asset; such as 'text', 'image', 'gallery', 'video', etc. */
    assetType?: Maybe<Scalars['String']['output']>;
    /** Byline from the associated asset. */
    byline?: Maybe<Scalars['String']['output']>;
    /** Used to represent the classificationV@ object in an asset that contains the SSTS fields and an ID. */
    classificationV2?: Maybe<BaseClassificationV2>;
    /** Content source code from the associated asset. */
    contentSourceCode?: Maybe<Scalars['String']['output']>;
    /** User that created the associated asset. */
    createUser?: Maybe<Scalars['String']['output']>;
    /** Exclude the asset from fronts. */
    exclude?: Maybe<Scalars['Boolean']['output']>;
    /** The date of expiration for the sake of editorial boosting. */
    expirationDate?: Maybe<Scalars['DateTime']['output']>;
    /** The friendlyId of the associated published asset. */
    friendlyId: Scalars['String']['output'];
    /** The primary ID of the priority object. */
    id?: Maybe<Scalars['String']['output']>;
    /** The initial publish date of the associated asset. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Keywords that can be filtered on via search. */
    keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The paywallType of the associated asset, out of: 'free', 'registered', 'metered', 'premium' */
    paywallType?: Maybe<Scalars['String']['output']>;
    /** Persist the asset in fronts with a lower importance. */
    persist?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates the priority based on the following values: 0, 1, 2. */
    priority: Scalars['Int']['output'];
    /** The publish date of the associated asset. */
    publishDate?: Maybe<Scalars['DateTime']['output']>;
    /** The site code of the associated asset. */
    siteCode?: Maybe<Scalars['String']['output']>;
    /** The time a priority will begin taking effect. */
    startDate?: Maybe<Scalars['DateTime']['output']>;
    /** The state the asset is in, out of: 'draft', 'published', 'unpublished', 'revising', 'embargoed'. */
    statusName?: Maybe<Scalars['String']['output']>;
    /** The list of tag ID's associated with the asset. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Query = {
    __typename?: 'Query';
    /** Query Complexity Cost: +11 */
    asset?: Maybe<Asset>;
    /** Query Complexity Cost: +11 */
    assetSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    assets?: Maybe<Array<Maybe<Asset>>>;
    /** Query Complexity Cost: +11 */
    autoFragment?: Maybe<Autofragment>;
    /** Query Complexity Cost: +26 */
    autoFragments?: Maybe<Array<Maybe<Autofragment>>>;
    /** Query Complexity Cost: +11 */
    banner?: Maybe<Banner>;
    /** Query Complexity Cost: +11 */
    bannerSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    banners?: Maybe<Array<Maybe<Banner>>>;
    /** Query Complexity Cost: +11 */
    book?: Maybe<Book>;
    /** Query Complexity Cost: +26 */
    books?: Maybe<Array<Maybe<Book>>>;
    /**
     * Editorial designated candidate biographical write-ups for use on voter guides
     * @deprecated
     */
    candidateBios?: Maybe<Array<Maybe<candidates>>>;
    /**
     * Editorial designated candidate position write-ups for use on voter guides
     * @deprecated
     */
    candidatePositions?: Maybe<Array<Maybe<candidatepositions>>>;
    /** @deprecated  */
    candidates?: Maybe<Array<Maybe<Election>>>;
    /** Query Complexity Cost: +11 */
    chartbeat30DayAsset?: Maybe<Chartbeat30DayAsset>;
    /** Query Complexity Cost: +26 */
    chartbeat30DayAssets?: Maybe<Array<Maybe<Chartbeat30DayAsset>>>;
    /** Query Complexity Cost: +11 */
    chartbeat30dayassetSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +11 */
    contentpackage?: Maybe<ContentPackage>;
    /** Query Complexity Cost: +11 */
    contentpackageSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    contentpackages?: Maybe<Array<Maybe<ContentPackage>>>;
    /** Query Complexity Cost: +11 */
    contentsource?: Maybe<Contentsource>;
    /** Query Complexity Cost: +11 */
    contentsourceSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    contentsources?: Maybe<Array<Maybe<Contentsource>>>;
    /** Query Complexity Cost: +11 */
    contributor?: Maybe<Contributor>;
    /** Query Complexity Cost: +11 */
    contributorSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    contributors?: Maybe<Array<Maybe<Contributor>>>;
    /**
     * AP Delegates Reports
     * @deprecated
     */
    delegateReports?: Maybe<Array<Maybe<delegate>>>;
    /**
     * Displays existing election dates
     * @deprecated
     */
    electionDates?: Maybe<Array<Maybe<electiondate>>>;
    /**
     * Displays existing election races
     * @deprecated
     */
    electionsMeta?: Maybe<Array<Maybe<electionsmeta>>>;
    /** Query Complexity Cost: +11 */
    exclusion?: Maybe<Exclusion>;
    /** Query Complexity Cost: +26 */
    exclusions?: Maybe<Array<Maybe<Exclusion>>>;
    /**
     * Editorial provided explainers for elections data
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<explainers>>>;
    /** Query Complexity Cost: +11 */
    front?: Maybe<Front>;
    /** Query Complexity Cost: +11 */
    frontSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    fronts?: Maybe<Array<Maybe<Front>>>;
    /**
     * Editorial designated issues for use on voter guides
     * @deprecated
     */
    issues?: Maybe<Array<Maybe<issues>>>;
    /**
     * Editorial designated keyRaces to prioritize display
     * @deprecated
     */
    keyRaces?: Maybe<Array<Maybe<keyraces>>>;
    /** @deprecated  */
    localElectionDates?: Maybe<Array<Maybe<localelectiondates>>>;
    /** @deprecated  */
    localResults?: Maybe<Array<Maybe<localresults>>>;
    /** Retrieve the list of site codes allowed by the given policy. Omit ID to get list of policies. */
    policy?: Maybe<Array<Scalars['String']['output']>>;
    /** Whether a request for content with the given site code would be permitted by the current user. */
    policyAllowed: Scalars['Boolean']['output'];
    /** Retrieve the primary policy for a site code; used to select which search index is queried. If site code is omitted, uses x-sitecode header value. */
    policyForSiteCode?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    polls?: Maybe<Array<Maybe<realclearpolitics>>>;
    /** Query Complexity Cost: +26 */
    publishedpriorities?: Maybe<Array<Maybe<Publishedpriority>>>;
    /** Query Complexity Cost: +11 */
    publishedpriority?: Maybe<Publishedpriority>;
    /** Query Complexity Cost: +11 */
    publishedprioritySearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** @deprecated  */
    races?: Maybe<Array<Maybe<Election>>>;
    /** Query Complexity Cost: +11 */
    reaction?: Maybe<Reaction>;
    /** Query Complexity Cost: +26 */
    reactions?: Maybe<Array<Maybe<Reaction>>>;
    /** Query Complexity Cost: +11 */
    redirect?: Maybe<Redirect>;
    /** Query Complexity Cost: +26 */
    redirects?: Maybe<Array<Maybe<Redirect>>>;
    /** @deprecated  */
    results?: Maybe<Array<Maybe<Election>>>;
    /**
     * DEPRECATED
     * @deprecated replaced by electionsMeta
     */
    resultsMeta?: Maybe<Array<Maybe<resultsmeta>>>;
    /** Query Complexity Cost: +26 */
    searchAssets?: Maybe<SearchAssets>;
    /** Query Complexity Cost: +26 */
    searchBanners?: Maybe<SearchBanners>;
    /** Query Complexity Cost: +26 */
    searchBooks?: Maybe<SearchBooks>;
    /** Query Complexity Cost: +26 */
    searchContentPackages?: Maybe<SearchContentpackages>;
    /** Query Complexity Cost: +26 */
    searchContentsources?: Maybe<SearchContentsources>;
    /** Query Complexity Cost: +26 */
    searchFronts?: Maybe<SearchFronts>;
    /** Query Complexity Cost: +26 */
    searchPublishedpriority?: Maybe<SearchPublishedpriority>;
    /** Query Complexity Cost: +26 */
    searchSSTS?: Maybe<SearchSsts>;
    /** Query Complexity Cost: +26 */
    searchTags?: Maybe<SearchTags>;
    /** Query Complexity Cost: +26 */
    searchchartbeat30dayassets?: Maybe<SearchChartbeat30dayassets>;
    /** Query Complexity Cost: +26 */
    searchcontributors?: Maybe<SearchContributors>;
    /** Query Complexity Cost: +11 */
    ssts?: Maybe<SSTS>;
    /** Query Complexity Cost: +11 */
    sstsSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    sstss?: Maybe<Array<Maybe<SSTS>>>;
    /** Query Complexity Cost: +11 */
    tag?: Maybe<Tag>;
    /** Query Complexity Cost: +11 */
    tagSearchTemplates?: Maybe<Array<Maybe<Template>>>;
    /** Query Complexity Cost: +26 */
    tags?: Maybe<Array<Maybe<Tag>>>;
    tangentFragmentMetadata?: Maybe<FragmentMetadata>;
    /**
     * Editorial designated confiuration details for a state voter guide page
     * @deprecated
     */
    voterGuideConfigs?: Maybe<Array<Maybe<voterguideconfigs>>>;
};

export type QueryassetArgs = {
    id: Scalars['String']['input'];
};

export type QueryassetSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryassetsArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QueryautoFragmentArgs = {
    id: Scalars['String']['input'];
};

export type QueryautoFragmentsArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerybannerArgs = {
    id: Scalars['String']['input'];
};

export type QuerybannerSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerybannersArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerybookArgs = {
    id: Scalars['String']['input'];
};

export type QuerybooksArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerycandidateBiosArgs = {
    electionDate: Scalars['String']['input'];
    lastName?: InputMaybe<Scalars['String']['input']>;
    office?: InputMaybe<Scalars['String']['input']>;
    party?: InputMaybe<Scalars['String']['input']>;
    siteCode: Scalars['String']['input'];
};

export type QuerycandidatePositionsArgs = {
    candidateID?: InputMaybe<Scalars['String']['input']>;
    electionDate: Scalars['String']['input'];
    issueID?: InputMaybe<Scalars['String']['input']>;
    office?: InputMaybe<Scalars['String']['input']>;
    party?: InputMaybe<Scalars['String']['input']>;
    siteCode: Scalars['String']['input'];
};

export type QuerycandidatesArgs = {
    district?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    office?: InputMaybe<Office>;
    state: Scalars['String']['input'];
    type: CandidateTypes;
    year: Scalars['String']['input'];
};

export type Querychartbeat30DayAssetArgs = {
    id: Scalars['String']['input'];
};

export type Querychartbeat30DayAssetsArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type Querychartbeat30dayassetSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerycontentpackageArgs = {
    id: Scalars['String']['input'];
};

export type QuerycontentpackageSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerycontentpackagesArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerycontentsourceArgs = {
    code: Scalars['String']['input'];
};

export type QuerycontentsourceSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerycontentsourcesArgs = {
    codes: Array<Scalars['String']['input']>;
};

export type QuerycontributorArgs = {
    aggregateId?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type QuerycontributorSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerycontributorsArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerydelegateReportsArgs = {
    type?: InputMaybe<delegateTypes>;
    year: Scalars['String']['input'];
};

export type QueryelectionDatesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    office?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
};

export type QueryelectionsMetaArgs = {
    electionDate: Scalars['String']['input'];
    limit?: InputMaybe<Scalars['Int']['input']>;
    office?: InputMaybe<Scalars['String']['input']>;
    raceTypeId?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
};

export type QueryexclusionArgs = {
    id: Scalars['String']['input'];
};

export type QueryexclusionsArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QueryexplainersArgs = {
    electionDate: Scalars['String']['input'];
    exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
    office: Scalars['String']['input'];
    raceID?: InputMaybe<Scalars['String']['input']>;
    siteCode: Scalars['String']['input'];
    state?: InputMaybe<Scalars['String']['input']>;
};

export type QueryfrontArgs = {
    id: Scalars['String']['input'];
};

export type QueryfrontSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryfrontsArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QueryissuesArgs = {
    electionDate: Scalars['String']['input'];
    office?: InputMaybe<Scalars['String']['input']>;
    party?: InputMaybe<Scalars['String']['input']>;
    siteCode: Scalars['String']['input'];
    state?: InputMaybe<Scalars['String']['input']>;
};

export type QuerykeyRacesArgs = {
    electionDate: Scalars['String']['input'];
    office?: InputMaybe<Scalars['String']['input']>;
    raceID?: InputMaybe<Scalars['String']['input']>;
    siteCode?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
};

export type QuerylocalElectionDatesArgs = {
    fipsCode?: InputMaybe<Scalars['String']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    siteCode: Scalars['String']['input'];
};

export type QuerylocalResultsArgs = {
    countyName?: InputMaybe<Scalars['String']['input']>;
    electionDate?: InputMaybe<Scalars['String']['input']>;
    fipsCode?: InputMaybe<Scalars['String']['input']>;
    siteCode?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
};

export type QuerypolicyArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type QuerypolicyAllowedArgs = {
    siteCode: Scalars['String']['input'];
};

export type QuerypolicyForSiteCodeArgs = {
    siteCode?: InputMaybe<Scalars['String']['input']>;
};

export type QuerypollsArgs = {
    district?: InputMaybe<Scalars['String']['input']>;
    main?: InputMaybe<Scalars['Boolean']['input']>;
    office?: InputMaybe<Office>;
    state: Scalars['String']['input'];
    year: Scalars['String']['input'];
};

export type QuerypublishedprioritiesArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerypublishedpriorityArgs = {
    friendlyId?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type QuerypublishedprioritySearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryracesArgs = {
    office?: InputMaybe<Office>;
    rating?: InputMaybe<Scalars['String']['input']>;
    seat?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
    type: RaceTypes;
    year: Scalars['String']['input'];
};

export type QueryreactionArgs = {
    assetId: Scalars['String']['input'];
};

export type QueryreactionsArgs = {
    assetIds: Array<Scalars['String']['input']>;
};

export type QueryredirectArgs = {
    path: Scalars['String']['input'];
};

export type QueryredirectsArgs = {
    paths: Array<Scalars['String']['input']>;
};

export type QueryresultsArgs = {
    county?: InputMaybe<Scalars['String']['input']>;
    district?: InputMaybe<Scalars['String']['input']>;
    electionDate?: InputMaybe<Scalars['String']['input']>;
    fipsCode?: InputMaybe<Scalars['String']['input']>;
    level?: InputMaybe<Scalars['String']['input']>;
    office?: InputMaybe<Scalars['String']['input']>;
    party?: InputMaybe<Scalars['String']['input']>;
    raceID?: InputMaybe<Scalars['String']['input']>;
    raceTypeID?: InputMaybe<raceTypeIDs>;
    seat?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
    type: ResultsTypes;
    year?: InputMaybe<Scalars['String']['input']>;
};

export type QueryresultsMetaArgs = {
    office: Scalars['String']['input'];
    raceTypeID?: InputMaybe<raceTypeIDs>;
    year?: InputMaybe<Scalars['String']['input']>;
};

export type QuerysearchAssetsArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchBannersArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchBooksArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchContentPackagesArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchContentsourcesArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchFrontsArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchPublishedpriorityArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchSSTSArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchTagsArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Querysearchchartbeat30dayassetsArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysearchcontributorsArgs = {
    parameters?: InputMaybe<Scalars['JSONObjectString']['input']>;
    template: Scalars['String']['input'];
    validate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysstsArgs = {
    id: Scalars['String']['input'];
};

export type QuerysstsSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerysstssArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerytagArgs = {
    id: Scalars['String']['input'];
};

export type QuerytagSearchTemplatesArgs = {
    include_deprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerytagsArgs = {
    ids: Array<Scalars['String']['input']>;
};

export type QuerytangentFragmentMetadataArgs = {
    id: Scalars['String']['input'];
};

export type QueryvoterGuideConfigsArgs = {
    electionDate?: InputMaybe<Scalars['String']['input']>;
    electionYear?: InputMaybe<Scalars['String']['input']>;
    siteCode: Scalars['String']['input'];
    state?: InputMaybe<Scalars['String']['input']>;
};

/** The datasources which provide race data */
export enum RaceTypes {
    /** @deprecated  */
    InsideElectionsOfficeSummary = 'InsideElectionsOfficeSummary',
    /** @deprecated  */
    InsideElectionsRace = 'InsideElectionsRace',
    /** @deprecated  */
    InsideElectionsStateSummary = 'InsideElectionsStateSummary'
}

export type Reaction = {
    __typename?: 'Reaction';
    /** The time of reaction data aggregation. */
    aggregationTime: Scalars['Int']['output'];
    /** The Asset ID the reaction is tied to. */
    assetId: Scalars['String']['output'];
    /** The different kinds of reactions and reaction data pertaining to the asset. */
    kinds: Array<ReactionKinds>;
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** The total length of the kinds list at this same level in the data, this number is unaffected by filtering. */
    totalKinds: Scalars['Int']['output'];
    /** URL of the asset (optional). */
    url?: Maybe<Scalars['String']['output']>;
};

export type ReactionkindsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type ReactionKinds = {
    __typename?: 'ReactionKinds';
    /** The number of reactions for a specific reaction kind and article. */
    count: Scalars['Int']['output'];
    /** The name of the reaction. */
    name: Scalars['String']['output'];
};

export type Redirect = {
    __typename?: 'Redirect';
    /** The asset ID the redirect is tied to. */
    assetId?: Maybe<Scalars['String']['output']>;
    /** The legacy identifier for the redirect. */
    legacyIdentifier?: Maybe<Scalars['String']['output']>;
    /** The URL that should be redirected to. */
    newPath: Scalars['String']['output'];
    /** The unique URL path that is used as the identifier, and is the lookup key for the redirect. */
    path: Scalars['String']['output'];
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** The date the redirect was last updated. */
    updateDate?: Maybe<Scalars['DateTime']['output']>;
};

/** The datasouce which provides results data */
export enum ResultsTypes {
    /** @deprecated  */
    Results = 'Results',
    /** @deprecated  */
    ResultsOfficeSummary = 'ResultsOfficeSummary'
}

export type SSTS = {
    __typename?: 'SSTS';
    attributes?: Maybe<SSTSAttributes>;
    children: Array<SSTSChildren>;
    displayName: Scalars['String']['output'];
    id: Scalars['String']['output'];
    isAbstract?: Maybe<Scalars['Boolean']['output']>;
    isAdHoc?: Maybe<Scalars['Boolean']['output']>;
    /** The name of the SSTS item, this is expected to be unique with enforcement of uniqueness done by the publisher of SSTS data. */
    name: Scalars['String']['output'];
    parentId?: Maybe<Scalars['String']['output']>;
    path: Scalars['String']['output'];
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** The total length of the children list at this same level in the data, this number is unaffected by filtering. */
    totalChildren: Scalars['Int']['output'];
    vocabulary: Scalars['String']['output'];
};

export type SSTSchildrenArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type SSTSAttributes = {
    __typename?: 'SSTSAttributes';
    avpDisabled?: Maybe<Scalars['Boolean']['output']>;
    awsPath?: Maybe<Scalars['String']['output']>;
    awsPathFront?: Maybe<Scalars['String']['output']>;
    /** Can hold a URL for SSTS label click-through on various platforms */
    clickThroughUrl?: Maybe<Scalars['String']['output']>;
    commentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    contentProtectionState?: Maybe<Scalars['String']['output']>;
    created?: Maybe<Scalars['DateTime']['output']>;
    createdBy?: Maybe<Scalars['String']['output']>;
    doNotAutotag?: Maybe<Scalars['Boolean']['output']>;
    excludePlanning?: Maybe<Scalars['String']['output']>;
    googleNewsExclude?: Maybe<Scalars['Boolean']['output']>;
    googleNewsGenre?: Maybe<Scalars['String']['output']>;
    modified?: Maybe<Scalars['DateTime']['output']>;
    modifiedBy?: Maybe<Scalars['String']['output']>;
    ngcatmap: Array<Scalars['String']['output']>;
    siteCode: Scalars['String']['output'];
    sponsorLandingEnabled?: Maybe<Scalars['Boolean']['output']>;
    sponsorLogo?: Maybe<Scalars['String']['output']>;
    sponsorLogoHeight?: Maybe<Scalars['String']['output']>;
    sponsorLogoLanding?: Maybe<Scalars['String']['output']>;
    sponsorLogoWidth?: Maybe<Scalars['String']['output']>;
    sponsorName?: Maybe<Scalars['String']['output']>;
    sstsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** The total length of the ngcatmap list at this same level in the data, this number is unaffected by filtering. */
    totalNgcatmap: Scalars['Int']['output'];
    updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type SSTSAttributesngcatmapArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type SSTSChildren = {
    __typename?: 'SSTSChildren';
    id?: Maybe<Scalars['String']['output']>;
};

/** Output for assets search */
export type SearchAssets = {
    __typename?: 'SearchAssets';
    /** List of assets */
    assets?: Maybe<Array<Asset>>;
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for banners search */
export type SearchBanners = {
    __typename?: 'SearchBanners';
    /** List of banners */
    banners?: Maybe<Array<Banner>>;
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for books search */
export type SearchBooks = {
    __typename?: 'SearchBooks';
    /** List of books */
    books?: Maybe<Array<Book>>;
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for chartbeat30dayassets search */
export type SearchChartbeat30dayassets = {
    __typename?: 'SearchChartbeat30dayassets';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** List of chartbeat30dayassets */
    chartbeat30dayassets?: Maybe<Array<Chartbeat30DayAsset>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for contentpackages search */
export type SearchContentpackages = {
    __typename?: 'SearchContentpackages';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** List of contentpackages */
    contentpackages?: Maybe<Array<ContentPackage>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for contentsources search */
export type SearchContentsources = {
    __typename?: 'SearchContentsources';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** List of contentsources */
    contentsources?: Maybe<Array<Contentsource>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for contributors search */
export type SearchContributors = {
    __typename?: 'SearchContributors';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** List of contributors */
    contributors?: Maybe<Array<Contributor>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for fronts search */
export type SearchFronts = {
    __typename?: 'SearchFronts';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** List of fronts */
    fronts?: Maybe<Array<Front>>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
};

/** Output for publishedpriority search */
export type SearchPublishedpriority = {
    __typename?: 'SearchPublishedpriority';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
    /** List of publishedpriority */
    publishedpriorities?: Maybe<Array<Publishedpriority>>;
};

/** Output for ssts search */
export type SearchSsts = {
    __typename?: 'SearchSsts';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
    /** List of ssts */
    ssts?: Maybe<Array<SSTS>>;
};

/** Output for tags search */
export type SearchTags = {
    __typename?: 'SearchTags';
    /** Bucket aggregations. Can be nested */
    bucketAggregations?: Maybe<Array<Maybe<BucketAggregation>>>;
    /** Next cursor */
    cursor?: Maybe<Scalars['JSONArrayString']['output']>;
    /** Metric aggregations */
    metricAggregations?: Maybe<Array<Maybe<MetricAggregation>>>;
    /** Total number of results */
    numResults: Scalars['Int']['output'];
    /** List of tags */
    tags?: Maybe<Array<Tag>>;
};

export type Tag = {
    __typename?: 'Tag';
    attributes?: Maybe<TagAttributes>;
    children: Array<TagChildren>;
    displayName: Scalars['String']['output'];
    id: Scalars['String']['output'];
    isAbstract?: Maybe<Scalars['Boolean']['output']>;
    isAdHoc?: Maybe<Scalars['Boolean']['output']>;
    name: Scalars['String']['output'];
    parentId?: Maybe<Scalars['String']['output']>;
    path: Scalars['String']['output'];
    relationships: Array<TagRelationships>;
    /** The version of the schema */
    schemaVersion?: Maybe<Scalars['String']['output']>;
    /** The total length of the children list at this same level in the data, this number is unaffected by filtering. */
    totalChildren: Scalars['Int']['output'];
    /** The total length of the relationships list at this same level in the data, this number is unaffected by filtering. */
    totalRelationships: Scalars['Int']['output'];
    vocabulary: Scalars['String']['output'];
};

export type TagchildrenArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagrelationshipsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributes = {
    __typename?: 'TagAttributes';
    altLabel: Array<Scalars['String']['output']>;
    apTagMap: Array<Scalars['String']['output']>;
    assignedTo: Array<Scalars['String']['output']>;
    birthdate: Array<Scalars['DateTime']['output']>;
    censusData: Array<Scalars['String']['output']>;
    comment: Array<Scalars['String']['output']>;
    /** Indicates the contentProtectionState value for any assets carrying a tag where this value is set */
    contentProtectionState: Array<Scalars['String']['output']>;
    created: Array<Scalars['DateTime']['output']>;
    createdBy: Array<Scalars['String']['output']>;
    date: Array<Scalars['DateTime']['output']>;
    deathdate: Array<Scalars['DateTime']['output']>;
    definition: Array<Scalars['String']['output']>;
    doNotAutotag: Array<Scalars['String']['output']>;
    doNotExtract: Array<Scalars['String']['output']>;
    doNotTag: Array<Scalars['String']['output']>;
    doNotextract: Array<Scalars['String']['output']>;
    extractionMethod: Array<Scalars['String']['output']>;
    fipsCode?: Maybe<Scalars['String']['output']>;
    followIgnoreWhenPrimary: Array<Scalars['String']['output']>;
    forbiddenSpan: Array<Scalars['String']['output']>;
    geoID: Array<Scalars['String']['output']>;
    /** A string for the ID for a sports team from the Gracenote data vendor */
    gracenoteTeamID: Array<Scalars['String']['output']>;
    hashtag: Array<Scalars['String']['output']>;
    homepage: Array<Scalars['String']['output']>;
    hometown: Array<Scalars['String']['output']>;
    imageAssetId: Array<Scalars['String']['output']>;
    inlineLink?: Maybe<Scalars['Any']['output']>;
    inlineLinkEnabled?: Maybe<Scalars['Boolean']['output']>;
    isDefault: Array<Scalars['String']['output']>;
    isRecurringOrSeasonal: Array<Scalars['String']['output']>;
    isSmartTopic: Array<Scalars['String']['output']>;
    iso2Code: Array<Scalars['String']['output']>;
    iso3Code: Array<Scalars['String']['output']>;
    lat: Array<Scalars['String']['output']>;
    /** A string for the league name (NBA, NFL, MLB, NHL, NCAAB, NCAAF, WNBA, WNCAAB, MLS) */
    league: Array<Scalars['String']['output']>;
    legacyIdentifiers: Array<Scalars['String']['output']>;
    legalDisclaimer: Array<Scalars['String']['output']>;
    lexicon: Array<Scalars['String']['output']>;
    local: Array<Scalars['String']['output']>;
    location?: Maybe<Scalars['String']['output']>;
    locationType: Array<Scalars['String']['output']>;
    long: Array<Scalars['String']['output']>;
    marketRank?: Maybe<Scalars['Int']['output']>;
    modified: Array<Scalars['DateTime']['output']>;
    modifiedBy: Array<Scalars['String']['output']>;
    nickname: Array<Scalars['String']['output']>;
    placeAttempted: Array<Scalars['String']['output']>;
    placeFormattedAddress: Array<Scalars['String']['output']>;
    placeId: Array<Scalars['String']['output']>;
    placeLocation: Array<Scalars['String']['output']>;
    placeType: Array<Scalars['String']['output']>;
    placeViewport: Array<Scalars['String']['output']>;
    politicalOffice?: Maybe<Scalars['String']['output']>;
    prefLabel: Array<Scalars['String']['output']>;
    publicCompany: Array<Scalars['String']['output']>;
    publiccompany: Array<Scalars['String']['output']>;
    relationshipDescriptor: Array<Scalars['String']['output']>;
    relativeScore: Array<Scalars['String']['output']>;
    requestor: Array<Scalars['String']['output']>;
    restrictor: Array<Scalars['String']['output']>;
    seat?: Maybe<Scalars['String']['output']>;
    siteCode: Array<Scalars['String']['output']>;
    smartIncludeGalleries: Array<Scalars['String']['output']>;
    socialFacebook: Array<Scalars['String']['output']>;
    socialGooglePlus: Array<Scalars['String']['output']>;
    socialInstagram: Array<Scalars['String']['output']>;
    socialTwitter: Array<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    /** A string the ID for a sports team from the Stats Perform data vendor */
    statsPerformID: Array<Scalars['String']['output']>;
    statusTerm: Array<Scalars['String']['output']>;
    stopTerm: Array<Scalars['String']['output']>;
    subjectCode: Array<Scalars['String']['output']>;
    teamPosition: Array<Scalars['String']['output']>;
    termHighlight: Array<Scalars['String']['output']>;
    ticker: Array<Scalars['String']['output']>;
    /** A string the ID for a sports team from the Tipico data vendor */
    tipicoTeamID: Array<Scalars['String']['output']>;
    /** The total length of the altLabel list at this same level in the data, this number is unaffected by filtering. */
    totalAltLabel: Scalars['Int']['output'];
    /** The total length of the assignedTo list at this same level in the data, this number is unaffected by filtering. */
    totalAssignedTo: Scalars['Int']['output'];
    /** The total length of the birthdate list at this same level in the data, this number is unaffected by filtering. */
    totalBirthdate: Scalars['Int']['output'];
    /** The total length of the comment list at this same level in the data, this number is unaffected by filtering. */
    totalComment: Scalars['Int']['output'];
    /** The total length of the contentProtectionState list at this same level in the data, this number is unaffected by filtering. */
    totalContentProtectionState: Scalars['Int']['output'];
    /** The total length of the created list at this same level in the data, this number is unaffected by filtering. */
    totalCreated: Scalars['Int']['output'];
    /** The total length of the createdBy list at this same level in the data, this number is unaffected by filtering. */
    totalCreatedBy: Scalars['Int']['output'];
    /** The total length of the date list at this same level in the data, this number is unaffected by filtering. */
    totalDate: Scalars['Int']['output'];
    /** The total length of the deathdate list at this same level in the data, this number is unaffected by filtering. */
    totalDeathdate: Scalars['Int']['output'];
    /** The total length of the definition list at this same level in the data, this number is unaffected by filtering. */
    totalDefinition: Scalars['Int']['output'];
    /** The total length of the doNotAutotag list at this same level in the data, this number is unaffected by filtering. */
    totalDoNotAutotag: Scalars['Int']['output'];
    /** The total length of the doNotExtract list at this same level in the data, this number is unaffected by filtering. */
    totalDoNotExtract: Scalars['Int']['output'];
    /** The total length of the doNotTag list at this same level in the data, this number is unaffected by filtering. */
    totalDoNotTag: Scalars['Int']['output'];
    /** The total length of the doNotextract list at this same level in the data, this number is unaffected by filtering. */
    totalDoNotextract: Scalars['Int']['output'];
    /** The total length of the extractionMethod list at this same level in the data, this number is unaffected by filtering. */
    totalExtractionMethod: Scalars['Int']['output'];
    /** The total length of the followIgnoreWhenPrimary list at this same level in the data, this number is unaffected by filtering. */
    totalFollowIgnoreWhenPrimary: Scalars['Int']['output'];
    /** The total length of the forbiddenSpan list at this same level in the data, this number is unaffected by filtering. */
    totalForbiddenSpan: Scalars['Int']['output'];
    /** The total length of the hashtag list at this same level in the data, this number is unaffected by filtering. */
    totalHashtag: Scalars['Int']['output'];
    /** The total length of the homepage list at this same level in the data, this number is unaffected by filtering. */
    totalHomepage: Scalars['Int']['output'];
    /** The total length of the hometown list at this same level in the data, this number is unaffected by filtering. */
    totalHometown: Scalars['Int']['output'];
    /** The total length of the imageAssetId list at this same level in the data, this number is unaffected by filtering. */
    totalImageAssetId: Scalars['Int']['output'];
    /** The total length of the isDefault list at this same level in the data, this number is unaffected by filtering. */
    totalIsDefault: Scalars['Int']['output'];
    /** The total length of the isRecurringOrSeasonal list at this same level in the data, this number is unaffected by filtering. */
    totalIsRecurringOrSeasonal: Scalars['Int']['output'];
    /** The total length of the isSmartTopic list at this same level in the data, this number is unaffected by filtering. */
    totalIsSmartTopic: Scalars['Int']['output'];
    /** The total length of the iso2Code list at this same level in the data, this number is unaffected by filtering. */
    totalIso2Code: Scalars['Int']['output'];
    /** The total length of the iso3Code list at this same level in the data, this number is unaffected by filtering. */
    totalIso3Code: Scalars['Int']['output'];
    /** The total length of the lat list at this same level in the data, this number is unaffected by filtering. */
    totalLat: Scalars['Int']['output'];
    /** The total length of the lexicon list at this same level in the data, this number is unaffected by filtering. */
    totalLexicon: Scalars['Int']['output'];
    /** The total length of the local list at this same level in the data, this number is unaffected by filtering. */
    totalLocal: Scalars['Int']['output'];
    /** The total length of the locationType list at this same level in the data, this number is unaffected by filtering. */
    totalLocationType: Scalars['Int']['output'];
    /** The total length of the long list at this same level in the data, this number is unaffected by filtering. */
    totalLong: Scalars['Int']['output'];
    /** The total length of the modified list at this same level in the data, this number is unaffected by filtering. */
    totalModified: Scalars['Int']['output'];
    /** The total length of the modifiedBy list at this same level in the data, this number is unaffected by filtering. */
    totalModifiedBy: Scalars['Int']['output'];
    /** The total length of the nickname list at this same level in the data, this number is unaffected by filtering. */
    totalNickname: Scalars['Int']['output'];
    /** The total length of the placeAttempted list at this same level in the data, this number is unaffected by filtering. */
    totalPlaceAttempted: Scalars['Int']['output'];
    /** The total length of the placeFormattedAddress list at this same level in the data, this number is unaffected by filtering. */
    totalPlaceFormattedAddress: Scalars['Int']['output'];
    /** The total length of the placeId list at this same level in the data, this number is unaffected by filtering. */
    totalPlaceId: Scalars['Int']['output'];
    /** The total length of the placeLocation list at this same level in the data, this number is unaffected by filtering. */
    totalPlaceLocation: Scalars['Int']['output'];
    /** The total length of the placeType list at this same level in the data, this number is unaffected by filtering. */
    totalPlaceType: Scalars['Int']['output'];
    /** The total length of the placeViewport list at this same level in the data, this number is unaffected by filtering. */
    totalPlaceViewport: Scalars['Int']['output'];
    /** The total length of the prefLabel list at this same level in the data, this number is unaffected by filtering. */
    totalPrefLabel: Scalars['Int']['output'];
    /** The total length of the publicCompany list at this same level in the data, this number is unaffected by filtering. */
    totalPublicCompany: Scalars['Int']['output'];
    /** The total length of the publiccompany list at this same level in the data, this number is unaffected by filtering. */
    totalPubliccompany: Scalars['Int']['output'];
    /** The total length of the relationshipDescriptor list at this same level in the data, this number is unaffected by filtering. */
    totalRelationshipDescriptor: Scalars['Int']['output'];
    /** The total length of the relativeScore list at this same level in the data, this number is unaffected by filtering. */
    totalRelativeScore: Scalars['Int']['output'];
    /** The total length of the requestor list at this same level in the data, this number is unaffected by filtering. */
    totalRequestor: Scalars['Int']['output'];
    /** The total length of the restrictor list at this same level in the data, this number is unaffected by filtering. */
    totalRestrictor: Scalars['Int']['output'];
    /** The total length of the siteCode list at this same level in the data, this number is unaffected by filtering. */
    totalSiteCode: Scalars['Int']['output'];
    /** The total length of the smartIncludeGalleries list at this same level in the data, this number is unaffected by filtering. */
    totalSmartIncludeGalleries: Scalars['Int']['output'];
    /** The total length of the socialFacebook list at this same level in the data, this number is unaffected by filtering. */
    totalSocialFacebook: Scalars['Int']['output'];
    /** The total length of the socialGooglePlus list at this same level in the data, this number is unaffected by filtering. */
    totalSocialGooglePlus: Scalars['Int']['output'];
    /** The total length of the socialInstagram list at this same level in the data, this number is unaffected by filtering. */
    totalSocialInstagram: Scalars['Int']['output'];
    /** The total length of the socialTwitter list at this same level in the data, this number is unaffected by filtering. */
    totalSocialTwitter: Scalars['Int']['output'];
    /** The total length of the statusTerm list at this same level in the data, this number is unaffected by filtering. */
    totalStatusTerm: Scalars['Int']['output'];
    /** The total length of the stopTerm list at this same level in the data, this number is unaffected by filtering. */
    totalStopTerm: Scalars['Int']['output'];
    /** The total length of the subjectCode list at this same level in the data, this number is unaffected by filtering. */
    totalSubjectCode: Scalars['Int']['output'];
    /** The total length of the teamPosition list at this same level in the data, this number is unaffected by filtering. */
    totalTeamPosition: Scalars['Int']['output'];
    /** The total length of the termHighlight list at this same level in the data, this number is unaffected by filtering. */
    totalTermHighlight: Scalars['Int']['output'];
    /** The total length of the ticker list at this same level in the data, this number is unaffected by filtering. */
    totalTicker: Scalars['Int']['output'];
    /** The total length of the trainingSet list at this same level in the data, this number is unaffected by filtering. */
    totalTrainingSet: Scalars['Int']['output'];
    /** The total length of the type list at this same level in the data, this number is unaffected by filtering. */
    totalType: Scalars['Int']['output'];
    /** The total length of the uniformNumber list at this same level in the data, this number is unaffected by filtering. */
    totalUniformNumber: Scalars['Int']['output'];
    trainingSet: Array<Scalars['String']['output']>;
    type: Array<Scalars['String']['output']>;
    uniformNumber: Array<Scalars['String']['output']>;
};

export type TagAttributesaltLabelArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesapTagMapArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesassignedToArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesbirthdateArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributescensusDataArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributescommentArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributescontentProtectionStateArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributescreatedArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributescreatedByArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesdateArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesdeathdateArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesdefinitionArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesdoNotAutotagArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesdoNotExtractArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesdoNotTagArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesdoNotextractArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesextractionMethodArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesfollowIgnoreWhenPrimaryArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesforbiddenSpanArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesgeoIDArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesgracenoteTeamIDArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeshashtagArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeshomepageArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeshometownArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesimageAssetIdArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesisDefaultArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesisRecurringOrSeasonalArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesisSmartTopicArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesiso2CodeArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesiso3CodeArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeslatArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesleagueArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeslegacyIdentifiersArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeslegalDisclaimerArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeslexiconArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeslocalArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeslocationTypeArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributeslongArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesmodifiedArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesmodifiedByArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesnicknameArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesplaceAttemptedArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesplaceFormattedAddressArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesplaceIdArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesplaceLocationArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesplaceTypeArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesplaceViewportArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesprefLabelArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributespublicCompanyArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributespubliccompanyArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesrelationshipDescriptorArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesrelativeScoreArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesrequestorArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesrestrictorArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributessiteCodeArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributessmartIncludeGalleriesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributessocialFacebookArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributessocialGooglePlusArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributessocialInstagramArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributessocialTwitterArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesstatsPerformIDArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesstatusTermArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesstopTermArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributessubjectCodeArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesteamPositionArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributestermHighlightArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributestickerArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributestipicoTeamIDArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributestrainingSetArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributestypeArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagAttributesuniformNumberArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TagChildren = {
    __typename?: 'TagChildren';
    id?: Maybe<Scalars['String']['output']>;
};

export type TagRelationships = {
    __typename?: 'TagRelationships';
    referenceType?: Maybe<Scalars['String']['output']>;
    /** Query Complexity Cost: +20 */
    referencedEntity?: Maybe<Tag>;
    referencedEntityId?: Maybe<Scalars['String']['output']>;
};

export type Template = {
    __typename?: 'Template';
    /** Search template comments */
    comments: Array<Scalars['String']['output']>;
    /** Whether the search template is deprecated */
    deprecated: Scalars['Boolean']['output'];
    /** Name of the search template */
    name: Scalars['String']['output'];
    /** Search template parameters */
    params: Array<TemplateParams>;
    /** The total length of the comments list at this same level in the data, this number is unaffected by filtering. */
    totalComments: Scalars['Int']['output'];
    /** The total length of the params list at this same level in the data, this number is unaffected by filtering. */
    totalParams: Scalars['Int']['output'];
};

export type TemplatecommentsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TemplateparamsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TemplateParams = {
    __typename?: 'TemplateParams';
    /** Comments of the search template parameter */
    comments: Array<Scalars['String']['output']>;
    /** Default value of the search template parameter */
    defaultVal: Scalars['String']['output'];
    /** Function of the search template parameter */
    function: Scalars['String']['output'];
    /** Function arguments of the search template parameter */
    functionArgs: Scalars['String']['output'];
    /** Name of the search template parameter */
    name: Scalars['String']['output'];
    /** Consumed properties of the search template parameter */
    properties: Array<Scalars['String']['output']>;
    /** Whether or not the search template parameter is required */
    required: Scalars['Boolean']['output'];
    /** The total length of the comments list at this same level in the data, this number is unaffected by filtering. */
    totalComments: Scalars['Int']['output'];
    /** The total length of the properties list at this same level in the data, this number is unaffected by filtering. */
    totalProperties: Scalars['Int']['output'];
    /** Type of the search template parameter */
    type: Scalars['String']['output'];
};

export type TemplateParamscommentsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TemplateParamspropertiesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TextBody = {
    __typename?: 'TextBody';
    /** @deprecated Use contentBody */
    desktop: Array<TextBodyDesktop>;
    /** @deprecated Use contentBody */
    mobile: Array<TextBodyMobile>;
    /** The total length of the desktop list at this same level in the data, this number is unaffected by filtering. */
    totalDesktop: Scalars['Int']['output'];
    /** The total length of the mobile list at this same level in the data, this number is unaffected by filtering. */
    totalMobile: Scalars['Int']['output'];
};

export type TextBodydesktopArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TextBodymobileArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type TextBodyDesktop = {
    __typename?: 'TextBodyDesktop';
    /** @deprecated Use contentBody */
    type: Scalars['String']['output'];
    /** @deprecated Use contentBody */
    value?: Maybe<Scalars['String']['output']>;
};

export type TextBodyMobile = {
    __typename?: 'TextBodyMobile';
    /** @deprecated Use contentBody */
    type: Scalars['String']['output'];
    /** @deprecated Use contentBody */
    value?: Maybe<Scalars['String']['output']>;
};

export type TextContentBody = {
    __typename?: 'TextContentBody';
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['String']['output']>;
};

export type VideoRenditions = {
    __typename?: 'VideoRenditions';
    URL: Scalars['String']['output'];
    audioOnly: Scalars['Boolean']['output'];
    codec: Scalars['String']['output'];
    container: Scalars['String']['output'];
    displayName?: Maybe<Scalars['String']['output']>;
    duration: Scalars['Float']['output'];
    encodingRate: Scalars['Float']['output'];
    height: Scalars['Float']['output'];
    size: Scalars['Float']['output'];
    type: Scalars['String']['output'];
    width: Scalars['Float']['output'];
};

export type ballotpedia = Election & {
    __typename?: 'ballotpedia';
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /** @deprecated  */
    district: Scalars['String']['output'];
    /** @deprecated  */
    education?: Maybe<ballotpedia_education>;
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    firstName: Scalars['String']['output'];
    /** @deprecated  */
    incumbent: Scalars['Boolean']['output'];
    /** @deprecated  */
    lastName: Scalars['String']['output'];
    /** @deprecated  */
    name: Scalars['String']['output'];
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    partyAffiliation: Scalars['String']['output'];
    /** @deprecated  */
    profession?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    state: Scalars['String']['output'];
    /** @deprecated  */
    summary: Scalars['String']['output'];
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    url: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type ballotpedia_education = {
    __typename?: 'ballotpedia_education';
    /** @deprecated  */
    associates?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    bachelors?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    graduate?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    law?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    md?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    other?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    phd?: Maybe<Scalars['String']['output']>;
};

export type breakingnews = Asset & {
    __typename?: 'breakingnews';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    associatedAssetId?: Maybe<Scalars['String']['output']>;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    developing: Scalars['Boolean']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    fullText?: Maybe<Scalars['String']['output']>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    /** @deprecated Assets created via Story Editor will no longer communicate this value in the future. */
    layoutPriorityAssetId?: Maybe<Scalars['String']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type breakingnewscontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type breakingnewscontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type breakingnewsfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type breakingnewsstoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type breakingnewstagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type candidatepositions = {
    __typename?: 'candidatepositions';
    /**
     * The candidate's id.
     * @deprecated
     */
    candidateID: Scalars['String']['output'];
    /**
     * The election date related to the candidate position.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * The identifier for the candidate's position.
     * @deprecated
     */
    id: Scalars['String']['output'];
    /**
     * The id of the issue for which the candidate's position is associated with.
     * @deprecated
     */
    issueID: Scalars['String']['output'];
    /**
     * The office which the candidate is related to. This value should align with that of the Results API.
     * @deprecated
     */
    office: Scalars['String']['output'];
    /**
     * The party the candidate and position is associated with. This value should align with that of the Results API.
     * @deprecated
     */
    party: Scalars['String']['output'];
    /**
     * The full text of the candidate's position on the key issue.
     * @deprecated
     */
    positionText: Scalars['String']['output'];
    /**
     * A integer field used to order the candidate positions for query result and/or for display purposes.
     * @deprecated
     */
    rank: Scalars['Int']['output'];
    /**
     * The site code for which this version of the candidate position is tied to.
     * @deprecated
     */
    siteCode: Scalars['String']['output'];
    /**
     * The update date for the document.
     * @deprecated
     */
    updateDate?: Maybe<Scalars['DateTime']['output']>;
};

export type candidates = {
    __typename?: 'candidates';
    /**
     * A short biography for the candidate.
     * @deprecated
     */
    bio: Scalars['String']['output'];
    /**
     * The display name for the candidate.
     * @deprecated
     */
    displayName: Scalars['String']['output'];
    /**
     * The election date.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * The candidate's first name.
     * @deprecated
     */
    firstName: Scalars['String']['output'];
    /**
     * The identifier for the candidate.
     * @deprecated
     */
    id: Scalars['String']['output'];
    /**
     * The candidate's last name.
     * @deprecated
     */
    lastName: Scalars['String']['output'];
    /**
     * The office the candidate is associated with. This value should align with that of the Results API.
     * @deprecated
     */
    office: Scalars['String']['output'];
    /**
     * The party the candidate is associated with. This value should align with that of the Results API.
     * @deprecated
     */
    party: Scalars['String']['output'];
    /**
     * The race which the candidate position is associated with.
     * @deprecated
     */
    raceID?: Maybe<Scalars['String']['output']>;
    /**
     * A integer field used to order the candidates for query result and/or for display purposes.
     * @deprecated
     */
    rank: Scalars['Int']['output'];
    /**
     * The site code for which this version of the candidate is tied to.
     * @deprecated
     */
    siteCode: Scalars['String']['output'];
    /**
     * The update date for the document.
     * @deprecated
     */
    updateDate?: Maybe<Scalars['DateTime']['output']>;
};

export type contentlist = Asset & {
    __typename?: 'contentlist';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /**
     * The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata
     *
     * Query Complexity Cost: +10
     */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /**
     * This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front.
     * @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments.
     */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    /** Query Complexity Cost: +10 */
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /**
     * The total length of the fronts list at this same level in the data, this number is unaffected by filtering.
     * @deprecated Front assignments are going away, https://confluence.gannett.com/display/AUTHORING/Fronts+Reimagined
     */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type contentlistcontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type contentlistcontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type contentlistfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type contentliststoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type contentlisttagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type delegate = {
    __typename?: 'delegate';
    /** @deprecated  */
    delegates: Array<Maybe<delegate_delegates>>;
    /** @deprecated  */
    electionDate?: Maybe<Scalars['DateTime']['output']>;
    /** @deprecated  */
    id: Scalars['String']['output'];
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /**
     * The total length of the delegates list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalDelegates?: Maybe<Scalars['Int']['output']>;
    /**
     * Each delegate report has a set of acceptable types this identifies which it is.
     * @deprecated
     */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type delegatedelegatesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export enum delegateTypes {
    /**
     * State by State Report
     * @deprecated
     */
    delstate = 'delstate',
    /**
     * National Summary
     * @deprecated
     */
    delsum = 'delsum',
    /**
     * Summary including unpledged delegates
     * @deprecated
     */
    delsuper = 'delsuper'
}

export type delegate_delegates = {
    __typename?: 'delegate_delegates';
    /** @deprecated  */
    candidates?: Maybe<Array<Maybe<delegate_delegates_candidates>>>;
    /** @deprecated  */
    delegatesChosen: Scalars['Int']['output'];
    /** @deprecated  */
    delegatesNeeded: Scalars['Int']['output'];
    /** @deprecated  */
    delegatesToBeChosen: Scalars['Int']['output'];
    /** @deprecated  */
    party: Scalars['String']['output'];
    /** @deprecated  */
    states?: Maybe<Array<Maybe<delegate_delegates_states>>>;
    /**
     * The total length of the candidates list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalCandidates?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    totalDelegatesAvailable: Scalars['Int']['output'];
    /**
     * The total length of the states list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalStates?: Maybe<Scalars['Int']['output']>;
};

export type delegate_delegatescandidatesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type delegate_delegatesstatesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type delegate_delegates_candidates = {
    __typename?: 'delegate_delegates_candidates';
    /** @deprecated  */
    id: Scalars['String']['output'];
    /** @deprecated  */
    name: Scalars['String']['output'];
    /** @deprecated  */
    oneDayChange?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    sevenDayChange?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    thirtyDayChange?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    totalDelegates: Scalars['Int']['output'];
    /** @deprecated  */
    unpledgedDelegates?: Maybe<Scalars['Int']['output']>;
};

export type delegate_delegates_states = {
    __typename?: 'delegate_delegates_states';
    /** @deprecated  */
    candidates?: Maybe<Array<Maybe<delegate_delegates_states_candidates>>>;
    /** @deprecated  */
    id: Scalars['String']['output'];
    /**
     * The total length of the candidates list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalCandidates?: Maybe<Scalars['Int']['output']>;
};

export type delegate_delegates_statescandidatesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type delegate_delegates_states_candidates = {
    __typename?: 'delegate_delegates_states_candidates';
    /** @deprecated  */
    id: Scalars['String']['output'];
    /** @deprecated  */
    name: Scalars['String']['output'];
    /** @deprecated  */
    oneDayChange?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    sevenDayChange?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    thirtyDayChange?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    totalDelegates: Scalars['Int']['output'];
    /** @deprecated  */
    unpledgedDelegates?: Maybe<Scalars['Int']['output']>;
};

export type electiondate = {
    __typename?: 'electiondate';
    /**
     * The date the election occurred on in the format YYYY-MM-DD.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    state: Scalars['String']['output'];
};

export type electionsmeta = {
    __typename?: 'electionsmeta';
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    raceId: Scalars['String']['output'];
    /** @deprecated  */
    raceTypeId: Scalars['String']['output'];
    /** @deprecated  */
    state: Scalars['String']['output'];
};

export type embed = Asset & {
    __typename?: 'embed';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type embedcontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type embedcontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type embedfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type embedstoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type embedtagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type explainers = Explainers & {
    __typename?: 'explainers';
    /**
     * The identifier.
     * @deprecated
     */
    dataId: Scalars['String']['output'];
    /**
     * The district (house) for the election.
     * @deprecated
     */
    district?: Maybe<Scalars['String']['output']>;
    /**
     * The date of the election.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * A short name for the entire election.
     * @deprecated
     */
    electionName?: Maybe<Scalars['String']['output']>;
    /**
     * A block of HTML-enabled text that appears on the page below the headline, often some news context, details about oddities in the race, etc.
     * @deprecated
     */
    explainer?: Maybe<Scalars['String']['output']>;
    /**
     * The on-page headline for the index or results page. Required.
     * @deprecated
     */
    headline: Scalars['String']['output'];
    /**
     * The on-page meta description for the index or results page.
     * @deprecated
     */
    metaDescription?: Maybe<Scalars['String']['output']>;
    /**
     * The office type.
     * @deprecated
     */
    office: Scalars['String']['output'];
    /**
     * The AP ID of this race (if it is a race).
     * @deprecated
     */
    raceId?: Maybe<Scalars['String']['output']>;
    /**
     * A manual mechanism for overwriting the race name in case of bad data from AP, particularly for ballot initiatives and downballot stuff.
     * @deprecated
     */
    raceNameOverride?: Maybe<Scalars['String']['output']>;
    /**
     * A non-displayed optional field that can be used to order results on a page.
     * @deprecated
     */
    rank?: Maybe<Scalars['Int']['output']>;
    /**
     * The seat (senate) for the election
     * @deprecated
     */
    seat?: Maybe<Scalars['String']['output']>;
    /**
     * A Gannett site code used to control display on the JOA markets.
     * @deprecated
     */
    siteCode: Scalars['String']['output'];
    /**
     * The race's state, if it is not a general index page.
     * @deprecated
     */
    state?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    timePublished?: Maybe<Scalars['DateTime']['output']>;
};

export type fec = Election & {
    __typename?: 'fec';
    /** @deprecated  */
    candidateId?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /** @deprecated  */
    district?: Maybe<Scalars['String']['output']>;
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    lastName: Scalars['String']['output'];
    /** @deprecated  */
    name: Scalars['String']['output'];
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    party: Scalars['String']['output'];
    /** @deprecated  */
    receipts: Scalars['Float']['output'];
    /** @deprecated  */
    state: Scalars['String']['output'];
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type gallery = Asset & {
    __typename?: 'gallery';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    promoImage?: Maybe<GalleryPromoImage>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type gallerycontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type gallerycontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type galleryfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type gallerystoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type gallerytagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type image = Asset & {
    __typename?: 'image';
    URL: ImageURL;
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    /** Alternative text for an image. https://html.spec.whatwg.org/multipage/images.html#alt */
    alternativeText?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    caption: Scalars['String']['output'];
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    credit?: Maybe<Scalars['String']['output']>;
    crops: Array<ImageCrops>;
    cutline?: Maybe<Scalars['String']['output']>;
    datePhotoTaken: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    orientation: Scalars['String']['output'];
    originalSize: ImageOriginalSize;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the crops list at this same level in the data, this number is unaffected by filtering. */
    totalCrops: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type imagecontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type imagecontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type imagecropsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type imagefrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type imagestoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type imagetagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type insideelectionsofficesummary = Election & {
    __typename?: 'insideelectionsofficesummary';
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    outlook: Scalars['String']['output'];
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    totals: insideelectionsofficesummary_totals;
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type insideelectionsofficesummary_totals = {
    __typename?: 'insideelectionsofficesummary_totals';
    /** @deprecated  */
    democrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    details?: Maybe<insideelectionsofficesummary_totals_details>;
    /** @deprecated  */
    republican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    tossup?: Maybe<Scalars['Int']['output']>;
};

export type insideelectionsofficesummary_totals_details = {
    __typename?: 'insideelectionsofficesummary_totals_details';
    /** @deprecated  */
    currentlySafeDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    currentlySafeRepublican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    democratFavored?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    leanDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    leanRepublican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    notUpThisCycleDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    notUpThisCycleRepublican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    pureTossUp?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    republicanFavored?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    tossUpTiltDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    tossUpTiltRepublican?: Maybe<Scalars['Int']['output']>;
};

export type insideelectionsrace = Election & {
    __typename?: 'insideelectionsrace';
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    incumbent: Scalars['String']['output'];
    /** @deprecated  */
    notes: insideelectionsrace_notes;
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    party: Scalars['String']['output'];
    /** @deprecated  */
    rating: insideelectionsrace_rating;
    /** @deprecated  */
    seat: Scalars['String']['output'];
    /** @deprecated  */
    state: Scalars['String']['output'];
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type insideelectionsrace_notes = {
    __typename?: 'insideelectionsrace_notes';
    /** @deprecated  */
    open?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    special?: Maybe<Scalars['String']['output']>;
};

export type insideelectionsrace_rating = {
    __typename?: 'insideelectionsrace_rating';
    /** @deprecated  */
    id?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    label?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    segment?: Maybe<Scalars['String']['output']>;
};

export type insideelectionsstatesummary = Election & {
    __typename?: 'insideelectionsstatesummary';
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    state: Scalars['String']['output'];
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    totals: insideelectionsstatesummary_totals;
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type insideelectionsstatesummary_totals = {
    __typename?: 'insideelectionsstatesummary_totals';
    /** @deprecated  */
    democrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    details?: Maybe<insideelectionsstatesummary_totals_details>;
    /** @deprecated  */
    republican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    tossup?: Maybe<Scalars['Int']['output']>;
};

export type insideelectionsstatesummary_totals_details = {
    __typename?: 'insideelectionsstatesummary_totals_details';
    /** @deprecated  */
    currentlySafeDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    currentlySafeRepublican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    democratFavored?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    leanDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    leanRepublican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    notUpThisCycleDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    notUpThisCycleRepublican?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    pureTossUp?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    republicanFavored?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    tossUpTiltDemocrat?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    tossUpTiltRepublican?: Maybe<Scalars['Int']['output']>;
};

export type issues = {
    __typename?: 'issues';
    /**
     * The election date related to the issue.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * The identifier for the issue.
     * @deprecated
     */
    id: Scalars['String']['output'];
    /**
     * The short description or title for the issue.
     * @deprecated
     */
    issue: Scalars['String']['output'];
    /**
     * The office which the issue is related to. This value should align with that of the Results API.
     * @deprecated
     */
    office: Scalars['String']['output'];
    /**
     * The race which the issue is related to.
     * @deprecated
     */
    raceID?: Maybe<Scalars['String']['output']>;
    /**
     * A integer field used to order the issues for query results and/or for display purposes.
     * @deprecated
     */
    rank: Scalars['Int']['output'];
    /**
     * The site code for which this issue is tied to.
     * @deprecated
     */
    siteCode: Scalars['String']['output'];
    /**
     * The update date for the document.
     * @deprecated
     */
    updateDate?: Maybe<Scalars['DateTime']['output']>;
};

export type keyraces = {
    __typename?: 'keyraces';
    /**
     * The identifier.
     * @deprecated
     */
    dataId: Scalars['String']['output'];
    /**
     * The district (house) for the election.
     * @deprecated
     */
    district?: Maybe<Scalars['String']['output']>;
    /**
     * The date of the election.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * The office type.
     * @deprecated
     */
    office: Scalars['String']['output'];
    /**
     * The AP ID of this race (if it is a race).
     * @deprecated
     */
    raceId: Scalars['String']['output'];
    /**
     * A numerical ranking used to sort the display of key races, letting markets put the most important up front and group them logically.
     * @deprecated
     */
    rank: Scalars['Int']['output'];
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    results?: Maybe<Array<Maybe<Election>>>;
    /**
     * The seat (senate) for the election
     * @deprecated
     */
    seat?: Maybe<Scalars['String']['output']>;
    /**
     * A Gannett site code used to control display on the JOA markets.
     * @deprecated
     */
    siteCode: Scalars['String']['output'];
    /**
     * The race's state, if it is not a general index page.
     * @deprecated
     */
    state: Scalars['String']['output'];
    /** @deprecated  */
    timePublished?: Maybe<Scalars['DateTime']['output']>;
};

export type livepost = Asset & {
    __typename?: 'livepost';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId: Scalars['String']['output'];
    assetDocumentData: Scalars['String']['output'];
    assetGroup: BaseAssetGroup;
    /** Story summary suitable for text-to-speech conversion. */
    audioSummary: Scalars['String']['output'];
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    /** Query Complexity Cost: +10 */
    autofragment?: Maybe<Autofragment>;
    /** Will be true if AVP should be disabled, false otherwise */
    automatedVideoProgrammingDisabled: Scalars['Boolean']['output'];
    /** @deprecated Use automatedVideoProgrammingDisabled */
    automatedVideoProgrammingEnabled: Scalars['Boolean']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline: Scalars['String']['output'];
    /** @deprecated Use contentBody */
    body: TextBody;
    bookReviewPageURL: Scalars['String']['output'];
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline: Scalars['String']['output'];
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2: Scalars['String']['output'];
    canonicalURL: Scalars['String']['output'];
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId: Scalars['String']['output'];
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2: BaseClassificationV2;
    contentBody: Array<TextContentBody>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate: Scalars['String']['output'];
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate: Scalars['String']['output'];
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims: Array<BaseFactCheckClaims>;
    /** @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments. This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    fullText: Scalars['String']['output'];
    geoTag: BaseGeoTag;
    /** Headline for the asset, sourced from the headline field in presto */
    headline: Scalars['String']['output'];
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived: Scalars['Boolean']['output'];
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden: Scalars['Boolean']['output'];
    isEvergreen: Scalars['Boolean']['output'];
    keywords: Scalars['String']['output'];
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    /** @deprecated Assets created via Story Editor will no longer communicate this value in the future. */
    layoutPriorityAssetId: Scalars['String']['output'];
    links: BaseLinks;
    /** The friendly ID of the live posts' parent live story. */
    liveStoryID: Scalars['String']['output'];
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion: Scalars['Int']['output'];
    promoBrief: Scalars['String']['output'];
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication: Scalars['String']['output'];
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem: Scalars['String']['output'];
    publishUser: Scalars['String']['output'];
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled: Scalars['Boolean']['output'];
    /** @deprecated Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords: Scalars['String']['output'];
    seoTitle: Scalars['String']['output'];
    series: Scalars['String']['output'];
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline: Scalars['String']['output'];
    shortMobileURL: Scalars['String']['output'];
    /** Social headlines, tweet suggestions. */
    socialChatter: Scalars['String']['output'];
    source: Scalars['String']['output'];
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts: BaseSsts;
    statusName: Scalars['String']['output'];
    storyHighlights: Array<Scalars['String']['output']>;
    subHead: Scalars['String']['output'];
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title: Scalars['String']['output'];
    /** The total length of the contentBody list at this same level in the data, this number is unaffected by filtering. */
    totalContentBody: Scalars['Int']['output'];
    /** The total length of the contentSourceCodes list at this same level in the data, this number is unaffected by filtering. */
    totalContentSourceCodes: Scalars['Int']['output'];
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the factCheckClaims list at this same level in the data, this number is unaffected by filtering. */
    totalFactCheckClaims: Scalars['Int']['output'];
    /**
     * The total length of the fronts list at this same level in the data, this number is unaffected by filtering.
     * @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments. This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front.
     */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a "modified on" DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser: Scalars['String']['output'];
    /** @deprecated No longer used field soon to be deleted */
    versionHash: Scalars['String']['output'];
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate: Scalars['String']['output'];
};

export type livepostcontentBodyArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livepostcontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livepostcontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livepostfactCheckClaimsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livepostfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livepoststoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type liveposttagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livestory = Asset & {
    __typename?: 'livestory';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId: Scalars['String']['output'];
    assetDocumentData: Scalars['String']['output'];
    assetGroup: BaseAssetGroup;
    /** Story summary suitable for text-to-speech conversion. */
    audioSummary: Scalars['String']['output'];
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    /** Query Complexity Cost: +10 */
    autofragment?: Maybe<Autofragment>;
    /** Will be true if AVP should be disabled, false otherwise */
    automatedVideoProgrammingDisabled: Scalars['Boolean']['output'];
    /** @deprecated Use automatedVideoProgrammingDisabled */
    automatedVideoProgrammingEnabled: Scalars['Boolean']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline: Scalars['String']['output'];
    /** @deprecated Use contentBody */
    body: TextBody;
    bookReviewPageURL: Scalars['String']['output'];
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline: Scalars['String']['output'];
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2: Scalars['String']['output'];
    canonicalURL: Scalars['String']['output'];
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId: Scalars['String']['output'];
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2: BaseClassificationV2;
    contentBody: Array<TextContentBody>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate: Scalars['String']['output'];
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate: Scalars['String']['output'];
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims: Array<BaseFactCheckClaims>;
    /** @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments. This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    fullText: Scalars['String']['output'];
    geoTag: BaseGeoTag;
    /** Headline for the asset, sourced from the headline field in presto */
    headline: Scalars['String']['output'];
    /** For Live Coverage use only: Indicates whether posts for the live story should hide bylines. This field is ignored on types that are not liveStory. */
    hideBylines: Scalars['Boolean']['output'];
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived: Scalars['Boolean']['output'];
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden: Scalars['Boolean']['output'];
    isEvergreen: Scalars['Boolean']['output'];
    keywords: Scalars['String']['output'];
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    /** @deprecated Assets created via Story Editor will no longer communicate this value in the future. */
    layoutPriorityAssetId: Scalars['String']['output'];
    links: BaseLinks;
    /** Indicates the coverage status of the live story. */
    liveCoverageStatus: Scalars['String']['output'];
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion: Scalars['Int']['output'];
    promoBrief: Scalars['String']['output'];
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication: Scalars['String']['output'];
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem: Scalars['String']['output'];
    publishUser: Scalars['String']['output'];
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled: Scalars['Boolean']['output'];
    /** @deprecated Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords: Scalars['String']['output'];
    seoTitle: Scalars['String']['output'];
    series: Scalars['String']['output'];
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline: Scalars['String']['output'];
    shortMobileURL: Scalars['String']['output'];
    /** Social headlines, tweet suggestions. */
    socialChatter: Scalars['String']['output'];
    source: Scalars['String']['output'];
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts: BaseSsts;
    statusName: Scalars['String']['output'];
    storyHighlights: Array<Scalars['String']['output']>;
    subHead: Scalars['String']['output'];
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title: Scalars['String']['output'];
    /** The total length of the contentBody list at this same level in the data, this number is unaffected by filtering. */
    totalContentBody: Scalars['Int']['output'];
    /** The total length of the contentSourceCodes list at this same level in the data, this number is unaffected by filtering. */
    totalContentSourceCodes: Scalars['Int']['output'];
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the factCheckClaims list at this same level in the data, this number is unaffected by filtering. */
    totalFactCheckClaims: Scalars['Int']['output'];
    /**
     * The total length of the fronts list at this same level in the data, this number is unaffected by filtering.
     * @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments. This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front.
     */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a "modified on" DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser: Scalars['String']['output'];
    /** @deprecated No longer used field soon to be deleted */
    versionHash: Scalars['String']['output'];
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate: Scalars['String']['output'];
};

export type livestorycontentBodyArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livestorycontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livestorycontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livestoryfactCheckClaimsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livestoryfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livestorystoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type livestorytagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type localelectiondates = {
    __typename?: 'localelectiondates';
    /**
     * The date the election occurred on in the format YYYY-MM-DD.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /** @deprecated  */
    fipsCode: Scalars['String']['output'];
};

export type localresults = {
    __typename?: 'localresults';
    /** @deprecated  */
    candidates: Array<Maybe<localresults_candidates>>;
    /** @deprecated  */
    contestDescription?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    contestName: Scalars['String']['output'];
    /** @deprecated  */
    contestRank: Scalars['Int']['output'];
    /** @deprecated  */
    countyDescription?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    countyName: Scalars['String']['output'];
    /** @deprecated  */
    countyRank?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    countySEODescription?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    countySEOTitle?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    countyTitle?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    electionDate: Scalars['String']['output'];
    /** @deprecated  */
    electionDescription?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    electionSEODescription?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    electionSEOTitle?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    electionTitle: Scalars['String']['output'];
    /** @deprecated  */
    fipsCode: Scalars['String']['output'];
    /** @deprecated  */
    id?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    initialTimePublished?: Maybe<Scalars['DateTime']['output']>;
    /** @deprecated  */
    precinctsLabel?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    precinctsReporting?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    precinctsTotal: Scalars['Int']['output'];
    /** @deprecated  */
    siteCode: Scalars['String']['output'];
    /** @deprecated  */
    state: Scalars['String']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /**
     * The total length of the candidates list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalCandidates?: Maybe<Scalars['Int']['output']>;
};

export type localresultscandidatesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type localresults_candidates = {
    __typename?: 'localresults_candidates';
    /** @deprecated  */
    firstName: Scalars['String']['output'];
    /** @deprecated  */
    hideCandidate: Scalars['Boolean']['output'];
    /** @deprecated  */
    incumbent: Scalars['Boolean']['output'];
    /** @deprecated  */
    lastName: Scalars['String']['output'];
    /** @deprecated  */
    party: Scalars['String']['output'];
    /** @deprecated  */
    runoff: Scalars['Boolean']['output'];
    /** @deprecated  */
    votes: Scalars['Int']['output'];
    /** @deprecated  */
    winner: Scalars['Boolean']['output'];
};

export type oembed = Asset & {
    __typename?: 'oembed';
    URL?: Maybe<Scalars['String']['output']>;
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    assetId?: Maybe<Scalars['String']['output']>;
    authorName?: Maybe<Scalars['String']['output']>;
    authorURL?: Maybe<Scalars['String']['output']>;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    cacheAge?: Maybe<Scalars['Float']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    html?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    name?: Maybe<Scalars['String']['output']>;
    oembedType?: Maybe<Scalars['String']['output']>;
    originalType?: Maybe<Scalars['String']['output']>;
    originkey?: Maybe<Scalars['String']['output']>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    providerName?: Maybe<Scalars['String']['output']>;
    providerURL?: Maybe<Scalars['String']['output']>;
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    thumbnailHeight?: Maybe<Scalars['Float']['output']>;
    thumbnailURL?: Maybe<Scalars['String']['output']>;
    thumbnailWidth?: Maybe<Scalars['Float']['output']>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    version?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type oembedcontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type oembedcontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type oembedfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type oembedstoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type oembedtagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type pullquote = Asset & {
    __typename?: 'pullquote';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type pullquotecontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type pullquotecontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type pullquotefrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type pullquotestoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type pullquotetagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export enum raceTypeIDs {
    /**
     * CST Primary
     * @deprecated
     */
    C = 'C',
    /**
     * Democratic Primary
     * @deprecated
     */
    D = 'D',
    /**
     * Democratic Cacus
     * @deprecated
     */
    E = 'E',
    /**
     * General
     * @deprecated
     */
    G = 'G',
    /**
     * Libertarian Primary
     * @deprecated
     */
    L = 'L',
    /**
     * Unknown
     * @deprecated
     */
    O = 'O',
    /**
     * GOP Primary
     * @deprecated
     */
    R = 'R',
    /**
     * GOP Caucus
     * @deprecated
     */
    S = 'S',
    /**
     * Ranked Choice Voting General Election
     * @deprecated
     */
    V = 'V',
    /**
     * Open Primary or special use cases
     * @deprecated
     */
    X = 'X'
}

export type realclearpolitics = Election & {
    __typename?: 'realclearpolitics';
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /** @deprecated  */
    district?: Maybe<Scalars['String']['output']>;
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    main: Scalars['Boolean']['output'];
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    polls: Array<Maybe<realclearpolitics_polls>>;
    /** @deprecated  */
    state: Scalars['String']['output'];
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    title: Scalars['String']['output'];
    /**
     * The total length of the polls list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalPolls?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type realclearpoliticspollsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type realclearpolitics_polls = {
    __typename?: 'realclearpolitics_polls';
    /** @deprecated  */
    candidates: Array<Maybe<realclearpolitics_polls_candidates>>;
    /** @deprecated  */
    date?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    id: Scalars['String']['output'];
    /** @deprecated  */
    pollType: Scalars['String']['output'];
    /** @deprecated  */
    pollster: Scalars['String']['output'];
    /**
     * The total length of the candidates list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalCandidates?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    updated?: Maybe<Scalars['String']['output']>;
};

export type realclearpolitics_pollscandidatesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type realclearpolitics_polls_candidates = {
    __typename?: 'realclearpolitics_polls_candidates';
    /** @deprecated  */
    affiliation: Scalars['String']['output'];
    /** @deprecated  */
    name: Scalars['String']['output'];
    /** @deprecated  */
    value?: Maybe<Scalars['String']['output']>;
};

export type results = Election & {
    __typename?: 'results';
    /** @deprecated  */
    candidates: Array<Maybe<results_candidates>>;
    /** @deprecated  */
    county?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /** @deprecated  */
    description?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    district?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    districtType?: Maybe<Scalars['String']['output']>;
    /**
     * Estimated Expected Vote Percentage - an optional AP calculated value that may be used in addition to (or instead of) the ReportingPct value to determine the progress of the election on election night.
     * @deprecated
     */
    eevp?: Maybe<Scalars['Float']['output']>;
    /** @deprecated  */
    electTotal?: Maybe<Scalars['Int']['output']>;
    /**
     * The date the election occurred on in the format YYYY-MM-DD.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    fipsCode?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    incumbents?: Maybe<Array<Maybe<results_incumbents>>>;
    /** @deprecated  */
    lastUpdated: Scalars['DateTime']['output'];
    /** @deprecated  */
    level: Scalars['String']['output'];
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    officeName?: Maybe<Scalars['String']['output']>;
    /**
     * The party of the election only populated for single party elections, ie primaries
     * @deprecated
     */
    party?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    precinctsReporting: Scalars['Int']['output'];
    /** @deprecated  */
    precinctsReportingPct: Scalars['Float']['output'];
    /** @deprecated  */
    precinctsTotal: Scalars['Int']['output'];
    /**
     * The status of the race.
     * @deprecated
     */
    raceCallStatus?: Maybe<Scalars['String']['output']>;
    /**
     * The unique identifier of an AP race.
     * @deprecated
     */
    raceID: Scalars['String']['output'];
    /**
     * The same raceType as denoted by the raceTypeID but expanded into a phrase.
     * @deprecated
     */
    raceType: Scalars['String']['output'];
    /**
     * A single character denoting the raceType, D (Dem Primary), R (GOP Primary), G (General), E (Dem Caucus), S (GOP Caucus), 0 (unknown), L (Libertarian Primary), C (CST Primary), X (Open Primary or special use cases), V (Ranked Choice Voting General Election)
     * @deprecated
     */
    raceTypeID: Scalars['String']['output'];
    /**
     * Indicates if a race could proceed to ranked choice voting.
     * @deprecated
     */
    rankedChoice?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated  */
    seat?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    seatName?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    special?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated  */
    state: Scalars['String']['output'];
    /**
     * The tabulation status for the race.
     * @deprecated
     */
    tabulationStatus?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /**
     * The total length of the candidates list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalCandidates?: Maybe<Scalars['Int']['output']>;
    /**
     * The total length of the incumbents list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalIncumbents?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    type: Scalars['String']['output'];
    /**
     * Indicates that the race is uncontested. All the uncontested races are called at the same time, at poll close. If a state has two time zones, the uncontested races are called after the second poll close.
     * @deprecated
     */
    uncontested?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Indicates the required percentage of votes a candidate must have to be declared a winner by the election authority (for example, state). If this field is not present, the candidate with the highest vote total can win.
     * @deprecated
     */
    winThreshold?: Maybe<Scalars['Float']['output']>;
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type resultscandidatesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type resultsincumbentsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type results_candidates = {
    __typename?: 'results_candidates';
    /**
     * The aVotes (advance votes) count is made up of absentee votes, early poll votes, or a combination of these.
     * @deprecated
     */
    aVotes?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    candidateID?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    delegateCount?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    electWon?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    firstName?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    incumbent?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated  */
    lastName: Scalars['String']['output'];
    /**
     * The political party this candidate is affiliated with.
     * @deprecated
     */
    party: Scalars['String']['output'];
    /**
     * Populated only when ranked choice results are made available by the state, if applicable.
     * @deprecated
     */
    rankedChoiceVoting?: Maybe<Array<Maybe<results_candidates_rankedchoicevoting>>>;
    /**
     * The total length of the rankedChoiceVoting list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalRankedChoiceVoting?: Maybe<Scalars['Int']['output']>;
    /** @deprecated  */
    voteCount: Scalars['Int']['output'];
    /** @deprecated  */
    winner?: Maybe<Scalars['String']['output']>;
    /**
     * The date and time when the winner was declared.
     * @deprecated
     */
    winnerDateTime?: Maybe<Scalars['DateTime']['output']>;
};

export type results_candidatesrankedChoiceVotingArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type results_candidates_rankedchoicevoting = {
    __typename?: 'results_candidates_rankedchoicevoting';
    /**
     * Indicates if the candidate was eliminated during ranked choice processing.
     * @deprecated
     */
    eliminated?: Maybe<Scalars['Boolean']['output']>;
    /**
     * The number of votes allocated to the candidate AFTER the last round of ranked choice processing.
     * @deprecated
     */
    votes?: Maybe<Scalars['Int']['output']>;
};

export type results_incumbents = {
    __typename?: 'results_incumbents';
    /** @deprecated  */
    candidateID?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    firstName?: Maybe<Scalars['String']['output']>;
    /** @deprecated  */
    lastName?: Maybe<Scalars['String']['output']>;
    /**
     * The political party this incumbent is affiliated with.
     * @deprecated
     */
    party?: Maybe<Scalars['String']['output']>;
};

export type resultsmeta = {
    __typename?: 'resultsmeta';
    /**
     * The date the election occurred on in the format YYYY-MM-DD.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /** @deprecated  */
    level: Scalars['String']['output'];
    /** @deprecated  */
    office: Scalars['String']['output'];
    /**
     * The unique identifier of an AP race.
     * @deprecated
     */
    raceID: Scalars['String']['output'];
    /**
     * A single character denoting the raceType, D (Dem Primary), R (GOP Primary), G (General), E (Dem Caucus), S (GOP Caucus), 0
     * @deprecated
     */
    raceTypeID: Scalars['String']['output'];
    /** @deprecated  */
    state: Scalars['String']['output'];
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type resultsofficesummary = Election & {
    __typename?: 'resultsofficesummary';
    /** @deprecated  */
    dataId: Scalars['String']['output'];
    /** @deprecated  */
    electionDate: Scalars['String']['output'];
    /**
     * Query Complexity Cost: +100
     * @deprecated
     */
    explainers?: Maybe<Array<Maybe<Explainers>>>;
    /** @deprecated  */
    lastUpdated: Scalars['DateTime']['output'];
    /** @deprecated  */
    office: Scalars['String']['output'];
    /** @deprecated  */
    summary: resultsofficesummary_summary;
    /** @deprecated  */
    timeCreated: Scalars['DateTime']['output'];
    /** @deprecated  */
    timePublished: Scalars['DateTime']['output'];
    /** @deprecated  */
    type: Scalars['String']['output'];
    /** @deprecated  */
    year: Scalars['String']['output'];
};

export type resultsofficesummary_summary = {
    __typename?: 'resultsofficesummary_summary';
    /** @deprecated  */
    democrat: resultsofficesummary_summary_democrat;
    /** @deprecated  */
    noResults: Scalars['Int']['output'];
    /** @deprecated  */
    other: resultsofficesummary_summary_other;
    /** @deprecated  */
    republican: resultsofficesummary_summary_republican;
    /** @deprecated  */
    tieRunoff: Scalars['Int']['output'];
};

export type resultsofficesummary_summary_democrat = {
    __typename?: 'resultsofficesummary_summary_democrat';
    /** @deprecated  */
    lead: Scalars['Int']['output'];
    /** @deprecated  */
    notUp: Scalars['Int']['output'];
    /** @deprecated  */
    won: Scalars['Int']['output'];
};

export type resultsofficesummary_summary_other = {
    __typename?: 'resultsofficesummary_summary_other';
    /** @deprecated  */
    lead: Scalars['Int']['output'];
    /** @deprecated  */
    notUp: Scalars['Int']['output'];
    /** @deprecated  */
    won: Scalars['Int']['output'];
};

export type resultsofficesummary_summary_republican = {
    __typename?: 'resultsofficesummary_summary_republican';
    /** @deprecated  */
    lead: Scalars['Int']['output'];
    /** @deprecated  */
    notUp: Scalars['Int']['output'];
    /** @deprecated  */
    won: Scalars['Int']['output'];
};

export type text = Asset & {
    __typename?: 'text';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    /** Story summary suitable for text-to-speech conversion. */
    audioSummary: Scalars['String']['output'];
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    /** Query Complexity Cost: +10 */
    autofragment?: Maybe<Autofragment>;
    /** Will be true if AVP should be disabled, false otherwise */
    automatedVideoProgrammingDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use automatedVideoProgrammingDisabled */
    automatedVideoProgrammingEnabled?: Maybe<Scalars['Boolean']['output']>;
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use contentBody */
    body?: Maybe<TextBody>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentBody: Array<TextContentBody>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /**
     * This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front.
     * @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments. This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front.
     */
    fronts: Array<BaseFronts>;
    fullText?: Maybe<Scalars['String']['output']>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    /** @deprecated Assets created via Story Editor will no longer communicate this value in the future. */
    layoutPriorityAssetId?: Maybe<Scalars['String']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    seoTitle?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    shortMobileURL?: Maybe<Scalars['String']['output']>;
    /** Social headlines, tweet suggestions. */
    socialChatter?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    subHead?: Maybe<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contentBody list at this same level in the data, this number is unaffected by filtering. */
    totalContentBody: Scalars['Int']['output'];
    /** The total length of the contentSourceCodes list at this same level in the data, this number is unaffected by filtering. */
    totalContentSourceCodes: Scalars['Int']['output'];
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the factCheckClaims list at this same level in the data, this number is unaffected by filtering. */
    totalFactCheckClaims: Scalars['Int']['output'];
    /**
     * The total length of the fronts list at this same level in the data, this number is unaffected by filtering.
     * @deprecated The upcoming rewrite of Fronts handling no longer uses front assignments. This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front.
     */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a "modified on" DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** @deprecated No longer used field soon to be deleted */
    versionHash?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type textcontentBodyArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type textcontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type textcontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type textfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type textstoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type texttagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type video = Asset & {
    __typename?: 'video';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    brightcoveAccountId?: Maybe<Scalars['String']['output']>;
    brightcoveId?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    credit?: Maybe<Scalars['String']['output']>;
    duration?: Maybe<Scalars['Int']['output']>;
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    gannettTracking?: Maybe<Scalars['String']['output']>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    hlsURL?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    /** @deprecated This field is not accurate, the duration of the appropriate rendition (video.renditions[0].duration) should be used instead. */
    length?: Maybe<Scalars['Float']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    mp4URL?: Maybe<Scalars['String']['output']>;
    origin: Scalars['String']['output'];
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    renditions: Array<VideoRenditions>;
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    sourceBucketObject?: Maybe<Scalars['String']['output']>;
    sourceUrl?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    thumbnail?: Maybe<Scalars['String']['output']>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the renditions list at this same level in the data, this number is unaffected by filtering. */
    totalRenditions: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    videoStill?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type videocontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videocontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videofrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videorenditionsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videostoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videotagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videoplaylist = Asset & {
    __typename?: 'videoplaylist';
    adsEnabled: Scalars['Boolean']['output'];
    /** The unique identifier of the specific version of this asset used by Presto */
    aggregateId?: Maybe<Scalars['String']['output']>;
    assetDocumentData?: Maybe<Scalars['String']['output']>;
    assetGroup: BaseAssetGroup;
    authoringBehavior: Scalars['String']['output'];
    authoringTypeCode: Scalars['String']['output'];
    awsPath: Scalars['String']['output'];
    /** This helps determine the position of an asset in front backfill. See https://confluence.gannett.com/display/AUTHORING/Backfill+Date for more information. */
    backfillDate?: Maybe<Scalars['DateTime']['output']>;
    /** The big headline for a story, which is used for the 'Big Story' page layout. */
    bigHeadline?: Maybe<Scalars['String']['output']>;
    bookReviewPageURL?: Maybe<Scalars['String']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    byline?: Maybe<Scalars['String']['output']>;
    /** This is the preferred byline field. If it is empty you should fall back to contributors. For more details read https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline */
    bylineOverrideV2?: Maybe<Scalars['String']['output']>;
    canonicalURL?: Maybe<Scalars['String']['output']>;
    /**
     * DEPRECATED: Prefer classificationV2
     *
     * Query Complexity Cost: +10
     */
    classification?: Maybe<SSTS>;
    /** @deprecated Prefer the classification.Id */
    classificationId?: Maybe<Scalars['String']['output']>;
    /** The Assets classification details including section, subsection, topic and subtopic known as SSTS as well as the id of the SSTS object with additional metadata */
    classificationV2?: Maybe<BaseClassificationV2>;
    contentProtectionState: Scalars['String']['output'];
    /**
     * The hydrated contentSource item representing the contentSource keyed by the contentSourceCode field
     *
     * Query Complexity Cost: +10
     */
    contentSource?: Maybe<Contentsource>;
    contentSourceCode: Scalars['String']['output'];
    /** A list of Content Source Codes. */
    contentSourceCodes: Array<Scalars['String']['output']>;
    /**
     * The hydrated contentSources item representing the contentSources keyed by the contentSourceCodes field
     *
     * Query Complexity Cost: +25
     */
    contentSources: Array<Maybe<Contentsource>>;
    contributors: Array<BaseContributors>;
    createDate: Scalars['DateTime']['output'];
    createSystem: Scalars['String']['output'];
    createUser: Scalars['String']['output'];
    embargoDate?: Maybe<Scalars['String']['output']>;
    eventDate: Scalars['DateTime']['output'];
    excludeFromMobile: Scalars['Boolean']['output'];
    /** Query Complexity Cost: +10 */
    exclusion?: Maybe<Exclusion>;
    expirationDate?: Maybe<Scalars['String']['output']>;
    /** Information related to the International Fact-Checking Network (IFCN) program */
    factCheckClaims?: Maybe<Array<BaseFactCheckClaims>>;
    /** This is the front assignments for this asset, it does not mean the asset appears on the front but rather than it is eligible to appear on the front. */
    fronts: Array<BaseFronts>;
    geoTag?: Maybe<BaseGeoTag>;
    /** Headline for the asset, sourced from the headline field in presto */
    headline?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    /** The date this asset was first published. See https://confluence.gannett.com/display/AUTHORING/Initial+Published+Date for more information. */
    initialPublishDate?: Maybe<Scalars['DateTime']['output']>;
    /** Currently Archived flag */
    isArchived?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated This field is no longer in use. Instead use bylineOverrideV2. See https://confluence.gannett.com/display/APIS/Displaying+an+asset+byline for more details */
    isBylineOverridden?: Maybe<Scalars['Boolean']['output']>;
    isEvergreen: Scalars['Boolean']['output'];
    keywords?: Maybe<Scalars['String']['output']>;
    /** The last major published date of an asset, which is sourced from the contentQueueDate. See https://confluence.gannett.com/pages/viewpage.action?spaceKey=AUTHORING&title=Content+Queue+Date for more information. */
    lastMajorPublishedDate?: Maybe<Scalars['DateTime']['output']>;
    links?: Maybe<BaseLinks>;
    metrics?: Maybe<AssetMetrics>;
    pageURL: BasePageURL;
    /** The number of times an asset has been sent to print. */
    printVersion?: Maybe<Scalars['Int']['output']>;
    promoBrief?: Maybe<Scalars['String']['output']>;
    propertyDisplayName: Scalars['String']['output'];
    propertyId: Scalars['String']['output'];
    propertyName: Scalars['String']['output'];
    publication?: Maybe<Scalars['String']['output']>;
    /** The latest date this asset received a standard or major update (any non-quiet publish actions). See https://confluence.gannett.com/display/AUTHORING/Last+Published+Date for more information about when this field is updated. */
    publishDate: Scalars['DateTime']['output'];
    publishSystem?: Maybe<Scalars['String']['output']>;
    publishUser?: Maybe<Scalars['String']['output']>;
    /** When this field is true, this asset will not support reader comments. By default comments are enabled (and this field is false) */
    readerCommentsDisabled?: Maybe<Scalars['Boolean']['output']>;
    /** This field has been deprecated. Please use readerCommentsDisabled instead */
    readerCommentsEnabled: Scalars['Boolean']['output'];
    schemaVersion: Scalars['String']['output'];
    /** Search engine optimization keywords for the asset, sourced from the asset attribute seokeywords. */
    seoKeywords?: Maybe<Scalars['String']['output']>;
    series?: Maybe<Scalars['String']['output']>;
    /** Short headline for the asset, sourced from the Front Headline field in presto */
    shortHeadline?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    /** The preferred field is 'classification', data in this section may be stale. However not all types have available data in 'classification' quite yet. */
    ssts?: Maybe<BaseSsts>;
    statusName?: Maybe<Scalars['String']['output']>;
    storyHighlights: Array<Scalars['String']['output']>;
    tags: Array<BaseTags>;
    /** Title for the asset, sourced from the Page Title field in presto */
    title?: Maybe<Scalars['String']['output']>;
    /** The total length of the contributors list at this same level in the data, this number is unaffected by filtering. */
    totalContributors: Scalars['Int']['output'];
    /** The total length of the fronts list at this same level in the data, this number is unaffected by filtering. */
    totalFronts: Scalars['Int']['output'];
    /** The total length of the storyHighlights list at this same level in the data, this number is unaffected by filtering. */
    totalStoryHighlights: Scalars['Int']['output'];
    /** The total length of the tags list at this same level in the data, this number is unaffected by filtering. */
    totalTags: Scalars['Int']['output'];
    type: Scalars['String']['output'];
    /** The latest date this asset received any publish (normal, major, or quiet) or non-publish change (kind of like a `modified on` DB trigger). See https://confluence.gannett.com/display/AUTHORING/Updated+Date for more information about when this field is updated. */
    updateDate: Scalars['DateTime']['output'];
    updateUser?: Maybe<Scalars['String']['output']>;
    /** Indicates to the consuming platforms what experience to load for the user. */
    webTemplate?: Maybe<Scalars['String']['output']>;
};

export type videoplaylistcontentSourceCodesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videoplaylistcontributorsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videoplaylistfrontsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videoplayliststoryHighlightsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type videoplaylisttagsArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['ListSortParams']['input']>;
};

export type voterguideconfigs = {
    __typename?: 'voterguideconfigs';
    /**
     * The body asset and text for the voter guide.
     * @deprecated
     */
    bodyAsset?: Maybe<voterguideconfigs_bodyasset>;
    /**
     * A brief overview of the state's voter guide.
     * @deprecated
     */
    brief: Scalars['String']['output'];
    /**
     * The election date.
     * @deprecated
     */
    electionDate: Scalars['String']['output'];
    /**
     * The election year the voter guide is associated with.
     * @deprecated
     */
    electionYear: Scalars['String']['output'];
    /**
     * The identifier for the voter guide configs.
     * @deprecated
     */
    id: Scalars['String']['output'];
    /**
     * A list of important links to be displayed on the title card for the state's voter guide.
     * @deprecated
     */
    links?: Maybe<Array<Maybe<voterguideconfigs_links>>>;
    /**
     * Details pertaining to the next election for the voter guide.
     * @deprecated
     */
    nextElection?: Maybe<voterguideconfigs_nextelection>;
    /**
     * A list of registration deadlines pertaining to the state's election season.
     * @deprecated
     */
    registrationDeadlines?: Maybe<Array<Maybe<voterguideconfigs_registrationdeadlines>>>;
    /**
     * The site code for which this version of the voter guide is tied to.
     * @deprecated
     */
    siteCode: Scalars['String']['output'];
    /**
     * The state (abbreviation) which the voter guide is associated with.
     * @deprecated
     */
    state?: Maybe<Scalars['String']['output']>;
    /**
     * The title text for the voter guide.
     * @deprecated
     */
    title: Scalars['String']['output'];
    /**
     * The total length of the links list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalLinks?: Maybe<Scalars['Int']['output']>;
    /**
     * The total length of the registrationDeadlines list at this same level in the data, this number is unaffected by filtering.
     * @deprecated
     */
    totalRegistrationDeadlines?: Maybe<Scalars['Int']['output']>;
    /**
     * The update date for the document.
     * @deprecated
     */
    updateDate?: Maybe<Scalars['DateTime']['output']>;
};

export type voterguideconfigslinksArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type voterguideconfigsregistrationDeadlinesArgs = {
    filter?: InputMaybe<Scalars['ListFilter']['input']>;
    sort?: InputMaybe<Scalars['SortFilter']['input']>;
};

export type voterguideconfigs_bodyasset = {
    __typename?: 'voterguideconfigs_bodyasset';
    /**
     * The ID for the asset which contains the body text for the voter guide.
     * @deprecated
     */
    assetID: Scalars['String']['output'];
};

export type voterguideconfigs_links = {
    __typename?: 'voterguideconfigs_links';
    /**
     * The text to display on the link.
     * @deprecated
     */
    text: Scalars['String']['output'];
    /**
     * The URL for the link.
     * @deprecated
     */
    url: Scalars['String']['output'];
};

export type voterguideconfigs_nextelection = {
    __typename?: 'voterguideconfigs_nextelection';
    /**
     * The date of the next election.
     * @deprecated
     */
    date?: Maybe<Scalars['String']['output']>;
    /**
     * Text that explains the type of the next election.
     * @deprecated
     */
    electionType?: Maybe<Scalars['String']['output']>;
    /**
     * The office which the next election is related to.
     * @deprecated
     */
    office?: Maybe<Scalars['String']['output']>;
};

export type voterguideconfigs_registrationdeadlines = {
    __typename?: 'voterguideconfigs_registrationdeadlines';
    /**
     * The date pertaining to the registration detail.
     * @deprecated
     */
    date?: Maybe<Scalars['String']['output']>;
    /**
     * A supplemental text with registration information.
     * @deprecated
     */
    details?: Maybe<Scalars['String']['output']>;
    /**
     * The type of registration.
     * @deprecated
     */
    registrationType?: Maybe<Scalars['String']['output']>;
    /**
     * A supplemental URL with registration information.
     * @deprecated
     */
    url?: Maybe<Scalars['String']['output']>;
};

export class TypedDocumentString<TResult, TVariables> extends String implements DocumentTypeDecoration<TResult, TVariables> {
    __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

    constructor(
        private value: string,
        public __meta__?: Record<string, any>
    ) {
        super(value);
    }

    toString(): string & DocumentTypeDecoration<TResult, TVariables> {
        return this.value;
    }
}
