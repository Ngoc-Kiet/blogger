import React from "react";

function Tag() {
  return (
    <div className="tag-second-wrapper-article mb-5">
      <div className="details_people-media1">
        <div className="face1">
            <img src="/face.png" alt=""/>
            <p className="share">Share Facebook</p>
        </div>
        <div className="tw1">
            <img src="/tw.png" alt=""/>
            <p className="share" >Share Facebook</p>
        </div>
        <div className="vc1">
            <img src="/Vector.png" alt=""/>
        </div>
    </div>
      <div className="tag-cate-article pt-4">
        Tags:
        <span className="item-tag-cate-article">product design</span>,
        <span className="item-tag-cate-article"> culture</span>
      </div>

      <hr width="100%" color="grey" />

      <div className="detail_people">
        <div className="img">
          <img src="/avatar.png" alt="" />
        </div>
        <div className="name">
          <div className="name-tag-article">
            <b>Mika MAtikainen </b>
            <span className="name_date">
              is a Design Founder & Advisor, Berlin School of Creative
              Leadership Executive MBA participant, Zippie advisor, Wolt
              co-founder, and Nordic Rose stakeholder.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tag;
