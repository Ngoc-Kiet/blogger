import React from "react";

function Content() {
  return (
    <>
      <p className="information-detail-wrapper mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
        viverra.
      </p>
      <p className="information-detail-wrapper">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie,
        molestie lectus eu, semper lectus.
      </p>

      <h3 className="sub-title-content mt-3">Next on the pipeline</h3>

      <p className="information-detail-wrapper">
        Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
        dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
        quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos.
      </p>

      <p className="information-detail-wrapper">
        Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
        posuere maximus dui et fringilla.
      </p>

      <div className="d-flex justify-content-center">
        <img src="/article.png" alt="" />
      </div>
      <p className="note-article-img text-center">
        Image caption centered this way and I’ll make this a bit longer to
        indicate the amount of line-height.
      </p>

      <p className="information-detail-wrapper mt-4">
        Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
        posuere ligula.
      </p>

      <p className="information-detail-wrapper">
        In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo
        lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi
        efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere
        maximus dui et fringilla. Nulla non volutpat leo.
      </p>

      <p className="information-detail-wrapper mt-4">A list looks like this:</p>

      <ul
        className="information-detail-wrapper pl-3"
        style={{ listStyle: "disc" }}
      >
        <li>First item in the list</li>
        <li>
          Second item in the list lorem ipsum dolor sit amet nunc felis dolor
          lorem ipsum sit amet
        </li>
        <li>Third item in the list</li>
      </ul>

      <p className="information-detail-wrapper mt-5">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aliquam quis posuere ligula.
      </p>

      <p className="information-detail-wrapper mt-5">
        <div>Thanks for reading,</div>
        <div className="pb-3">Mika</div>
      </p>
    </>
  );
}

export default Content;
