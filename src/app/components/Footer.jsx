"use client"

export default function Footer() {
    return(
        <>
            <section className="footer">
                <div className="firstPart">
                    <div className="footerLogo">
                        <img src="/logo.png" alt="" />
                        <p>Headquarters: <br /> Hudiksvallsgatan 8 113 30 Stockholm, Sweden +46 8 517 297 70</p>
                    </div>
                    <div className="navigation">
                        <div className="navigation1">
                            <h6>Why Oneflow</h6>
                            <p>Product tour</p>
                            <p>Smart contracts</p>
                            <p>Built for scale</p>
                            <p>Integrations</p>
                            <p>Customer stories</p>
                        </div>
                        <div className="navigation2">
                            <h6>Learn</h6>
                            <p>FAQ</p>
                            <p>Onboarding</p>
                            <p>Developers</p>
                            <p>Help Center</p>
                            <p>E-sign guide</p>
                        </div>
                        <div className="navigation3">
                            <h6>Security</h6>
                            <p>Security Center</p>
                            <p>Reliability</p>
                            <p>Compliance</p>
                            <p>E-signing legality</p>
                            <p>GDPR</p>
                        </div>
                        <div className="navigation4">
                            <h6>More Oneflow</h6>
                            <h6>About us</h6>
                            <h6>Pricing</h6>
                            <h6>Partners</h6>
                            <h6>Blog</h6>
                            <h6>Careers</h6>
                            <h6>Contact</h6>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="secondPart">
                    <div className="getOneflow">
                        <div className="getOneflowInfo">
                            <h1>Get in the flow</h1>
                            <p>Send, track and sign your contracts free for the rest of your life. No trickery.</p>
                        </div>
                        <div className="getOneflowBtn">
                            <button className="findMore">Get Oneflow free</button>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="thirdPart">
                    <div className="footerPrivacy">
                        <p>Login</p>
                        <p>Privacy</p>
                        <p>Cookie Statement</p>
                        <img src="/globe.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}