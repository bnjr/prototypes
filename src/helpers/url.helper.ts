import awsmobile from '../aws-exports'

export class UrlHelper {
  static BUCKET_NAME = awsmobile.aws_user_files_s3_bucket
  static REGION = awsmobile.aws_user_files_s3_bucket_region
  static RESOURCE_NAME = 's3'
  static BUCKET_BASE_URL = `https://${UrlHelper.BUCKET_NAME}.${UrlHelper.RESOURCE_NAME}.${UrlHelper.REGION}.amazonaws.com/`
  static WEBSITE_BASE_URL = 'https://ckoapp.com/'
  static getProviderProfileImageUrl(avatar: string): string {
    return (
      UrlHelper.BUCKET_BASE_URL + 'public/images/provider/profile/' + avatar
    )
  }

  static getOrganisationLogoUrl(logo: string): string {
    return (
      UrlHelper.BUCKET_BASE_URL + 'public/images/organisation/profile/' + logo
    )
  }

  static getOrganisationBannerUrl(banner: string): string {
    return (
      UrlHelper.BUCKET_BASE_URL + 'public/images/organisation/profile/' + banner
    )
  }

  static getOrganisationMediaUrl(media: string): string {
    return (
      UrlHelper.BUCKET_BASE_URL + 'public/images/organisation/media/' + media
    )
  }

  static getOrganisationMediaTNUrl(media: string): string {
    const tnFilename =
      media.split('.').shift() + '_tn' + '.' + media.split('.').pop()
    return (
      UrlHelper.BUCKET_BASE_URL +
      'public/images/organisation/media/' +
      tnFilename
    )
  }

  static getOrganisationSlugUrl(slug: string): string {
    return UrlHelper.WEBSITE_BASE_URL + slug
  }

  static getServiceIconUrl(name: string): string {
    return UrlHelper.BUCKET_BASE_URL + 'public/icons/services/' + name + '.svg'
  }
}
