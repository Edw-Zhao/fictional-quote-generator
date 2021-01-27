$(document).ready(function(){
  let quotes = [
    {quote: 'The world isn’t split into good people and Death Eaters.',
    char: '- Sirius Black',
    media: 'Harry Potter and the Prisoner of Azkaban, written by J.K. Rowling'},
    {quote: 'Never tell me the odds!',
     char: '- Han Solo',
     media: 'Star Wars: The Empire Strikes Back, directed by George Lucas'},
    {quote: 'All we have to decide is what to do with the time that is given to us.',
     char: '- Gandalf the Grey',
     media: 'The Lord of the Rings: The Fellowship of the Ring, written by J.R.R. Tolkien'},
    {quote: 'I can do this all day.',
     char: '- Steve Rogers',
     media: 'Captain America: The First Avenger, directed by Joe Johnston'},
    {quote: 'How lucky I am to have something that makes saying goodbye so hard.',
     char: '- Winnie the Pooh',
     media: 'Winnie the Pooh, written by A. A. Milne'},
    {quote: 'Do. Or do not. There is no try.',
     char: '- Yoda',
     media: 'Star Wars: The Empire Strikes Back, directed by George Lucas'},
    {quote: 'Do. Or do not. There is no try.',
     char: '- Yoda',
     media: 'Star Wars: The Empire Strikes Back, directed by George Lucas'},
    {quote: 'Life happens wherever you are, whether you make it or not.',
     char: '- Uncle Iroh',
     media: 'Avatar: The Last Airbender, directed by Michael Dante DiMartino'},
    {quote: 'To Infinity And Beyond!',
     char: '- Buzz Lightyear',
     media: 'Toy Story, directed by John Lasseter'},
    {quote: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
     char: '- Albus Dumbledore',
     media: "Harry Potter and the Philosopher's stone, written by J.K. Rowling"},
    {quote: 'Stay gold, Ponyboy, stay gold.',
     char: '- Johnny Cade',
     media: "The Outsiders, written by S.E. Hinton"},
    {quote: 'With great power comes great responsibility.',
     char: '- Uncle Ben',
     media: "Spider-Man, directed by Sam Raimi"},
    {quote: 'It’s no use going back to yesterday, because I was a different person then.',
     char: '- Alice',
     media: "Alice in Wonderland, written by Lewis Carroll"},
    {quote: 'Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.',
     char: '- Tyrion Lannister',
     media: "A Game of Thrones, written by George R. R. Martin"},
    {quote: "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.",
     char: '- Mewtwo',
     media: "Pokémon: The First Movie, directed by Kunihiko Yuyama"},
    {quote: 'If you are good at something, never do it for free.',
     char: '- Joker',
     media: "The Dark Knight, directed by Christopher Nolan"},
    {quote: 'If you are good at something, never do it for free.',
     char: '- Joker',
     media: "The Dark Knight, directed by Christopher Nolan"},
    {quote: "Everyone fails at who they're supposed to be, Thor. The measure of a person, of a hero, is how well they succeed at being who they are.",
     char: '- Frigga',
     media: "Avengers: Endgame, directed by Anthony Russo and Joseph Russo"},
    {quote: "Sometimes when you sacrifice something precious, you're not really losing it. You're just passing it on to someone else.",
     char: '- The Captain',
     media: "The Five People You Meet in Heaven, written by Mitch Albom"},
    {quote: "I don't want to survive. I want to live!",
     char: '- Captain McCrea',
     media: "WALL·E, written by Andrew Stanton"},
  ];
  
  let colors = [
    {c:'#076658', g:'#F5F5F5'}, 
    {c:'#661b07', g:'#D3D3D3'},
    {c:'#300766', g:'#DCDCDC'},
    {c:'#DEC11C', g:'#282828'},
    {c:'#ff1d58', g:'#585858'},
    {c:'#9bc400', g:'#686868'},
    {c:'#e1b382', g:'#383838'},
    {c:'#39a0ca', g:'#404040'},
    {c:'#ff8928', g:'#505050'},
    {c:'#4f5f76', g:'#E0E0E0'},
    {c:'#3d0432', g:'#F0F0F0'},
    {c:'#fce5e4', g:'#696969'},
    {c:'#080808', g:'#F0F0F0'},
    {c:'#85807A', g:'#DCDCDC'},
    {c:'#cd4249', g:'#D3D3D3'},
    {c:'#a16ce8', g:'#D3D3D3'}
  ];
  
  btnLimit = () => {
    $('#new-quote').prop('disabled', true)
    setTimeout(function(){
    $('#new-quote').prop('disabled', false);
    }, 500);
  }
  
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return 'rgb('+parseInt(result[1], 16)+', '+ parseInt(result[2], 16) + ', ' + parseInt(result[3], 16)+')';
  }

  getRandomColor = () => {
    let index = Math.floor(Math.random() * colors.length);
    
    if(document.getElementById("new-quote").style.backgroundColor != hexToRgb(colors[index].c)) {
      $("html body").animate({
        backgroundColor: colors[index].c,
        color: colors[index].c
      },
      700
      );
  
      $("#quote-box").animate({
        backgroundColor: colors[index].g
      },
      700
      );

      $("#triangle").animate({
        borderTopColor: colors[index].g
      },
      700
      );

      $("#new-quote").animate({
        backgroundColor: colors[index].c,
        color: colors[index].g
      },
      700
      );

      $("#tweet-quote").animate({
        color: colors[index].c
      },
      700
      );

      $(rightQ).css('color', 'black');
      $(rightQ).css('opacity', '1');
      $(leftQ).css('color', 'black');
      $(leftQ).css('opacity', '1');
    }
    
    else {
      getRandomColor();
    }
    
  }
    
  getRandomQuote = () => {
    let index = Math.floor(Math.random() * quotes.length);

    if(document.getElementById("text").innerHTML != quotes[index].quote) {
      
      $('#text').text('');
      $('#author').text('');
      $('#media').text('');
      
      $("#text").css("font-size", '20px')
      $("#author").css("font-size", '25px')
      
      if (quotes[index].quote.length > 120) {
        $("#text").css("font-size", '23px');
      }
      else if (quotes[index].quote.length > 100) {
        $("#text").css("font-size", '25px');
      }
      else if (quotes[index].quote.length > 60) {
        $("#text").css("font-size", '27px');
      }
      else if (quotes[index].quote.length > 30) {
        $("#text").css("font-size", '30px');
      }
      else if (quotes[index].quote.length > 20) {
        $("#text").css("font-size", '33px');
      }
      else if (quotes[index].quote.length > 10) {
        $("#text").css("font-size", '35px');
      }
      else if (quotes[index].quote.length > 0) {
        $("#text").css("font-size", '40px');
      }
      
      if (window.innerWidth < 700) {
        $("#text").css("font-size", '-=3.5px')
        $("#author").css("font-size", '-=3.5px')
      }
      
      console.log(window.innerWidth)
      console.log( $("#text").css("font-size"))
      
      $("#text").animate(
        { opacity: 0 },
        300,
        function() {
          $(this).animate({ opacity: 1}, 300);
          $('#text').text(quotes[index].quote);
        }
      );
      
      $('#media').animate(
        { opacity: 0 },
        300,
        function() {
          $(this).animate({ opacity: 1}, 300);
          $('#media').text(quotes[index].media);
        }
      );
      
      $('#author').animate(
        { opacity: 0 },
        300,
        function() {
          $(this).animate({ opacity: 1}, 300);
          $('#author').text(quotes[index].char);
        }
      );
      
    }
    
    else {
      getRandomQuote();
    }
    
  }

  $('#new-quote').on('click', getRandomQuote);
  $('#new-quote').on('click', btnLimit);
  $('#new-quote').on('click', getRandomColor);
  
});