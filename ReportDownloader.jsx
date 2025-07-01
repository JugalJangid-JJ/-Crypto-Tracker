import React from 'react';

const ReportDownloader = ({ prices }) => {
  const downloadReport = () => {
    const blob = new Blob([
      'Crypto,Price\n' + Object.entries(prices).map(([k, v]) => `${k},${v}`).join('\n')
    ], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'crypto_report.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return <button onClick={downloadReport}>Download Report</button>;
};