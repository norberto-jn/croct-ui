import { Slot } from "@croct/plug-react"
import { Component, ReactNode } from "react"
import styles from '../../styles/main.module.css'
import { HomeBannerContent } from "../types/HomeBannerContentType"

export default class OnboardingPage extends Component<HomeBannerContent> {
    constructor(props) {
        super(props)
    }
    render(): ReactNode {
        return (
            <Slot id="home-banner" initial={null}>
                {(props: HomeBannerContent | null) => (
                    props === null
                        ? '✨ Personalizing...'
                        : (
                            <div className={styles.l_section_home}>
                                <div className={styles.l_profile}></div>
                                <div className={styles.l_box_info}>
                                    <div className={styles.l_box_text}>
                                        <strong>{this.props.banner.title}</strong>
                                        <p>{this.props.banner.subtitle}</p>
                                    </div>
                                    <div>
                                        <button className={`${styles.c_item_filters_btn} ${styles.c_item_filters_btn_animation}`} onClick={() => window.location.assign(`${this.props.banner.cta.link}`)}>{this.props.banner.cta.label}</button>
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </Slot>
        )
    }
}