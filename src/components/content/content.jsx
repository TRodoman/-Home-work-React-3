import React from "react";
import foto from "../../img/foto.svg";

import "../content/content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="foto">
        <img src={foto} alt="rocket" />
      </div>
      <div className="text">
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
          viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed
          erat volutpat curabitur ornare in facilisi ornare. Vitae mollis sed
          feugiat ipsum condimentum eget magnis nulla at. Massa semper massa
          quisque tincidunt cursus. Elementum aliquet sed lectus facilisis massa
          in. Felis lectus egestas urna egestas arcu. Quam quisque volutpat
          lacus, eget. Quis risus, rhoncus nisi a, sit libero ut viverra. Magna
          quis hendrerit in cursus. Sed sed vitae ullamcorper dignissim
          tristique. Imperdiet vulputate blandit eu egestas massa a mauris
          libero. Mi turpis sagittis ac elit id sollicitudin urna. Velit neque
          neque vitae ultrices sagittis hendrerit in cursus. Sed egestas commodo
          mi sed. Aliquam at nunc, vestibulum viverra ipsum. Libero scelerisque
          tortor pellentesque ante ut sit nunc, vitae. ulla donec ultrices quis
          eu adipiscing habitant.
        </p>
      </div>
    </div>
  );
};

export default Content;
