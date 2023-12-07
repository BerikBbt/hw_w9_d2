let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTkyMDEzNSwianRpIjoiNjU3ZWJlOWYtYTQyYi00YzJlLWIxZDctNjdiNzZjMmViMTlhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImJlcmlra3ltIiwibmJmIjoxNzAxOTIwMTM1LCJleHAiOjE3MzM0NTYxMzV9.AwHETTGakhHYjepZMSTg_jfpR-UJFefAW1os5GUSa_s"
let userId = localStorage.getItem('uuid') 





export const serverCalls = {

    getShop: async () => {
       
        const response = await fetch(`https://flask-final-homework.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    }
}