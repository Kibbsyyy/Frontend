// Counting the characters

tweet = prompt("Compose a tweet");
tweetCount = tweet.length;
tweetLeft = (140 - tweetCount);
alert("You have written " + tweetCount + " characters and you have " + tweetLeft + " characters left.")

// Slicng the tweet to 140 characters

alert(tweet.slice(0, 140))
