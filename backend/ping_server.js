(async () => {
    try {
        console.log("Pinging Render Backend...");
        const res = await fetch('https://water-quality-backend-81er.onrender.com/api/contact/test', {
            method: 'GET'
        });
        
        // This endpoint doesn't exist but we should get a 404 from Express if the server is ALIVE, 
        // or a 502/network error if it's DEAD.
        console.log("Status Code:", res.status);
    } catch (e) {
        console.error("Fetch Error:", e.message);
    }
})();
