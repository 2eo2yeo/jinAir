import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const generateLabels = () => {
    const labels = [];
    const startDate = new Date(2025, 3, 2); // 2025년 4월 2일
    const endDate = new Date(2025, 4, 2); // 2025년 5월 2일
    while (startDate <= endDate) {
      const day = String(startDate.getDate()).padStart(2, '0'); // 날짜 두 자릿수로
      const month = String(startDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
      labels.push(`${month}/${day}`);
      startDate.setDate(startDate.getDate() + 1); // 하루씩 증가
    }
    
    return labels;
  };
  
  const targetMax = 250000;
  const activedata= [198000, 184020, 168150, 80470, 118860, 74850, 203420, 249540, 121090, 188170, 142550, 167860, 200440, 167510, 109410, 148190, 58230, 229490, 58960, 144850, 108120, 71990, 180940, 92120, 150440, 98270, 198000, 180410, 171000, 173710, 214460]
  const backgroundData = activedata.map(val => targetMax - val);
  
  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: '실제 값',
        data: activedata,
        backgroundColor: 'rgb(211, 233, 46)',
        borderRadius: 10,
        borderSkipped: false,
        stack: 'stack1',
      },
      {
        label: '남은 영역',
        data: backgroundData,
        backgroundColor: 'rgb(239,239,239)',
        borderRadius: 0,
        borderSkipped: false,
        stack: 'stack1',
      },
    ],
  };

  const options = { 
  maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // 범례(label) 안 보이게
      },
      tooltip: {
        enabled: true, // 툴팁 사용 여부
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false, // 좌측의 색상 박스 제거
        callbacks: {
          label: function (context) {
            const rawValue = context.raw;
            if (typeof rawValue === 'number' && !isNaN(rawValue)) {
              return `💸 가격: ${rawValue.toLocaleString()}원`;
            } else {
              return '가격 정보 없음';
            }
          },
          title: function (context) {
            return `📅 날짜: ${context[0].label}`;
          }
        }
      }
    },
    scales: {
      y: {
        display: false, // y축 숫자 숨김
        grid: {
          display: false, // y축 가로 그리드선 숨김
        },
      },
      x: {
        grid: {
          display: false, 
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;