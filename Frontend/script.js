document.getElementById('checkButton').addEventListener('click', function() {
    var newsText = document.getElementById('newsText').value;
    
    var isFake = detectFakeNews(newsText);
  
    if (isFake) {
      document.getElementById('result').innerText = 'This news might be fake.';
    } else {
      document.getElementById('result').innerText = 'This news seems legitimate.';
    }
  });
  
  function detectFakeNews(newsText) {
    //API to be added
    return newsText.length > 100 ? false : true;
  }
  