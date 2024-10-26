import React from 'react';
import './Immunization.css';

const immunizationData = [
  {
    age: 'Birth',
    vaccines: [
      { name: 'BCG', tamil: 'பி.சி.ஜி.' },
      { name: 'OPV Zero', tamil: 'போலியோ சொட்டு மருந்து' },
      { name: 'Hepatitis B-1', tamil: 'மஞ்சள் காமாலை ஊசி -B1' }
    ]
  },
  {
    age: '6 Weeks (வாரம்)',
    vaccines: [
      { name: 'DTwP1/DTaP1', tamil: 'முத்தடுப்பு ஊசி -1' },
      { name: 'IPV1', tamil: 'போலியோ தடுப்பு ஊசி 1' },
      { name: 'Hib-1', tamil: 'மூளைக்காய்ச்சல் ஊசி -1' },
      { name: 'Hepatitis B-2', tamil: 'மஞ்சள் காமாலை ஊசி -B2' },
      { name: 'Rotavirus 1', tamil: 'ரோட்டா வைரஸ் சொட்டு மருந்து 1' },
      { name: 'PCV 1', tamil: 'நிமோனியா (நியூமோகாக்கல் தடுப்பு ஊசி -1)' }
    ]
  },
  {
    age: '10 Weeks (வாரம்)',
    vaccines: [
      { name: 'DTwP2/DTaP2', tamil: 'முத்தடுப்பு ஊசி -2' },
      { name: 'IPV2', tamil: 'போலியோ தடுப்பு ஊசி 2' },
      { name: 'Hib-2', tamil: 'மூளைக்காய்ச்சல் ஊசி -2' },
      { name: 'Rotavirus 2', tamil: 'ரோட்டா வைரஸ் சொட்டு மருந்து 2' },
      { name: 'PCV 2', tamil: 'நிமோனியா (நியூமோகாக்கல் தடுப்பு ஊசி -2)' },
      { name: 'Hepatitis B-3', tamil: 'மஞ்சள் காமாலை ஊசி -B3' }
    ]
  },
  {
    age: '14 Weeks (வாரம்)',
    vaccines: [
      { name: 'DTwP3/DTaP3', tamil: 'முத்தடுப்பு ஊசி -3' },
      { name: 'IPV3', tamil: 'போலியோ தடுப்பு ஊசி 3' },
      { name: 'Hib-3', tamil: 'மூளைக்காய்ச்சல் ஊசி -3' },
      { name: 'Rotavirus 3', tamil: 'ரோட்டா வைரஸ் சொட்டு மருந்து 3' },
      { name: 'PCV 3', tamil: 'நிமோனியா (நியூமோகாக்கல் தடுப்பு ஊசி -3)' },
      { name: 'Hepatitis B-4', tamil: 'மஞ்சள் காமாலை ஊசி -B4' }
    ]
  },
  {
    age: '6 Months (மாதம்)',
    vaccines: [
      { name: 'OPV-1', tamil: 'போலியோ சொட்டு மருந்து 1' },
      { name: 'Flu-1', tamil: 'ஃபுளு காய்ச்சல் -1' }
    ]
  },
  {
    age: '7 Months (மாதம்)',
    vaccines: [
      { name: 'Flu-2', tamil: 'ஃபுளு காய்ச்சல் -2' }
    ]
  },
  {
    age: '> 6 Months (மாதம்)',
    vaccines: [
      { name: 'Typhoid', tamil: 'டைபாய்டு' }
    ]
  },
  {
    age: '9 Months (மாதம்)',
    vaccines: [
      { name: 'MMR1', tamil: 'மணல்வாரி அம்மை, பொன்னுக்கு வீங்கி, குமல்லா' },
      { name: 'OPV-2', tamil: 'போலியோ சொட்டு மருந்து 2' }
    ]
  },
  {
    age: '12 Months (மாதம்)',
    vaccines: [
      { name: 'Hepatitis A1', tamil: 'மஞ்சள் காமாலை A தடுப்பு ஊசி' }
    ]
  },
  {
    age: '15 Months (மாதம்)',
    vaccines: [
      { name: 'MMR-2', tamil: 'மணல்வாரி அம்மை, பொன்னுக்கு வீங்கி, குமல்லா 2' },
      { name: 'Varicella 1', tamil: 'சின்னம்மை 1' },
      { name: 'PCV Booster', tamil: 'நிமோனியா (நியூமோகாக்கல் பூஸ்டர் ஊசி)' }
    ]
  },
  {
    age: '16 to 18 Months (மாதம்)',
    vaccines: [
      { name: 'DTwP B1/DTaP B1', tamil: 'முத்தடுப்பு ஊசி B1' },
      { name: 'IPV B1', tamil: 'போலியோ தடுப்பு B1' },
      { name: 'Hib Booster', tamil: 'மூளைக்காய்ச்சல் பூஸ்டர் ஊசி' }
    ]
  },
  {
    age: '18 Months (மாதம்)',
    vaccines: [
      { name: 'Hepatitis A2', tamil: 'மஞ்சள் காமாலை A தடுப்பு ஊசி 2' },
      { name: 'Varicella 2', tamil: 'சின்னம்மை 2' },
    ]
  },
  {
    age: '4.5 Years (வருடம்)',
    vaccines: [
      { name: 'DTwP B2/DTaP B2', tamil: 'முத்தடுப்பு ஊசி B2' },
      { name: 'OPV 3', tamil: 'போலியோ சொட்டு மருந்து 3' },
      { name: 'MMR 3', tamil: 'மணல்வாரி அம்மை, பொன்னுக்கு வீங்கி, குமல்லா 3' }
    ]
  },
  {
    age: '10 to 12 Years (வருடம்)',
    vaccines: [
      { name: 'T-dap/T-d', tamil: 'முத்தடுப்பு ஊசி பூஸ்டர்' },
      { name: 'HPV (for girls only)', tamil: 'கர்ப்பப்பை புற்றுநோய் தடுப்பு ஊசி' }
    ]
  }
];

const Immunization = () => {
  return (
    <div id="imu">
      <h2 id="imu-h2">Immunization Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Vaccine Name (English)</th>
            <th>Vaccine Name (Tamil)</th>
          </tr>
        </thead>
        <tbody>
          {immunizationData.map((item, index) => (
            <React.Fragment key={index}>
              {item.vaccines.map((vaccine, idx) => (
                <tr key={idx}>
                  {idx === 0 && (
                    <td rowSpan={item.vaccines.length}>{item.age}</td>
                  )}
                  <td>{vaccine.name}</td>
                  <td>{vaccine.tamil}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Immunization;
