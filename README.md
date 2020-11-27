# cluj-test-task

Task: Webapp that displays the positions over time of songs in the last 20 weekly Spotify charts.

Note: the word “chart” can be ambiguous. “Spotify chart” means a Spotify playlist of currently most popular songs. When used alone as a word, it means a visualisation technique (ex. line chart, bar chart).

Subtask 1 requirements:
Datasource: as shown in the screenshot, please go to https://spotifycharts.com/regional/global/weekly/latest and select Global / Weekly. The Download To CSV button shows the download url. Please note how the urls change when the dates are changed.


Please write a Python or Nodejs application that downloads the last 20 Spotify charts
Process the data in such a way that you can answer in O(1) the following query:
Input: 
a song title X
Output: 
a list of tuples <Date, position>, where each tuple indicates that at the specified date the song was at the specified position in the Spotify chart. We call this list “song history”. 

For example, in the screenshot above, Mood(feat. Iann dior) has position 1 and Lemonade (feat. Gunna, Don Toliver & NAV) has position 2


The output list is ordered by date
Save the processed data to MongoDB



Subtask 2 requirements:
Backend (Nodejs, Expressjs): Please write an http server that offers at least two endpoints:
Endpoint for retrieving the list of all songs present in at least one Spotify chart.
Endpoint for retrieving the “song history” of a given song

Frontend (React): Please display two main frontend elements:
A list of all songs (title, author) that are present in at least one Spotify chart
You can choose the most appropriate frontend element
A line chart:
X axis is Date, Y axis is position in the Spotify chart
Initially empty
Interaction: clicking on a song in the list will populate the line chart with a line that corresponds to the song history of that song
Clicking again on the song will remove that song
 

