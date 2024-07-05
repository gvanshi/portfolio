// Function to toggle visibility of words
function toggleWords() {
    const words = document.querySelectorAll('.cd-word');
    let index = 0;
  
    setInterval(() => {
      words[index].classList.remove('is-visible');
      index = (index + 1) % words.length;
      words[index].classList.add('is-visible');
    }, 1000); 
  }
  
