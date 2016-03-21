Original Plan:

Enter buttons take you to main page

API for tide chart or tide times.
  User types in location and will show the next hide tide and low tide.

Add a current location, zip code.

Show fish in the area
  What the eat
  Season for the fish
  Some of it Habitats
    Temp
    surface or bottom
    night or day
  Size limits

Results of attempting the above:
  -Could not find a quality working API for any of the conditions.
  -I had a lot of trouble finding a quality API that had a large enough amount of data or had a clear syntax for the query. I did find a few that I liked but constantly ran into issues getting the "cross origin" error.
  -The only API the had enough data to use was wikipedia so I used that but struggled with converting the WikiText to plain text.

I wanted to add more APIs so I attempted to add Onename's api but could not get it to grab the object due to cross origin issues.

I also wanted to try and put an ajax call in an ajax call even if they were unrelated and the second one was not dependent on the first. I decided to add a Giphy when the user clicked a button at the bottom of the page but only after the first AJAX call.
