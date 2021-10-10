import React from "react";
import { Card } from "../../general";

function ListCustomArticle() {
  return (
    <div className="mt-5 list-custom-article">
      <hr width="100%" color="grey" />
      <div className="text-center title-list-article mt-5">
        What to read next
      </div>
      <div className="list-item-main-article">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <Card
                title="Here are some things you should know regarding how we work"
                img="img1"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <Card
                title="Granny gives everyone the finger, and other tips from OFFF Barcelona"
                img="img2"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <Card
                title="Hello world, or, in other words, why this blog exists"
                img="img3"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
              <Card
                title="Here are some things you should know regarding how we work"
                img="img4"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
              <Card
                title="Connecting artificial intelligence with digital product design"
                img="img5"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
              <Card
                title="It’s all about finding the perfect balance"
                img="img6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCustomArticle;
