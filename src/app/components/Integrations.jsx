"use client"

export default function Integrations() {
    return(
        <section className="integrations">
            <div className="integrations-info">
                <h1>Seamless integrations</h1>
                <p>Integrate your favorite tools with your contract workflow and work wonders.</p>
                <button className="integration">View all integrations</button>
            </div>
            <div className="integrations-img">
                <div className="IntegrationContainer">
                    <img src="/integration1.png" alt="" />
                    <img src="/integration2.png" alt="" />
                    <img src="/integration3.png" alt="" />
                </div>
                <div className="IntegrationContainer">
                    <img src="/integration4.png" alt="" />
                    <img src="/integration5.png" alt="" />
                    <img src="/integration6.png" alt="" />
                    <img src="/integration8.png" alt="" />
                </div>
                <div className="IntegrationContainer">
                    <img src="/integration9.png" alt="" />
                    <img src="/integration10.png" alt="" />
                    <img src="/integration11.png" alt="" />
                </div>
            </div>
        </section>
    )
}