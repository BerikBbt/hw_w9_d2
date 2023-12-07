let accessToken = ""
let userId = localStorage.getItem('uuid') 





export const serverCalls = {

    getShop: async () => {
       
        const response = await fetch(`https://rangers134-shopas.onrender.com/api/shop`, {
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