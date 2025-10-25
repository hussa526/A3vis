// Data extracted from the image - Monthly visits in millions
const data = {
    labels: [
        'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022',
        'Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023',
        'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023',
        'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024',
        'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024',
        'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025',
        'Jul 2025', 'Aug 2025'
    ],
    datasets: [
        {
            label: 'ChatGPT',
            data: [
                0, 0, 0, 0, 0, 1800, 2000, 1800, 1800, 1900, 2000, 2200,
                2400, 2600, 2800, 3000, 3200, 3600, 3800, 4000, 4200, 4400,
                4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6000, 5800,
                5600, 5400, 5200, 5000, 5200, 5400
            ],
            borderColor: '#DC3545',
            backgroundColor: 'rgba(220, 53, 69, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'Gemini',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 50, 120, 180, 220, 280, 320, 250,
                280, 260, 220, 250, 320, 380, 350, 380, 420, 480, 580, 680, 750
            ],
            borderColor: '#0D6EFD',
            backgroundColor: 'rgba(13, 110, 253, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'DeepSeek',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 10, 20, 30, 600, 450
            ],
            borderColor: '#198754',
            backgroundColor: 'rgba(25, 135, 84, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'Grok',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 10, 20, 30, 40,
                50, 80, 120, 140, 180, 210
            ],
            borderColor: '#6F42C1',
            backgroundColor: 'rgba(111, 66, 193, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'Character.ai',
            data: [
                0, 0, 0, 0, 0, 10, 30, 60, 90, 120, 150, 180,
                200, 250, 270, 180, 160, 180, 190, 200, 210, 190,
                180, 170, 180, 190, 180, 170, 180, 175, 170, 165,
                160, 165, 170, 175, 180, 180
            ],
            borderColor: '#FD7E14',
            backgroundColor: 'rgba(253, 126, 20, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'Claude',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
                55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
                105, 110, 120, 130, 140, 150
            ],
            borderColor: '#D63384',
            backgroundColor: 'rgba(214, 51, 132, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'Perplexity',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 5, 8, 10, 12,
                15, 18, 20, 22, 25, 28, 30, 35, 40, 45,
                50, 55, 60, 65, 70, 80, 90, 100, 110, 120,
                125, 130, 135, 140, 145, 150
            ],
            borderColor: '#0DCAF0',
            backgroundColor: 'rgba(13, 202, 240, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'Copilot',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 5, 8, 10,
                15, 20, 30, 40, 60, 80, 90, 96
            ],
            borderColor: '#FFC107',
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        }
    ]
};

// Chart configuration
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false // We're using a custom legend
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleFont: {
                    size: 14,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 13
                },
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y.toFixed(0) + 'M visits';
                        }
                        return label;
                    }
                }
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                        speed: 0.1
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy',
                },
                pan: {
                    enabled: true,
                    mode: 'xy',
                },
                limits: {
                    x: {min: 'original', max: 'original'},
                    y: {min: 0, max: 'original'}
                }
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                    autoSkip: true,
                    maxTicksLimit: 20
                },
                grid: {
                    display: false
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Monthly Visits (Millions)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                beginAtZero: true,
                max: 7000,
                ticks: {
                    callback: function(value) {
                        return value.toFixed(0) + 'M';
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            }
        }
    }
};

// Initialize chart
const ctx = document.getElementById('aiPlatformsChart').getContext('2d');
const myChart = new Chart(ctx, config);

// Reset zoom on double click
document.getElementById('aiPlatformsChart').addEventListener('dblclick', function() {
    myChart.resetZoom();
});

