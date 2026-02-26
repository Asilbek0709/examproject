"use client"

export default function Collabaration() {
    return(
        <>
            <section className="collabaration">
                <div className="partners">
                    <h1>Join these companies making business flow</h1>
                    <div className="partners-img">
                        <img src="/partner1.png" alt="" />
                        <img src="/partner2.png" alt="" />
                        <img src="/partner3.png" alt="" />
                        <img src="/partner4.png" alt="" />
                        <img src="/partner5.png" alt="" />
                        <img src="/partner6.png" alt="" />
                        <img src="/partner7.png" alt="" />
                    </div>
                </div>
                <div className="signatures">
                    <div className="signature-info">
                        <h1>Turn signatures into smart contracts</h1>
                        <p>Experience true contract magic by automating the entire contract process — from creating to signing and managing.</p>
                        <button className="product">Take our product tour</button>
                    </div>
                    <div className="signature-img">
                        <img src="/collab.png" alt="" />
                    </div>
                </div>
                <div className="products">
                    <div className="products-variations">
                        <div className="products-type">
                            <img src="/create.png" alt="" />
                            <p>Create</p>
                        </div>
                        <div className="products-type" id="active">
                            <img src="/collabarate.png" alt="" />
                            <p>Collaborate</p>
                        </div>
                        <div className="products-type">
                            <img src="/sign.png" alt="" />
                            <p>Sign</p>
                        </div>
                        <div className="products-type">
                            <img src="/manage.png" alt="" />
                            <p>Manage</p>
                        </div>
                        <div className="products-type">
                            <img src="/integrate.png" alt="" />
                            <p>Integrate</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="collaborate-product">
                        <div className="collab-info">
                            <h1>Collaborate</h1>
                            <p style={{marginBottom: "4rem", fontSize: "21px", maxWidth: "35rem"}}>Work together on one version in real-time. No hocus pocus.</p>
                            <div className="collab-adv">
                                <img src="/tick.png" alt="" />
                                <p>Edit live</p>
                            </div>
                            <div className="collab-adv">
                                <img src="/tick.png" alt="" />
                                <p>Make field interactive</p>
                            </div>
                            <div className="collab-adv">
                                <img src="/tick.png" alt="" />
                                <p>Stay one step ahead</p>                            
                            </div>
                            <button className="more">Learn more</button>
                        </div>
                        <div className="collab-img">
                            <img src="/collab2.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}