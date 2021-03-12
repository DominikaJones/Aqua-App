//asking permission for notifications
if (!window.Notification) {
    console.log('Your browser does not support notifications :-(');
  } else {
        // permission previously granted
    if (Notification.permission === 'granted') {
      console.log('You have already granted us permission to send notifications!')
    }
    
    else {
        // request permission from user
        Notification.requestPermission().then(function(p) {
           if(p === 'granted') {
               console.log('Thank you for allowing us to send notifications!')
           } else {
               console.log('User blocked notifications.');
           }
        }).catch(function(err) {
            console.error(err);
        });
    }
  }

//notification mechanic????
function getSize() {
    var SIZE = prompt("Please enter the size of your tank in gallons.", "20");
    if (SIZE <= 5) {
        var notFrequencyFive = new Notification ('Hello!',{
          body: 'It is time to clean your tank'
        })
    }
    else if (SIZE <=10, SIZE>5){
      var notFrequencyTen = new Notification ('Hello!',{
        body: 'It is time to clean your tank'
      })
    }
    else if (SIZE<=15, SIZE>10){
      var notFrequencyFifteen = new Notification ('Hello!',{
        body: 'It is time to clean your tank'
      })
    }
    else if(SIZE<=20,SIZE>15){
      var notFrequencyTwenty = new Notification ('Hello!',{
        body: 'It is time to clean your tank'
      })
    }
  }
  