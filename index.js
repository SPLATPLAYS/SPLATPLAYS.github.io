// Load and parse the visitorCount.json file
fetch('visitorCount.json')
    .then(response => response.json())
    .then(data => {
        // Increment the count
        data.count++;
        
        // Update the JSON file with the new count
        fetch('https://api.github.com/repos/SPLATPLAYS/SPLATPLAYS.github.io/contents/visitorCount.json', {
            method: 'PUT',
            headers: {
                'Authorization': 'token ${{ secrets.pat }}', // Use the secret here
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "message": "Update visitor count",
                "content": btoa(JSON.stringify(data)),
                "sha": data.sha
            })
        });
        
        // Display the updated count on your webpage
        console.log(`Visitor count: ${data.count}`);
    });
