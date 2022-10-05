import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgCode(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="code_svg__feather code_svg__feather-code"
            role="img"
            {...props}
        >
            <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
    );
}

SvgCode.propTypes = {
    title: PropTypes.string,
};
export default SvgCode;
