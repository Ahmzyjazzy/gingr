import { Img, Section, Text, Link } from '@react-email/components'
import { facebookLink, instagramLink, linkedinLink, xLink } from './Links'

export default function SocialMediaLinks({ assetBaseUrl }: { assetBaseUrl?: string }) {
  return (
    <Section className="mt-4">
      <Text className="text-gray-600 text-center text-lg">
        Follow us on Social Media
      </Text>
      <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border={0}>
        <tr>
          <td style={{ padding: "0 8px" }}>
            <Link href={facebookLink} target="_blank">
              <Img src={`${assetBaseUrl}/static/facebook.svg`} alt="Facebook" width="24" height="24" />
            </Link>
          </td>
          <td style={{ padding: "0 8px" }}>
            <Link href={instagramLink} target="_blank">
              <Img src={`${assetBaseUrl}/static/Instagram.svg`} alt="Instagram" width="24" height="24" />
            </Link>
          </td>
          <td style={{ padding: "0 8px" }}>
            <Link href={xLink} target="_blank">
              <Img src={`${assetBaseUrl}/static/Twitter-X.svg`} alt="Twitter" width="24" height="24" />
            </Link>
          </td>
          <td style={{ padding: "0 8px" }}>
            <Link href={linkedinLink} target="_blank">
              <Img src={`${assetBaseUrl}/static/Linkedin.svg`} alt="LinkedIn" width="24" height="24" />
            </Link>
          </td>
        </tr>
      </table>
    </Section>
  )
}
