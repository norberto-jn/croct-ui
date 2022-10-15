import { HomeBannerContent } from "../types/HomeBannerContentType"

export class DataUtil {

    static getBanner(job): HomeBannerContent {
        switch (job) {
            case 'marketers': return (
                {
                    banner: {
                        title: 'Get ready to boost your conversion rate',
                        subtitle: 'Create personalized experiences and AB test your site content to optimize your results.',
                        cta: {
                            label: 'See how it works',
                            link: 'https://croct.com',
                        }
                    }
                }
            )
            case 'developers': return (
                {
                    banner: {
                        title: 'Default title developers',
                        subtitle: 'Default subtitle',
                        cta: {
                            label: 'Try now',
                            link: 'https://croct.com',
                        }
                    }
                }
            )
            case 'growth-hackers': return (
                {
                    banner: {
                        title: 'Default title growth-hacker',
                        subtitle: 'Default subtitle',
                        cta: {
                            label: 'Try now',
                            link: 'https://croct.com',
                        }
                    }
                }
            )
            default: return (
                {
                    banner: {
                        title: 'Default title other',
                        subtitle: 'Default subtitle other',
                        cta: {
                            label: 'Try now other',
                            link: 'https://croct.com',
                        }
                    }
                }
            )

        }
    };
}