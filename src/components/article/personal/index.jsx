import React from "react";

function Personal() {
  return (
    <>
      <div className="details_people">
        <div className="detail_people">
          <div className="img">
            <img src="/avatar.png" alt="" />
          </div>
          <div className="name">
            <div className="name_mika">Mika MAtikainen</div>
            <div className="name_date">Apr 15, 2020 · 4 min read</div>
          </div>
        </div>
        <div className="details_people-media">
          <div className="face">
            <img src="/face.png" alt="" />
          </div>
          <div className="tw">
            <img src="/tw.png" alt="" />
          </div>
          <div className="vc">
            <img src="/vector.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Personal;
