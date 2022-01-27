import React from "react";

function Methodologies({ name, subHeadlines }) {
  return (
    <>
      <h1 className="font-dark">Methodologies</h1>
      <section>
        <p className="font-dark">
          Basically the project uses the methodology of{" "}
          <span className="bold">single purpose classes</span>. Classes are
          defined with only <span className="bold">one attribute</span> inside.
          The main advantage of this methodology is that you know exactly how
          this class affects your styling by just reading the class name. You
          can use these classes anywhere and as often as you want.
        </p>
        <p className="font-dark gap-top-small">
          <span className="bold">Exception:</span> Typographical HTML tags and
          some special classes (e.g. input[type="file"]) are defined separately
          and break the rule of single purpose classes.
        </p>
      </section>
      <section id={subHeadlines[0]}>
        <h2 className="font-dark gap-top-large">{subHeadlines[0]}</h2>
        <p className="font-dark">
          Class names are written in lowercase and separated by dashes.
        </p>
        <div
          className={
            "code round-border-small dark-bg font-white gap-top-small gap-right-small inline-block"
          }
        >
          {".bold { font-weight: bold; }"}
        </div>
        <div
          className={
            "code round-border-small dark-bg font-white gap-top-small inline-block"
          }
        >
          {".flex-container { display: flex; }"}
        </div>
      </section>
      <section id={subHeadlines[1]}>
        <h2 className="font-dark gap-top-large">{subHeadlines[1]}</h2>
        <h3 className={"font-dark underlined"}>File and Folder Structure</h3>
        <p className="font-dark">
          File and Folder names are written in lowercase.
        </p>
        <div
          className={
            "code round-border-small dark-bg font-white gap-top-small gap-right-small inline-block line-height-20 gap-bottom"
          }
        >
          {"- app"}
          <br />
          {"-- javascript"}
          <br />
          {"--- application.js"}
        </div>
        <p className="font-dark">Partial files, e.g. forms, begin with "_".</p>
        <div
          className={
            "code round-border-small dark-bg font-white gap-top-small gap-right-small inline-block line-height-20 gap-bottom"
          }
        >
          {"_form.html.erb"}
        </div>
        <p className="font-dark">Model names are singular.</p>
        <div
          className={
            "code round-border-small dark-bg font-white gap-top-small gap-right-small inline-block line-height-20 gap-bottom"
          }
        >
          {"category.rb"}
        </div>
        <p className="font-dark">
          Product images start with article number and continue with article
          name.
        </p>
        <div
          className={
            "code round-border-small dark-bg font-white gap-top-small gap-right-small inline-block line-height-20 gap-bottom"
          }
        >
          {"0702032-fahrradhandschuhe-sommer.png"}
        </div>
        <p className="font-dark">
          Icon assets begin with "icon-" and the datatype has to be .svg.
        </p>
        <div
          className={
            "code round-border-small dark-bg font-white gap-top-small gap-right-small inline-block line-height-20 gap-bottom"
          }
        >
          {"icon-arrow-left.svg"}
        </div>

        <p className="font-dark">
          Ruby on Rails creates the entire directory structure for the
          application automatically. It knows where to find the things it needs
          within this directory, so{" "}
          <span className="bold uppercase">never</span> change the structure.
        </p>
        <img
          className="gap-top-small gap-bottom round-border-small"
          src={require("../assets/folder-structure.png")}
          alt="Folder Structure"
        />

        <h3 className={"font-dark underlined"}>Units</h3>
        <p className="font-dark">
          Font sizes, margin and padding are declared using pixels. Height and
          width is set with pixels or vh, vw.
        </p>
        <h3 className={"font-dark underlined gap-top-medium"}>Pre Processor</h3>
        <p className="font-dark">
          The CSS extension Sass is used. Partials are imported into the master
          stylesheet - this is the basic.scss file. The master stylesheet is
          compiled into app.css. To compile it, use the "npm run sass" command.
        </p>
        <h3 className={"font-dark underlined gap-top-medium"}>Comments</h3>
        <p className="font-dark">
          Don't use comments to explain your code. If you have to explain it,
          your code is of poor quality and it's time for refactoring. Comments
          should only be used for <span className="bold">WHY</span> you did
          something that way and not HOW.
        </p>
        <p className="font-dark gap-top-small">
          Use single-line comments and avoid multi-line comments.
        </p>
      </section>
    </>
  );
}

export default Methodologies;
