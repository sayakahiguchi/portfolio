import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgFilter(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="filter_svg__feather filter_svg__feather-filter"
            role="img"
            {...props}
        >
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
    );
}

SvgFilter.propTypes = {
    title: PropTypes.string,
};
export default SvgFilter;
