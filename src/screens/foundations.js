import React from "react";

function Foundations({ name, subHeadlines }) {
  return (
    <>
      <h1 className="font-dark">Foundations</h1>
      <section id={subHeadlines[0]}>
        <h2 className="font-dark gap-top-large">{subHeadlines[0]}</h2>
        <img
          className="gap-top-small gap-bottom max-width-200"
          src={require("../assets/logo_ws.png")}
          alt="Folder Structure"
        />
        <p className="font-dark">
          This is the one and only logo version you are allowed to use. You are
          not allowed to invert or change the colors. The size of the logo has a
          minimum width of 90px and take care to use a minimum margin of 30px to
          another object.
        </p>
      </section>
      <section id={subHeadlines[1]}>
        <h2 className="font-dark gap-top-large">{subHeadlines[1]}</h2>
        <p className="font-dark gap-bottom">
          The main colors are yellow, dark grey and white. The colors red and
          green are especially used to define a status, e.g. order cancelled,
          bill paid.
        </p>
        <div className="flex-container row flex-wrap gap-20-flex">
          <div className="min-width-300 padding-30 yellow-bg round-border-small">
            <h2 className="font-dark">#E4E233</h2>
            <p className="code round-border-small light-bg font-dark">
              {"Primary color: $yellow"}
            </p>
          </div>
          <div className="min-width-300 padding-30 dark-bg round-border-small">
            <h2>#383737</h2>
            <p className="code round-border-small light-bg font-dark">
              {"Primary color: $dark-grey"}
            </p>
          </div>
          <div className="min-width-300 padding-30 light-bg round-border-small">
            <h2 className="font-dark">#F5F5F5</h2>
            <p className="code round-border-small dark-bg">
              {"Primary color: $white"}
            </p>
          </div>
          <div className="min-width-300 padding-30 grey-bg round-border-small">
            <h2>#939393</h2>
            <p className="code round-border-small light-bg font-dark">
              {"Secondary color: $grey"}
            </p>
          </div>
          <div className="min-width-300 padding-30 green-bg round-border-small">
            <h2>#74B72E</h2>
            <p className="code round-border-small light-bg font-dark">
              {"Utility color: $dark-green"}
            </p>
          </div>
          <div className="min-width-300 padding-30 red-bg round-border-small">
            <h2>#E46858</h2>
            <p className="code round-border-small light-bg font-dark">
              {"Utility color: $red"}
            </p>
          </div>
        </div>
      </section>
      <section id={subHeadlines[2]}>
        <h2 className="font-dark gap-top-large">{subHeadlines[2]}</h2>
        <p className="font-dark gap-bottom">
          The online shop uses only 2 fonts -{" "}
          <span className="bold">"Paytone One"</span> and{" "}
          <span className="bold">"Raleway"</span>. Paytone One is a sans serif
          font and has a casual look with some curves. The slanted strokes
          complete the overall look of the font. Raleway is an elegant and
          geometric sans serif font. The sharp and functional appearance makes
          the font very readable.
        </p>
        <h3 className="font-dark underlined">PaytoneOne font stack</h3>
        <p className="font-dark gap-top-medium paytone font-medium">
          a b c d e f g h i j k l m n o p q r s t u v w x y z
        </p>
        <p className="font-dark gap-top-small uppercase paytone font-medium">
          a b c d e f g h i j k l m n o p q r s t u v w x y z
        </p>
        <p className="font-dark gap-top-small paytone font-medium">
          0 1 2 3 4 5 6 7 8 9
        </p>
        <p className="code dark-bg round-border-small inline-block gap-top-medium">
          font-family: "PaytoneOne";
        </p>

        <h3 className="font-dark underlined gap-top-medium">
          Raleway font stack
        </h3>
        <p className="font-dark gap-top-medium raleway font-medium">
          a b c d e f g h i j k l m n o p q r s t u v w x y z
        </p>
        <p className="font-dark gap-top-small uppercase raleway font-medium">
          a b c d e f g h i j k l m n o p q r s t u v w x y z
        </p>
        <p className="font-dark gap-top-small raleway font-medium">
          0 1 2 3 4 5 6 7 8 9
        </p>
        <p className="code dark-bg round-border-small inline-block gap-top-medium">
          font-family: "Raleway";
        </p>
      </section>
    </>
  );
}

export default Foundations;
