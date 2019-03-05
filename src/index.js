import $ from "jquery";
import "jquery.easing";
import "./js/bootstrap";
import "./js/agency"
import "./js/jqBootstrapValidation";
import "./js/contact_me";
import "./css/agency.css";

$(function () {
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
});