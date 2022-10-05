import * as React from "react";
import { SVGProps } from "react";
import PropTypes from "prop-types";

function SvgLayout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns= "http://www.w3.org/2000/svg"
  viewBox = "0 0 24 24"

  stroke = "currentColor"
  strokeWidth = { 2}
  strokeLinecap = "round"
  strokeLinejoin = "round"
  className = "layout_svg__feather layout_svg__feather-layout"
  {...props }
    >
    <rect x={ 3 } y = { 3} width = { 18} height = { 18} rx = { 2} ry = { 2} />
      <path d="M3 9h18M9 21V9" />
        </svg>
  );
}

SvgLayout.propTypes = {
  title: PropTypes.string,
};
export default SvgLayout;
