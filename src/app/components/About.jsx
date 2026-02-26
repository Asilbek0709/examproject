"use client"

export default function About() {
    return(
        <>
            <section className="about">
                <div className="video">
                    
                </div>
                <div className="platform">
                    <h1>The complete platform for smart contracts</h1>
                    <div className="platform-container">
                        <div className="platform-card"></div>
                        <div className="platform-card">
                            <div className="card-img">
                                <img style={{width: "76px", height: "76px"}} src="/friction.png" alt="" />
                            </div>
                            <div className="card-info">
                                <h2>Forget friction</h2>
                                <p>Experience a truly digital contract process that makes creating, signing, and managing agreements quick, smooth, and effortless. Contracts without trickery.</p>
                                <button className="tour">Take the tour</button>
                            </div>
                        </div>
                        <div className="platform-card">
                            <div className="card-img">
                                <img src="/data.png" alt="" />
                            </div>
                            <div className="card-info">
                                <h2>Unleash data</h2>
                                <p>Get faster and smarter with automated processes and intelligent insights that unlock the data inside your agreements. Leave behind the limitations of paper and PDFs. Just like that.</p>
                                <button className="tour">Take the tour</button>
                            </div>
                        </div>
                        <div className="platform-card"></div>
                        <div className="platform-card"></div>
                        <div className="platform-card">
                            <div className="card-img">
                                <img src="/control.png" alt="" />
                            </div>
                            <div className="card-info">
                                <h2>Take control</h2>
                                <p>Know what’s happening in real-time with a complete overview of all your contracts, all in one place. It’s all the visibility and transparency you need, at your fingertips.</p>
                                <button className="tour">Take the tour</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="demo-card">
                    <h1>Believe your eyes</h1>
                    <p>Let us show you how to work smarter with contracts in Oneflow.</p>
                    <button className="demo-try">Get a demo</button>
                </div>
            </section>
        </>
    )
}