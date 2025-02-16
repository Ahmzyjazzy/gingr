import { Img, Section, Text, Link } from '@react-email/components';
import { appstoreDownloadLink, playstoreDownloadLink } from '.';

export default function DownloadAppButtons({ assetBaseUrl }: { assetBaseUrl?: string }) {
    return (
        <Section className="my-4">
            <Text className="text-gray-600 text-center text-lg">
                Download the Ginger App
            </Text>
            <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border={0}>
                <tr>
                    <td>
                        <Link href={playstoreDownloadLink} target="_blank">
                            <Img
                                src={`${assetBaseUrl}/static/playstore.svg`}
                                alt="Google Play"
                                width="150"
                                style={{ display: "block", marginRight: "8px" }}
                            />
                        </Link>
                    </td>
                    <td>
                        <Link href={appstoreDownloadLink} target="_blank">
                            <Img
                                src={`${assetBaseUrl}/static/appstore.svg`}
                                alt="App Store"
                                width="150"
                                style={{ display: "block" }}
                            />
                        </Link>
                    </td>
                </tr>
            </table>
        </Section>
    )
}
