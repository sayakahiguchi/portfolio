import * as React from 'react'
import { SVGProps } from 'react'
import PropTypes from 'prop-types'

function Blob(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      filter="blur(0px)"
      style={{
        opacity: 1,
        fill: 'inherit',
      }}
      role="img"
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{
              stopColor: '#dce1e3',
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: '#909493',
            }}
          />
        </linearGradient>
      </defs>
      <path id="blob" fill="url(#gradient)" style={{ opacity: 0.5 }}>
        <animate
          attributeName="d"
          dur="13s"
          repeatCount="indefinite"
          values="M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z;M433.0232,309.9192Q393.01281,369.83841,338.3352,406.40881Q283.6576,442.97921,221.7752,424.49281Q159.8928,406.0064,119.2384,358.9864Q78.584,311.9664,70.5304,246.7752Q62.4768,181.584,97.7552,114.4464Q133.0336,47.3088,206.208,64.61119Q279.3824,81.91359,342.208,100.8192Q405.0336,119.7248,439.0336,184.8624Q473.0336,250,433.0232,309.9192Z;M453.57191,328.53752Q437.08754,407.07503,364.57816,448.74386Q292.06878,490.41269,219.55628,459.1657Q147.04377,427.91871,108.99375,371.46874Q70.94372,315.01876,56.52814,244.52814Q42.11255,174.03752,86.02814,107.96874Q129.94372,41.89995,209.98749,31.84993Q290.03126,21.79991,346.01876,71.89683Q402.00625,121.99375,436.03126,185.99687Q470.05628,250,453.57191,328.53752Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M443.46373,322.92581Q424.06453,395.85162,352.29275,408.54192Q280.52096,421.23222,209.43547,432.55323Q138.34998,443.87423,108.93547,378.01696Q79.52096,312.15968,50.50966,239.62741Q21.49835,167.09515,80.22256,112.52096Q138.94677,57.94677,211.78709,57.03792Q284.62741,56.12906,342.97339,89.43146Q401.31936,122.73387,432.09114,186.36693Q462.86293,250,443.46373,322.92581Z;M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z"
        ></animate>
      </path>
      <path id="blob" fill="url(#gradient)" style={{ opacity: 0.5 }}>
        <animate
          attributeName="d"
          dur="13s"
          repeatCount="indefinite"
          values="M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z;M443.46373,322.92581Q424.06453,395.85162,352.29275,408.54192Q280.52096,421.23222,209.43547,432.55323Q138.34998,443.87423,108.93547,378.01696Q79.52096,312.15968,50.50966,239.62741Q21.49835,167.09515,80.22256,112.52096Q138.94677,57.94677,211.78709,57.03792Q284.62741,56.12906,342.97339,89.43146Q401.31936,122.73387,432.09114,186.36693Q462.86293,250,443.46373,322.92581Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M453.57191,328.53752Q437.08754,407.07503,364.57816,448.74386Q292.06878,490.41269,219.55628,459.1657Q147.04377,427.91871,108.99375,371.46874Q70.94372,315.01876,56.52814,244.52814Q42.11255,174.03752,86.02814,107.96874Q129.94372,41.89995,209.98749,31.84993Q290.03126,21.79991,346.01876,71.89683Q402.00625,121.99375,436.03126,185.99687Q470.05628,250,453.57191,328.53752Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z"
        ></animate>
      </path>
    </svg>
  )
}

Blob.propTypes = {
  title: PropTypes.string,
}
export default Blob