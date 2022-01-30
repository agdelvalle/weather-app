export const getDetailedCurrentForcast = (data) => [
    {
        name:'predictability',
        value:data.predictability,
        unit:'N',
    },
    {
        name:'humidity',
        value:data.humidity,
        unit:'N',
    },
    {
        name:'wind',
        value:Math.round(data.wind_speed),
        unit:'Km/h',
    },
    {
        name:'air pressure',
        value:data.air_pressure,
        unit:'mb',
    },
    {
        name:'max temp',
        value:Math.round(data.max_temp).toFixed(2),
        unit:'C',
    },
    {
        name:'min temp',
        value:Math.round(data.min_temp).toFixed(2),
        unit:'C',
    },
]