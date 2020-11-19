```javascript
$('button').click() // clicks on button
- $('button').click(function(){
    // Does something when clicked
    $(this).hide()
}) 
```
# Starting
```javascript
$(document).ready(function(){
    // Do everything here.
})

// This is identical
$(function(){
    // Do everything here.
})
```

# Selecting
```javascript
$("*") // Selects all elements.
```

# Events
- hover can take two functions as argument. One for hover in, other for hover out.
### Attach multiple event handlers
![picture 1](images/57a5b68bedac5531e0308bc25b46577ef40795b61da5cb4259e10a2136654623.png)  

# Actions
### hide and show
- hide and show can take two arguments: time_in_milliseconds, callback_function.
![picture 2](images/13d7d399390825123a6a67ec06829601b82510eaaafa8706f9c3860467b0298a.png)  
- toggle
- fadeIn, fadeOut
- fadeTo
- fadeToggle

![picture 3](images/66a02e8d32ba53a701224987dbb833ea82ccb3466e504a9760202d9fcb0c7340.png)  

![picture 4](images/6ab9248496af64fa156d2c4f5c5f911c6710e5659d5411b4dba0810fdaa41211.png)  
- toggleClass

# Ajax
- Art of transferring data without interfering user experience.
![picture 5](images/a42c39671b78d9592c20882fa448802a63606003f49c59dd2712b2cf594f5b87.png)  


# Display image when loaded
```javascript
    var img = new Image(),
        x = document.getElementById("image");
    console.log(x);
    img.onload = function () {
        x.src = img.src;
    };

    img.src = "https://wallpaperaccess.com/download/hd-30100"
})
```

