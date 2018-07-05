<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <title>Logo Wall</title>
        <link href="/styles.css" rel="stylesheet">
        <link rel="icon" type="image/png" href="favicon.png">
    </head>
    <body>
        <div class="bg-color">
            <div class="flex-container">
                <img src="/logowall.png" alt="Logowall">
                <h4>Logo wall</h1>
            </div>
            <h2>Make a beautiful logo wall in seconds</h2>
            <div id="powered-by">Logos by <a href='www.clearbit.com' target='blank'>Clearbit</a></div>
                    
            <form id="textareaForm">
                <textarea name='textarea' rows='3' cols='80' required placeholder='Type / paste in some websites on separate lines to get started...'></textarea>
                <br><input class="button" type="submit">
                <button class ="button" id="clearButton">Clear</button>
                <label class='checkbox'><input type="checkbox" id="greyscale" unchecked> Greyscale</label>
            </form>
        </div>
        
        <div id='logos' class='flex-container'></div>
        
        <script src="app.js"></script>       
    </body>
</html>
