import axios from 'axios';

//call Azure AI Vision API Image Analysis 4.0 API
export default function  analyzeImage(imageUrl) {
    //Azure AI Vision API Image Analysis 4.0 API endpoint
    var uriBase = "https://ana-gen-image-azure.cognitiveservices.azure.com";
    //Azure AI Vision API Image Analysis 4.0 API key
    const subscriptionKey = process.env.AZURE_SUBSCRIPTION_KEY;
    //Request parameters.
   
    //Perform the REST API call.
    axios({
        method: 'post',
        url: `${uriBase}/computervision/imageanalysis:analyze?api-version=2023-04-01-preview&features=caption,read&language=en&gender-neutral-caption=False`,
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
        data: {
            "url": imageUrl,
        }
    })
        .then(function (response) {
        //Display the response in the page
        console.log(response.data);
        // Display the image.
        var sourceImageUrl = imageUrl;
        document.querySelector("#sourceImage").src = sourceImageUrl;
        // Show the caption and confidence level for each description.
        var caption = response.data.description.captions[0].text;
        var confidence = response.data.description.captions[0].confidence;
        document.querySelector("#caption").innerText = "Caption: " + caption;
        document.querySelector("#confidence").innerText = "Confidence: " + confidence;
        // Display categories
        var categories = response.data.categories;
        var categoriesDiv = document.querySelector("#categories");
        categoriesDiv.innerHTML = "";
        categories.forEach(function (category) {
            var name = category.name;
            var score = category.score;
            categoriesDiv.innerHTML += name + ": " + score + "<br/>";
        });
        // Display colors
        var colors = response.data.color;
        var colorsDiv = document.querySelector("#colors");
        colorsDiv.innerHTML = "";
        colors.dominantColors.forEach(function (color) {
            var colorHex = color;
            colorsDiv.innerHTML += "<div style='background-color:" + colorHex + ";width:50px;height:50px;float:left;'></div>";
        });
    })
        .catch(function (error) {
        // Catch and display errors
        console.log(error);
        window.alert("Error" + error);
    });
}

