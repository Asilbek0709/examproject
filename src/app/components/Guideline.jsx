"use client"

export default function Guideline() {
    return(
        <>
            <section className="guideLine">
                <div className="guideLine-intro">
                    <h1>And for our next trick…</h1>
                    <button className="blog">View our blog</button>
                </div>
                <div className="guideSpecial">
                    <div className="guideInfoSpecial">
                        <button className="typeSpecial" style={{marginBottom: "6rem"}}>Article</button>
                        <h1>A Basic Guide on E-signatures and What Makes Them Legally Binding</h1>
                        <p style={{marginTop: "5rem"}}>E-signature | 11 min read</p>
                    </div>
                    <div className="guideImg">
                        <img src="/guide1.png" alt="" />
                    </div>
                </div>
                <div className="guideContainer">
                    <div className="guide" id="first">
                        <div className="guideImg">
                            <img src="/guide2.png" alt="" />
                        </div>
                        <div className="guideInfo" >
                            <button className="type" id="btn1">Guide</button>
                            <h1>29 documents you can sign online in 2021</h1>
                            <p>Contract automation | 18 min read</p>
                        </div>
                    </div>
                    <div className="guide" id="second">
                        <div className="guideInfo" id="second" >
                            <button className="type" id="btn2">Customer-story</button>
                            <h1>Sweco</h1>
                            <button className="story" id="btn3">Read Full Story</button>
                        </div>
                    </div>
                    <div className="guide" id="third">
                        <div className="guideImg">
                            <img src="/guide3.png" alt="" />
                        </div> 
                        <div className="guideInfo">
                            <button className="type" id="fourth">Article</button>
                            <h1>Master digital sales: How to close deals when you’re not allowed to shake hands</h1>
                            <p>Sales | 6 min read</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}