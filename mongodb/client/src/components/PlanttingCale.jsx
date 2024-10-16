import React from 'react';

const VegetableTable = () => {
  return (
    <div className="blog-table-wrap-2">
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Vegetable Name</th>
            <th>Growing Season - North India</th>
            <th>Growing Season - South India</th>
            <th>Germination Temp. (in °C)</th>
            <th>Sowing Method</th>
            <th>Sowing Depth (inches)</th>
            <th>Sowing Distance (inches/feet)</th>
            <th>Days to Maturity</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              id: 1,
              name: 'Apple Gourd',
              northSeason: 'Feb-Mar \n Jun-Jul',
              southSeason: 'Feb-Mar \n Jun-Jul',
              temp: '20-30',
              method: 'Direct',
              depth: '1',
              distance: 'Between Seeds - 12” \n Between rows - 12”',
              maturity: '70-80 days',
            },
            {
              id: 2,
              name: 'Beetroot',
              northSeason: 'Oct-Nov',
              southSeason: 'Aug-Nov',
              temp: '10-30',
              method: 'Direct',
              depth: '1',
              distance: 'Between Seeds - 4” \n Between Rows - 18”',
              maturity: '80-90 days',
            },
            {
              id: 3,
              name: 'Bitter Gourd',
              northSeason: 'Feb-Mar \n Jun-Jul',
              southSeason: 'Nov-Dec \n Dec-Jan \n Jun-Jul',
              temp: '20-30',
              method: 'Direct',
              depth: '0.5',
              distance: 'Between Seeds - 1 ft \n Between Rows - 4 ft',
              maturity: '55-60 days',
            },
            {
              id: 4,
              name: 'Bottle Gourd',
              northSeason: 'Feb-Mar \n Jun-Jul',
              southSeason: 'Nov-Dec \n Dec-Jan \n Jun-Jul',
              temp: '20-30',
              method: 'Direct',
              depth: '1-2',
              distance: 'Between Seeds - 1 ft \n Between Rows - 4 ft',
              maturity: '55-60 days',
            },
            {
              id: 5,
              name: 'Broccoli',
              northSeason: 'Aug-Sept',
              southSeason: 'Aug-Sept',
              temp: '21-23',
              method: 'Transplant',
              depth: '1.5',
              distance: 'Between Seeds - 1 ft \n Between Rows - 1.5 ft',
              maturity: '90-100 days',
            },
            {
              id: 6,
              name: 'Cabbage',
              northSeason: 'Sept-Oct',
              southSeason: 'Jun-Jul \n Oct-Nov',
              temp: '10-20',
              method: 'Transplant',
              depth: '0.25',
              distance: 'Between Seeds - 1 ft \n Between Rows - 1.5 ft',
              maturity: '90-100 days',
            },
            {
              id: 7,
              name: 'Capsicum',
              northSeason: 'Nov-Jan \n May-Jun',
              southSeason: 'Jan-Feb \n May-Jun \n Oct-Nov',
              temp: '15-25',
              method: 'Transplant',
              depth: '0.25-0.5',
              distance: 'Between Seeds - 1.5 ft. \n Between Rows - 1.5 ft.',
              maturity: '95-100 days',
            },
            {
              id: 8,
              name: 'Carrot',
              northSeason: 'Aug-Sept-Oct',
              southSeason: 'Aug-Nov',
              temp: '10-30',
              method: 'Direct',
              depth: '0.25',
              distance: 'Between Seeds - 2” \n Between Rows - 1.5 ft',
              maturity: '75-80 days',
            },
            {
              id: 9,
              name: 'Cucumber',
              northSeason: 'Feb-Mar \n Jun \n Jul',
              southSeason: 'Jun-Jul \n Sept-Oct \n Dec-Jan',
              temp: '16-32',
              method: 'Direct',
              depth: '0.5',
              distance: 'Between Rows - 12”',
              maturity: '50-70 days',
            },
            {
              id: 10,
              name: 'Beans',
              northSeason: 'Feb-Mar',
              southSeason: '-',
              temp: '16-30',
              method: 'Direct',
              depth: '1-1.5',
              distance: 'Between Seeds - 8” \n Between Rows - 18”',
              maturity: '45-50 days',
            },
            {
              id: 11,
              name: 'Lettuce',
              northSeason: 'Sept-Oct',
              southSeason: 'Oct-Dec',
              temp: '7-27',
              method: 'Direct/Transplant',
              depth: 'Surface Sow, cover lightly with soil',
              distance: 'Between Rows - 8”-12”',
              maturity: '45-55 days',
            },
            {
              id: 12,
              name: 'Okra',
              northSeason: 'Feb-Mar \n Jun-Jul',
              southSeason: 'Jan-Feb \n May-Jun \n Oct-Dec',
              temp: '20-32',
              method: 'Direct',
              depth: '0.5',
              distance: 'Between Seeds - 12” \n Between Rows - 18”',
              maturity: '45-50 days',
            },
            {
              id: 13,
              name: 'Onion',
              northSeason: 'May-Jun',
              southSeason: 'Mar-Apr \n May-Jun \n Sept-Oct',
              temp: '10-32',
              method: 'Transplant',
              depth: '0.25',
              distance: 'Between Seeds - 4 ft. \n Between Rows - 6 ft',
              maturity: '150-160 days',
            },
            {
              id: 14,
              name: 'Peas',
              northSeason: 'Sept-Oct-Nov',
              southSeason: 'Sept-Oct-Nov',
              temp: '10-22',
              method: 'Direct',
              depth: '1',
              distance: 'Between Seeds - 4” \n Between Rows - 12”',
              maturity: '55-60 days',
            },
            {
              id: 15,
              name: 'Radish',
              northSeason: 'Aug-Jan',
              southSeason: '-depends-',
              temp: '10-30',
              method: 'Direct',
              depth: '0.5',
              distance: 'Between Seeds - 2”-3” \n Between Rows - 12”',
              maturity: '40-45 days',
            },
            {
              id: 16,
              name: 'Spinach',
              northSeason: 'Sept-Nov \n Feb',
              southSeason: 'Sept-Oct-Nov',
              temp: '10-22',
              method: 'Direct',
              depth: '0.5',
              distance: 'Between Seeds - 3” \n Between Rows - 9”',
              maturity: '60 days',
            },
            {
              id: 17,
              name: 'Tomato',
              northSeason: 'Jun-Aug \n Nov-Dec',
              southSeason: 'Jan-Feb \n Jun-Jul \n Oct-Nov',
              temp: '20-30',
              method: 'Transplant',
              depth: '0.25',
              distance: 'Between Seeds - 1 ft \n Between Rows - 2.5 ft',
              maturity: '110-115 days',
            },
            {
              id: 18,
              name: 'Zucchini',
              northSeason: 'Apr \n Jun \n July',
              southSeason: 'Apr \n Jun \n July',
              temp: '16-27',
              method: 'Direct',
              depth: '1-2',
              distance: 'Between Seeds - 3 ft \n Between Rows - 4 ft',
              maturity: '55-70 days',
            },
          ].map((veg) => (
            <tr key={veg.id}>
              <td>{veg.id}</td>
              <td>{veg.name}</td>
              <td>{veg.northSeason.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}</td>
              <td>{veg.southSeason.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}</td>
              <td>{veg.temp}</td>
              <td>{veg.method}</td>
              <td>{veg.depth}</td>
              <td>{veg.distance.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}</td>
              <td>{veg.maturity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VegetableTable;
