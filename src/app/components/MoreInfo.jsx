"use client"

export default function MoreInfo() {
    return(
        <>
            <section className="moreInfo">
                <h1>More from Oneflow</h1>
                <div className="moreInfoContainer">
                    <div className="moreInfoCard">
                        <div className="moreInfoImg">
                            <img src="moreInfo1.png" alt="" />
                        </div>
                        <div className="moreInfoDesc">
                            <p>One platform. All departments</p>
                            <h1>Create, sign and manage any type of agreement you can think of</h1>
                            <button className="findMore">Find out more</button>
                        </div>
                    </div>
                    <div className="moreInfoCard">
                        <div className="moreInfoImg">
                            <img src="moreInfo2.png" alt="" />
                        </div>
                        <div className="moreInfoDesc">
                            <p>Why Oneflow</p>
                            <h1>Six reasons why teams around the world love the magic of flow</h1>
                            <button className="findMore">Find out more</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}