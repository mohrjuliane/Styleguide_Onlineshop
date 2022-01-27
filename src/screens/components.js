import React from "react";
import SelectButton from "../components/buttons/selectbutton";
import SelectButtonRound from "../components/buttons/selectbuttonround";
import PrimaryButton from "../components/buttons/primarybutton";
import Table from "../components/tablecomponent/table";
import TableRow from "../components/tablecomponent/tablerow";
import StatusButton from "../components/buttons/statusbutton";
import SwitchButton from "../components/buttons/switchbutton";
import AddIcon from "../assets/icons/icon-add.svg";
import AddToBasketIcon from "../assets/icons/icon-add-to-basket.svg";
import EditIcon from "../assets/icons/icon-edit.svg";
import ArrowRightIcon from "../assets/icons/icon-arrow-right.svg";
import InputForm from "../components/form/inputform";
import PaymentsCard from "../components/completecomponents/paymentscard";
import ProductCard from "../components/completecomponents/productcard";
import ProductCardBasket from "../components/completecomponents/productcardbasket";

function Components({ name, subHeadlines }) {
  return (
    <>
      <h1 className="font-dark">Components</h1>
      <section id={subHeadlines[0]}>
        <h2 className="font-dark gap-top-large">Button</h2>
        <h3 className={"font-dark underlined gap-top-medium"}>
          {"Primary Buttons"}
        </h3>
        <Table>
          <TableRow>
            <PrimaryButton
              content={"Anmelden"}
              color={"yellow"}
              fontColor={"dark"}
            />
            <div
              className={
                "code round-border-small dark-bg font-white line-height-20 gap-top-medium"
              }
            >
              {
                "<%= render partial: \"buttons/primarybutton\", locals: {content: \"Anmelden\", color: \"yellow\", fontColor: \"dark\"} %>"
              }
            </div>
            <p className={"font-dark gap-top-medium"}>
              Used for actions where a POST or DELETE request is called, e.g.
              "Sign Up" or "Send"
            </p>
          </TableRow>
          <div className="separator gap-top-medium"></div>
          <TableRow>
            <PrimaryButton
              content={"Deaktivieren"}
              color={"red"}
              fontColor={"white"}
            />
            <div
              className={
                "code round-border-small dark-bg font-white line-height-20 gap-top-medium"
              }
            >
              {
                "<%= render partial: \"buttons/primarybutton\", locals: {content: \"Deaktivieren\", color: \"red\", fontColor: \"white\"} %>"
              }
            </div>
            <p className={"font-dark gap-top-medium"}>
              Use the red highlight button only for critical actions like
              deactivating a product.
            </p>
          </TableRow>
        </Table>
        <h3 className={"font-dark underlined gap-top-large"}>
          Unclickable Status Buttons
        </h3>
        <Table>
          <TableRow>
            <StatusButton content={"Warteschlange"} color={"grey"} />
            <div
              className={
                "code round-border-small dark-bg font-white line-height-20 gap-top-medium"
              }
            >
              {
                "<%= render partial: \"buttons/statusbutton\", locals: {color: \"grey\", content: \"Warteschlange\" %>"
              }
            </div>
            <p className={"font-dark gap-top-medium"}>
              Tells the user that the centralised buying waits for enough
              articles to place the order
            </p>
          </TableRow>
          <div className="separator gap-top-medium"></div>
          <TableRow>
            <StatusButton content={"Bestellt"} color={"green"} />
            <div
              className={
                "code round-border-small dark-bg font-white line-height-20 gap-top-medium"
              }
            >
              {
                "<%= render partial: \"buttons/statusbutton\", locals: {color: \"green\", content: \"Bestellt\" %>"
              }
            </div>
            <p className={"font-dark gap-top-medium"}>
              Tells the user that the centralised buying has already been done
            </p>
          </TableRow>
          <div className="separator gap-top-medium"></div>
          <TableRow>
            <StatusButton content={"Storniert"} color={"red"} />
            <div
              className={
                "code round-border-small dark-bg font-white line-height-20 gap-top-medium"
              }
            >
              {
                "<%= render partial: \"buttons/statusbutton\", locals: {color: \"red\", content: \"Storniert\" %>"
              }
            </div>
            <p className={"font-dark gap-top-medium"}>
              Tells the user that the centralised buying had been cancelled
            </p>
          </TableRow>
        </Table>
        <h3 className={"font-dark underlined gap-top-large"}>
          Clickable Buttons with State
        </h3>
        <Table>
          <TableRow>
            <SelectButton content={"Langarmshirt"} />
            <div
              className={
                "code round-border-small dark-bg font-white gap-top-medium line-height-20"
              }
            >
              {
              "<%= render partial: \"buttons/selectbutton\", locals: {option: option, selected: is_selected?(currentSelected, option[:name])} %>"              
              }
            </div>
            <p className={"font-dark gap-top-medium"}>
              Used for forms and filter menues to select the desired value.
              <br />
              An option represents one of the available select options of an input select form.
            </p>
          </TableRow>
          <div className="separator gap-top-medium"></div>
          <TableRow>
            <SelectButtonRound content={"XL"} />
            <div
              className={
                "code round-border-small dark-bg font-white gap-top-medium line-height-20"
              }
            >
              {
              "<%= render partial: \"buttons/selectbutton\", locals: {option: option, selected: is_selected?(currentSelected, option[:name])} %>"              
              }
            </div>
            <p className={"font-dark gap-top-medium"}>
              Used for forms and filter menues to select the desired value where
              the content consists only of one or two letters. <br />
              An option represents one of the available select options of an input select form.
            </p>
            <br />
          </TableRow>
          <div className="separator gap-top-medium gap-bottom"></div>
          <TableRow>
            <SwitchButton />
            <div
              className={
                "code round-border-small dark-bg font-white line-height-20"
              }
            >
              {'<% if order.paid %>'}
              <br />
              &emsp;
              {'<button class="pointer width-65 light-bg height-30 circle-border switchbutton-border">'}
              <br />
              &emsp; &emsp;
              {'<%= image_tag("icons/icon-paid.svg", class: "height-30 translate-left-18", alt: "paid") %>'}
              <br />
              &emsp;
              {'</button>'}
              <br />
              {'<% else %>'}
              <br />
              &emsp;
              {'<button class="pointer width-65 dark-bg height-30 circle-border switchbutton-border">'}
              <br />
              &emsp; &emsp;
              {'<%= image_tag("icons/icon-not-paid.svg", class: "height-30 translate-right-18", alt: "Not paid") %>'}
              <br />
              &emsp;
              {'</button>'}
              <br />
              {'<% end %>'}
            </div>
            <p className={"font-dark gap-top-medium"}>
              Used for updating the paid status of an order to paid or unpaid.
            </p>
          </TableRow>
        </Table>
        <h3 className={"font-dark underlined gap-top-large"}>
          Clickable Round SVG-Icons{" "}
        </h3>
        <p className={"font-dark gap-bottom"}>
          All icons are placed within a round and yellow circle. They are
          clickable and used for smaller actions like linking to the
          edit-product-page or new-product-page.
        </p>
        <Table>
          <TableRow>
            <img
              src={AddToBasketIcon}
              alt="Icon add to basket"
              className="size-icon"
            />
            <div className={"code round-border-small dark-bg font-white"}>
              {'<%= image_tag("icons/icon-add-to-basket.svg", class: "size-icon", alt: "Icon add to basket") %>'}
            </div>
            <p className={"font-dark gap-top-medium"}>
              Adding products to basket
            </p>
          </TableRow>
          <div className="separator gap-top-medium gap-bottom"></div>
          <TableRow>
            <img src={AddIcon} alt="Icon add" className="size-icon" />
            <div className={"code round-border-small dark-bg font-white"}>
              {'<%= image_tag("icons/icon-add.svg", class: "size-icon", alt: "Icon add") %>'}
            </div>
            <p className={"font-dark gap-top-medium"}>
              Creating a new product or producer
            </p>
          </TableRow>
          <div className="separator gap-top-medium gap-bottom"></div>
          <TableRow>
            <img
              src={ArrowRightIcon}
              alt="Icon arrow right"
              className="size-icon"
            />
            <div className={"code round-border-small dark-bg font-white"}>
              {'<%= image_tag("icons/icon-arrow-right.svg", class: "size-icon", alt: "Icon arrow right") %>'}
            </div>
            <p className={"font-dark gap-top-medium"}>
              Redirecting to detail page
            </p>
          </TableRow>
          <div className="separator gap-top-medium gap-bottom"></div>
          <TableRow>
            <img src={EditIcon} alt="Icon edit" className="size-icon" />
            <div className={"code round-border-small dark-bg font-white"}>
              {'<%= image_tag("icons/icon-edit.svg", class: "size-icon", alt: "Icon edit") %>'}
            </div>
            <p className={"font-dark gap-top-medium"}>
              Editing a product or producer
            </p>
          </TableRow>
        </Table>
        <div className="flex-container row max-width-80 pointer"></div>
      </section>
      <section id={subHeadlines[1]}>
        <h2 className="font-dark gap-top-large">{"Complete Components"}</h2>
        <h3 className={"font-dark underlined gap-top-large"}>Payments Card</h3>
        <div
          className={
            "gap-20-flex flex-container column gap- code dark-bg round-border-small width-400 gap-bottom"
          }
        >
          <PaymentsCard
            name="Ben Huber"
            amount="127,00 €"
            dueto={"03.12.2021"}
            active={true}
            orderid={1}
          />
        </div>
        <div
          className={
            "code dark-bg round-border-small fit-width gap-bottom font-white line-height-20"
          }
        >
          {'<%= render partial: "components/paymentscard", locals: {order: order} %>'}     
        </div>
        <h3 className={"font-dark underlined gap-top-large"}>Product Card</h3>
        <div
          className={
            "gap-20-flex flex-container column code dark-bg round-border-small fit-width gap-bottom"
          }
        >
          <ProductCard
            articlenumber="0702007"
            manufacturer="Sportful"
            productname="Radhose Mädels ohne Träger"
            price="70,00 €"
          />
        </div>

        <div
          className={
            "code dark-bg round-border-small fit-width gap-bottom font-white line-height-20"
          }
        >
        {'<%= render partial: "components/productcard", locals: {product: product} %>'}
        </div>

        <h3 className={"font-dark underlined gap-top-large"}>
          Product Card - Basket
        </h3>
        <div
          className={
            "gap-20-flex flex-container column code dark-bg round-border-small fit-width gap-bottom"
          }
        >
          <ProductCardBasket
            articlenumber="0702007"
            manufacturer="Sportful"
            productname="Radhose Mädels ohne Träger"
            price="70,00 €"
            quantity="1"
            size="M"
          />
        </div>
        <div
          className={
            "code dark-bg round-border-small fit-width gap-bottom font-white line-height-20"
          }
        >
        {'<%= render partial: "components/productcard_basket", locals: {productbasket: item} %>'}
        </div>
      </section>
      <section id={subHeadlines[2]}>
        <h2 className="font-dark gap-top-large">{"Heading & Paragraph"}</h2>
        <p className="font-dark gap-bottom">
          The Bikefriends Onlineshop uses the Typography "PaytoneOne Regular"
          for <span className="code">{"<h1>"}</span> and{" "}
          <span className="code">{"<h2>"}</span>. The font-family of the third
          headline and paragraph is "Raleway". The font-color varies dependent
          on the background-color of the current section.
        </p>
        <div className="flex-container column">
          <div className="flex-container row">
            <div className="width-100 padding-30 dark-bg round-border-top-left">
              <h1>Headline 1 - light</h1>
              <p className="code round-border-small light-bg font-dark">
                {"<h1>Text</h1>"}
              </p>
            </div>
            <div className="width-100 padding-30 light-bg round-border-top-right">
              <h1 className="font-dark">Headline 1 - dark</h1>
              <p className="code round-border-small dark-bg">
                {"<h1 class='font-dark'>Text</h1>"}
              </p>
            </div>
          </div>
          <div className="flex-container row">
            <div className="width-100 padding-30 dark-bg">
              <h2>Headline 2 - light</h2>
              <p className="code round-border-small light-bg font-dark">
                {"<h2>Text</h2>"}
              </p>
            </div>
            <div className="width-100 padding-30 light-bg">
              <h2 className="font-dark">Headline 2 - dark</h2>
              <p className="code round-border-small dark-bg">
                {"<h2 class='font-dark'>Text</h2>"}
              </p>
            </div>
          </div>
          <div className="flex-container row">
            <div className="width-100 padding-30 dark-bg">
              <h3>Headline 3 - light</h3>
              <p className="code round-border-small light-bg font-dark">
                {"<h3>Text</h3>"}
              </p>
            </div>
            <div className="width-100 padding-30 light-bg">
              <h3 className="font-dark">Headline 3 - dark</h3>
              <p className="code round-border-small dark-bg">
                {"<h3 class='font-dark'>Text</h3>"}
              </p>
            </div>
          </div>
          <div className="flex-container row">
            <div className="width-100 padding-30 dark-bg round-border-bottom-left">
              <p>Paragraph - light</p>
              <p className="code round-border-small light-bg font-dark gap-bottom gap-top-small">
                {"<p>Text</p>"}
              </p>
            </div>
            <div className="width-100 padding-30 light-bg round-border-bottom-right">
              <p className="font-dark">Paragraph - dark</p>
              <p className="code round-border-small dark-bg gap-bottom gap-top-small">
                {"<p class='font-dark'>Text</p>"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id={subHeadlines[3]}>
        <h2 className="font-dark gap-top-large">{"List"}</h2>
        <h3 className="font-dark underlined">Element</h3>
        <div className="code dark-bg round-border-small fit-width gap-bottom">
          <ul className="gap-left-small">
            <li className="font-white">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </li>
            <li className="font-white">
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </li>
            <li className="font-white">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </li>
          </ul>
        </div>
        <h3 className="font-dark underlined">Usage</h3>
        <div
          className={
            "code round-border-small dark-bg font-white fit-width line-height-20 gap-bottom"
          }
        >
          {'<ul class="max-width-300 gap-left-small">'} <br /> &emsp;
          {'<li class="font-white">Listelement 1</li>'} <br /> &emsp;
          {'<li class="font-white">Listelement 2</li>'} <br /> &emsp;
          {'<li class="font-white">Listelement 3</li>'} <br />
          {"</ul>"} <br />
        </div>
      </section>
      <section id={subHeadlines[4]}>
        <h2 className="font-dark gap-top-large">{"Forms"}</h2>
        <h3 className="font-dark underlined">Element</h3>
        <div className="code dark-bg round-border-small fit-width gap-bottom">
          <InputForm label="Artikelname" type="text" />
          <InputForm label="Artikelnummer" type="text" />
        </div>
        <h3 className="font-dark underlined">Usage</h3>
        <div
          className={
            "code round-border-small dark-bg font-white fit-width line-height-20"
          }
        >
          {"<label>"}
          <br />
          &emsp;
          {'<p class="font-white margin-top-bottom-8">Artikelname</p>'}
          <br />
          &emsp;
          {
            '<input class="no-outline padding-8 raleway font-white none-bg inputfield-border border-8 border-box min-width-300" type="text" name="Artikelname">'
          }
          <br />
          {"</label>"}
          <br />
          <br />
          {"<label>"}
          <br />
          &emsp;
          {'<p class="font-white margin-top-bottom-8">Artikelnummer</p>'}
          <br />
          &emsp;
          {
            '<input class="no-outline padding-8 raleway font-white none-bg inputfield-border border-8 border-box min-width-300" type="text" name="Artikelnummer">'
          }
          <br />
          {"</label>"}
        </div>
      </section>
    </>
  );
}

export default Components;
