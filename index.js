const axios = require('axios');

let lastScore = 209475


// URL של ה-API
const API_URL = 'https://scores.clap.co.il/api/score/9dc8b75b-3a82-4673-a261-fd86de098eb1';
// const LAST_SCORE_API_URL = 'https://scores.clap.co.il/api/score/9dc8b75b-3a82-4673-a261-fd86de098eb1';

// גוף הבקשה

// כותרות (אם נדרשות)
const headers = {
  'Content-Type': 'application/json',
};



// פונקציה לביצוע בקשת PUT
async function makePutRequest() {
  lastScore = lastScore + 360;
  console.log('Request:', {
    "score": lastScore,
    "completion_time": 0,
    "gamename": "osherad_users_01"
  });

  try {
    const response = await axios.put(API_URL, {
      "score": lastScore,
        "completion_time": 0,
        "gamename": "osherad_users_01"
    }, { headers });
    console.log('Response:', response.data);

    console.log(lastScore)
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }

  const randomInterval = Math.floor( 3 * 60 * 1000);
  setTimeout(makePutRequest, randomInterval + Math.random());
  console.log(`${new Date().toLocaleTimeString()} Next request in ${Math.round(randomInterval / 1000 / 60)} min.`);
}

// קריאה ראשונית
makePutRequest();

// תזמון קריאה כל חצי שעה (30 דקות = 1800000 מילישניות)
